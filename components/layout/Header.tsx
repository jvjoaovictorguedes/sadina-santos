"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { Container } from "@/components/ui/Container";
import { ThemeToggle } from "@/components/ui/ThemeToggle";
import { CloseIcon, MenuIcon } from "@/components/ui/Icons";
import { site, whatsappLink } from "@/content/site";

const links = [
  { href: "/", label: "Início" },
  { href: "/servicos", label: "Serviços" },
  { href: "/trabalhos", label: "Trabalhos" },
  { href: "/sobre", label: "Sobre" },
];

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    function onScroll() {
      setScrolled(window.scrollY > 24);
    }
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  const solid = scrolled || open;

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-300 ${
        solid
          ? "bg-[var(--color-paper)]/95 shadow-[0_1px_0_var(--color-border)] backdrop-blur"
          : "bg-transparent"
      }`}
    >
      <Container className="flex h-20 items-center justify-between">
        <Link href="/" className="flex items-center gap-3">
          <span className="relative h-11 w-11 overflow-hidden rounded-full ring-1 ring-[var(--color-border)]">
            <Image
              src="/logo/logo-sadina.jpg"
              alt="Logo Sadina Santos"
              fill
              sizes="44px"
              className="object-cover"
              priority
            />
          </span>
          <span className="flex flex-col leading-tight">
            <span className="font-display text-lg text-[var(--color-ink)]">
              Sadina Santos
            </span>
            <span className="text-[11px] text-[var(--color-ink-soft)]">
              {site.tagline}
            </span>
          </span>
        </Link>

        <nav className="hidden items-center gap-9 md:flex">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`text-sm transition-colors hover:text-[var(--color-brand)] ${
                pathname === link.href
                  ? "text-[var(--color-brand)]"
                  : "text-[var(--color-ink)]"
              }`}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-3 md:flex">
          <ThemeToggle />
          <Link
            href={whatsappLink("Olá! Gostaria de agendar um horário.")}
            target="_blank"
            className="rounded-full bg-[var(--color-brand)] px-5 py-2.5 text-sm font-medium text-white transition-colors hover:bg-[var(--color-brand-deep)]"
          >
            Agendar horário
          </Link>
        </div>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-label={open ? "Fechar menu" : "Abrir menu"}
          className="flex h-10 w-10 items-center justify-center text-[var(--color-ink)] md:hidden"
        >
          {open ? <CloseIcon /> : <MenuIcon />}
        </button>
      </Container>

      {open && (
        <div className="border-t border-[var(--color-border)] bg-[var(--color-paper)] px-6 py-6 md:hidden">
          <nav className="flex flex-col gap-4">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-base text-[var(--color-ink)]"
              >
                {link.label}
              </Link>
            ))}
          </nav>
          <div className="mt-6 flex items-center justify-between">
            <ThemeToggle />
            <Link
              href={whatsappLink("Olá! Gostaria de agendar um horário.")}
              target="_blank"
              className="rounded-full bg-[var(--color-brand)] px-5 py-2.5 text-sm font-medium text-white"
            >
              Agendar horário
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
