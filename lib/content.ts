import {
  depoimentos as fallbackTestimonials,
  type Depoimento,
} from "@/content/depoimentos";
import {
  trabalhos as fallbackPortfolio,
  type Trabalho,
} from "@/content/portfolio";
import { servicos as fallbackServices, type Servico } from "@/content/servicos";
import { site as fallbackSite, type Site } from "@/content/site";
import { createClient } from "@/lib/supabase/server";
import type { SiteSettings } from "@/lib/supabase/types";

export async function getSiteSettings(): Promise<SiteSettings> {
  if (
    !process.env.NEXT_PUBLIC_SUPABASE_URL ||
    !process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY
  )
    return fallbackSite;
  const supabase = await createClient();
  const { data } = await supabase
    .from("site_settings")
    .select("data")
    .maybeSingle();
  return (data?.data as SiteSettings | null) ?? fallbackSite;
}

export async function getServices(): Promise<Servico[]> {
  if (
    !process.env.NEXT_PUBLIC_SUPABASE_URL ||
    !process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY
  )
    return fallbackServices;
  const supabase = await createClient();
  const { data } = await supabase
    .from("services")
    .select("*")
    .eq("ativo", true)
    .order("ordem");
  return data?.length
    ? (data.map((row) => ({
        ...row,
        destaques: row.destaques as string[],
      })) as Servico[])
    : fallbackServices;
}

export async function getPortfolio(): Promise<Trabalho[]> {
  if (
    !process.env.NEXT_PUBLIC_SUPABASE_URL ||
    !process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY
  )
    return fallbackPortfolio;
  const supabase = await createClient();
  const { data } = await supabase
    .from("portfolio")
    .select("id, categoria, titulo, imagem, before_image, after_image")
    .eq("ativo", true)
    .order("ordem");
  return data?.length
    ? (data.map((row) => ({
        id: row.id,
        categoria: row.categoria,
        titulo: row.titulo,
        imagem: row.imagem,
        before: row.before_image,
        after: row.after_image,
      })) as Trabalho[])
    : fallbackPortfolio;
}

export async function getTestimonials(): Promise<Depoimento[]> {
  if (
    !process.env.NEXT_PUBLIC_SUPABASE_URL ||
    !process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY
  )
    return fallbackTestimonials;
  const supabase = await createClient();
  const { data } = await supabase
    .from("testimonials")
    .select("nome, servico, texto")
    .eq("ativo", true)
    .order("ordem");
  return data?.length ? (data as Depoimento[]) : fallbackTestimonials;
}
