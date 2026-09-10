"use client";

import { FormEvent, useEffect, useState } from "react";
import { createClient } from "@/lib/supabase/client";
import type {
  PortfolioRow,
  ServiceRow,
  SiteSettings,
  TestimonialRow,
} from "@/lib/supabase/types";

type Tab = "site" | "services" | "portfolio" | "testimonials";

const emptySettings: SiteSettings = {
  name: "Sadina Santos",
  tagline: "Mega Hair",
  title: "",
  description: "",
  whatsapp: "",
  whatsappDisplay: "",
  instagram: "",
  instagramHandle: "",
  email: "",
  city: "",
  address: "",
  heroBadge: "",
  hours: [],
};

export function AdminPanel() {
  const [tab, setTab] = useState<Tab>("site");
  const [settings, setSettings] = useState<SiteSettings>(emptySettings);
  const [services, setServices] = useState<ServiceRow[]>([]);
  const [portfolio, setPortfolio] = useState<PortfolioRow[]>([]);
  const [testimonials, setTestimonials] = useState<TestimonialRow[]>([]);
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(true);
  const supabase = createClient();

  useEffect(() => {
    async function load() {
      const [
        { data: site },
        { data: serviceRows },
        { data: portfolioRows },
        { data: testimonialRows },
      ] = await Promise.all([
        supabase.from("site_settings").select("data").maybeSingle(),
        supabase.from("services").select("*").order("ordem"),
        supabase
          .from("portfolio")
          .select("*, before_image, after_image")
          .order("ordem"),
        supabase.from("testimonials").select("*").order("ordem"),
      ]);
      if (site?.data) setSettings(site.data as SiteSettings);
      setServices((serviceRows ?? []) as ServiceRow[]);
      setPortfolio(
        (portfolioRows ?? []).map((item) => ({
          ...item,
          before: item.before_image,
          after: item.after_image,
        })) as PortfolioRow[],
      );
      setTestimonials((testimonialRows ?? []) as TestimonialRow[]);
      setLoading(false);
    }
    void load();
  }, []);

  async function saveSettings(event: FormEvent) {
    event.preventDefault();
    const { error } = await supabase.from("site_settings").upsert({
      id: true,
      data: settings,
      updated_at: new Date().toISOString(),
    });
    setMessage(error ? `Erro: ${error.message}` : "Configurações salvas.");
  }

  async function saveRow(
    table: string,
    row: Record<string, unknown>,
    id?: string,
  ) {
    const payload = { ...row, updated_at: new Date().toISOString() };
    const result = id
      ? await supabase.from(table).update(payload).eq("id", id)
      : await supabase.from(table).insert(payload);
    setMessage(
      result.error ? `Erro: ${result.error.message}` : "Alterações salvas.",
    );
  }

  async function removeRow<T extends { id: string }>(
    table: string,
    id: string,
    setter: (update: (rows: T[]) => T[]) => void,
  ) {
    const { error } = await supabase.from(table).delete().eq("id", id);
    if (!error) setter((current) => current.filter((row) => row.id !== id));
    setMessage(error ? `Erro: ${error.message}` : "Item removido.");
  }

  async function uploadImage(
    event: React.ChangeEvent<HTMLInputElement>,
    callback: (url: string) => void,
  ) {
    const file = event.target.files?.[0];
    if (!file) return;
    const path = `${crypto.randomUUID()}-${file.name}`;
    const { error } = await supabase.storage
      .from("site-images")
      .upload(path, file, { upsert: false });
    if (error) {
      setMessage(`Erro no upload: ${error.message}`);
      return;
    }
    const { data } = supabase.storage.from("site-images").getPublicUrl(path);
    callback(data.publicUrl);
    setMessage("Imagem enviada. Salve o item para publicar.");
  }

  if (loading)
    return (
      <p className="p-8 text-sm text-[var(--color-ink-soft)]">
        Carregando painel...
      </p>
    );

  return (
    <main className="admin-shell min-h-screen bg-[var(--color-paper)] px-6 py-8 md:px-10">
      <div className="mx-auto max-w-6xl">
        <header className="flex flex-wrap items-end justify-between gap-4 border-b border-[var(--color-border)] pb-6">
          <div>
            <p className="text-sm text-[var(--color-brand)]">Sadina Santos</p>
            <h1 className="mt-1 font-display text-4xl text-[var(--color-ink)]">
              Painel do site
            </h1>
          </div>
          <button
            onClick={() =>
              void supabase.auth.signOut().then(() => {
                window.location.href = "/admin/login";
              })
            }
            className="border border-[var(--color-border)] px-4 py-2 text-sm text-[var(--color-ink)]"
          >
            Sair
          </button>
        </header>
        <nav className="flex flex-wrap gap-2 py-6">
          {(
            [
              ["site", "Site"],
              ["services", "Serviços"],
              ["portfolio", "Trabalhos"],
              ["testimonials", "Depoimentos"],
            ] as [Tab, string][]
          ).map(([value, label]) => (
            <button
              key={value}
              onClick={() => setTab(value)}
              className={`px-4 py-2 text-sm ${tab === value ? "bg-[var(--color-brand)] text-white" : "border border-[var(--color-border)] text-[var(--color-ink)]"}`}
            >
              {label}
            </button>
          ))}
        </nav>
        {message && (
          <p className="mb-5 border border-[var(--color-border)] bg-[var(--color-paper-soft)] px-4 py-3 text-sm text-[var(--color-ink)]">
            {message}
          </p>
        )}
        {tab === "site" && (
          <form onSubmit={saveSettings} className="grid gap-4 md:grid-cols-2">
            {(
              [
                "name",
                "tagline",
                "heroBadge",
                "whatsapp",
                "whatsappDisplay",
                "instagram",
                "instagramHandle",
                "email",
                "city",
                "address",
                "title",
                "description",
              ] as (keyof SiteSettings)[]
            ).map((key) => (
              <label
                key={key}
                className="text-sm font-medium text-[var(--color-ink)]"
              >
                {key}
                <input
                  value={String(settings[key] ?? "")}
                  onChange={(event) =>
                    setSettings({ ...settings, [key]: event.target.value })
                  }
                  className="mt-1 w-full border border-[var(--color-border)] bg-[var(--color-paper-soft)] px-3 py-2"
                />
              </label>
            ))}
            <button className="w-fit bg-[var(--color-brand)] px-5 py-3 text-sm font-medium text-white">
              Salvar configurações
            </button>
          </form>
        )}
        {tab === "services" && (
          <div className="space-y-4">
            {services.map((row, index) => (
              <article
                key={row.id}
                className="border border-[var(--color-border)] bg-[var(--color-paper-soft)] p-5"
              >
                <div className="grid gap-3 md:grid-cols-2">
                  <input
                    value={row.nome}
                    onChange={(event) =>
                      setServices(
                        services.map((item) =>
                          item.id === row.id
                            ? { ...item, nome: event.target.value }
                            : item,
                        ),
                      )
                    }
                    className="border border-[var(--color-border)] bg-[var(--color-paper)] px-3 py-2"
                  />
                  <input
                    value={row.resumo}
                    onChange={(event) =>
                      setServices(
                        services.map((item) =>
                          item.id === row.id
                            ? { ...item, resumo: event.target.value }
                            : item,
                        ),
                      )
                    }
                    className="border border-[var(--color-border)] bg-[var(--color-paper)] px-3 py-2"
                  />
                  <textarea
                    value={row.descricao}
                    onChange={(event) =>
                      setServices(
                        services.map((item) =>
                          item.id === row.id
                            ? { ...item, descricao: event.target.value }
                            : item,
                        ),
                      )
                    }
                    className="min-h-24 border border-[var(--color-border)] bg-[var(--color-paper)] px-3 py-2 md:col-span-2"
                  />
                </div>
                <div className="mt-3 flex gap-3">
                  <button
                    onClick={() =>
                      void saveRow(
                        "services",
                        {
                          nome: row.nome,
                          resumo: row.resumo,
                          descricao: row.descricao,
                          ordem: index,
                        },
                        row.id,
                      )
                    }
                    className="bg-[var(--color-brand)] px-4 py-2 text-sm text-white"
                  >
                    Salvar
                  </button>
                  <button
                    onClick={() =>
                      void removeRow("services", row.id, setServices)
                    }
                    className="border border-red-300 px-4 py-2 text-sm text-red-700"
                  >
                    Excluir
                  </button>
                </div>
              </article>
            ))}
          </div>
        )}
        {tab === "portfolio" && (
          <div className="space-y-4">
            {portfolio.map((row, index) => (
              <article
                key={row.id}
                className="border border-[var(--color-border)] bg-[var(--color-paper-soft)] p-5"
              >
                <div className="grid gap-3 md:grid-cols-2">
                  <input
                    value={row.titulo}
                    onChange={(event) =>
                      setPortfolio(
                        portfolio.map((item) =>
                          item.id === row.id
                            ? { ...item, titulo: event.target.value }
                            : item,
                        ),
                      )
                    }
                    className="border border-[var(--color-border)] bg-[var(--color-paper)] px-3 py-2"
                  />
                  <input
                    value={row.categoria}
                    onChange={(event) =>
                      setPortfolio(
                        portfolio.map((item) =>
                          item.id === row.id
                            ? { ...item, categoria: event.target.value }
                            : item,
                        ),
                      )
                    }
                    className="border border-[var(--color-border)] bg-[var(--color-paper)] px-3 py-2"
                  />
                  <input
                    value={row.imagem}
                    onChange={(event) =>
                      setPortfolio(
                        portfolio.map((item) =>
                          item.id === row.id
                            ? { ...item, imagem: event.target.value }
                            : item,
                        ),
                      )
                    }
                    className="border border-[var(--color-border)] bg-[var(--color-paper)] px-3 py-2 md:col-span-2"
                  />
                  <label className="text-sm text-[var(--color-ink-soft)]">
                    Trocar imagem
                    <input
                      type="file"
                      accept="image/*"
                      onChange={(event) =>
                        void uploadImage(event, (url) =>
                          setPortfolio(
                            portfolio.map((item) =>
                              item.id === row.id
                                ? { ...item, imagem: url }
                                : item,
                            ),
                          ),
                        )
                      }
                      className="mt-1 block text-sm"
                    />
                  </label>
                </div>
                <div className="mt-3 flex gap-3">
                  <button
                    onClick={() =>
                      void saveRow(
                        "portfolio",
                        {
                          titulo: row.titulo,
                          categoria: row.categoria,
                          imagem: row.imagem,
                          ordem: index,
                        },
                        row.id,
                      )
                    }
                    className="bg-[var(--color-brand)] px-4 py-2 text-sm text-white"
                  >
                    Salvar
                  </button>
                  <button
                    onClick={() =>
                      void removeRow("portfolio", row.id, setPortfolio)
                    }
                    className="border border-red-300 px-4 py-2 text-sm text-red-700"
                  >
                    Excluir
                  </button>
                </div>
              </article>
            ))}
          </div>
        )}
        {tab === "testimonials" && (
          <div className="space-y-4">
            {testimonials.map((row, index) => (
              <article
                key={row.id}
                className="border border-[var(--color-border)] bg-[var(--color-paper-soft)] p-5"
              >
                <div className="grid gap-3 md:grid-cols-2">
                  <input
                    value={row.nome}
                    onChange={(event) =>
                      setTestimonials(
                        testimonials.map((item) =>
                          item.id === row.id
                            ? { ...item, nome: event.target.value }
                            : item,
                        ),
                      )
                    }
                    className="border border-[var(--color-border)] bg-[var(--color-paper)] px-3 py-2"
                  />
                  <input
                    value={row.servico}
                    onChange={(event) =>
                      setTestimonials(
                        testimonials.map((item) =>
                          item.id === row.id
                            ? { ...item, servico: event.target.value }
                            : item,
                        ),
                      )
                    }
                    className="border border-[var(--color-border)] bg-[var(--color-paper)] px-3 py-2"
                  />
                  <textarea
                    value={row.texto}
                    onChange={(event) =>
                      setTestimonials(
                        testimonials.map((item) =>
                          item.id === row.id
                            ? { ...item, texto: event.target.value }
                            : item,
                        ),
                      )
                    }
                    className="min-h-24 border border-[var(--color-border)] bg-[var(--color-paper)] px-3 py-2 md:col-span-2"
                  />
                </div>
                <div className="mt-3 flex gap-3">
                  <button
                    onClick={() =>
                      void saveRow(
                        "testimonials",
                        {
                          nome: row.nome,
                          servico: row.servico,
                          texto: row.texto,
                          ordem: index,
                        },
                        row.id,
                      )
                    }
                    className="bg-[var(--color-brand)] px-4 py-2 text-sm text-white"
                  >
                    Salvar
                  </button>
                  <button
                    onClick={() =>
                      void removeRow("testimonials", row.id, setTestimonials)
                    }
                    className="border border-red-300 px-4 py-2 text-sm text-red-700"
                  >
                    Excluir
                  </button>
                </div>
              </article>
            ))}
          </div>
        )}
      </div>
    </main>
  );
}
