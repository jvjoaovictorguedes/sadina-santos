import type { Metadata } from "next";
import Script from "next/script";
import "@fontsource/fraunces/400.css";
import "@fontsource/fraunces/400-italic.css";
import "@fontsource/fraunces/500.css";
import "@fontsource/fraunces/600.css";
import "@fontsource/manrope/400.css";
import "@fontsource/manrope/500.css";
import "@fontsource/manrope/600.css";
import "@fontsource/manrope/700.css";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { WhatsAppButton } from "@/components/layout/WhatsAppButton";
import { themeScript } from "@/lib/theme-script";
import { site } from "@/content/site";
import { getSiteSettings } from "@/lib/content";
import "./globals.css";

export const metadata: Metadata = {
  title: site.title,
  description: site.description,
  openGraph: {
    title: site.title,
    description: site.description,
    locale: "pt_BR",
  },
};

export default async function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  const site = await getSiteSettings();
  return (
    <html lang="pt-BR" suppressHydrationWarning>
      <head>
        <Script id="theme-script" strategy="beforeInteractive">
          {themeScript}
        </Script>
      </head>
      <body className="antialiased">
        <Header siteData={site} />
        <main>{children}</main>
        <Footer siteData={site} />
        <WhatsAppButton siteData={site} />
      </body>
    </html>
  );
}
