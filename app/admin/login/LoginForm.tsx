"use client";

import { FormEvent, useState } from "react";
import { useRouter } from "next/navigation";
import { createClient } from "@/lib/supabase/client";

export function LoginForm() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setLoading(true);
    setError("");
    const supabase = createClient();
    const { error: signInError } = await supabase.auth.signInWithPassword({
      email,
      password,
    });
    if (signInError) {
      setError("E-mail ou senha inválidos.");
      setLoading(false);
      return;
    }
    router.replace("/admin");
    router.refresh();
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="admin-login w-full max-w-md border border-[var(--color-border)] bg-[var(--color-paper-soft)] p-8 shadow-sm"
    >
      <p className="text-sm text-[var(--color-brand)]">Área restrita</p>
      <h1 className="mt-2 font-display text-4xl text-[var(--color-ink)]">
        Administração
      </h1>
      <p className="mt-3 text-sm leading-relaxed text-[var(--color-ink-soft)]">
        Entre para atualizar o conteúdo do site.
      </p>
      <label className="mt-8 block text-sm font-medium text-[var(--color-ink)]">
        E-mail
        <input
          value={email}
          onChange={(event) => setEmail(event.target.value)}
          type="email"
          required
          className="mt-2 w-full border border-[var(--color-border)] bg-[var(--color-paper)] px-3 py-3 outline-none focus:border-[var(--color-brand)]"
        />
      </label>
      <label className="mt-4 block text-sm font-medium text-[var(--color-ink)]">
        Senha
        <input
          value={password}
          onChange={(event) => setPassword(event.target.value)}
          type="password"
          required
          className="mt-2 w-full border border-[var(--color-border)] bg-[var(--color-paper)] px-3 py-3 outline-none focus:border-[var(--color-brand)]"
        />
      </label>
      {error && <p className="mt-4 text-sm text-red-700">{error}</p>}
      <button
        disabled={loading}
        className="mt-6 w-full bg-[var(--color-brand)] px-5 py-3 text-sm font-medium text-white disabled:opacity-60"
      >
        {loading ? "Entrando..." : "Entrar"}
      </button>
    </form>
  );
}
