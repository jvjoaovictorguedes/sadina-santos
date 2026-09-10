import { Hero } from "@/components/sections/Hero";
import { ServicesMarquee } from "@/components/sections/ServicesMarquee";
import { Services } from "@/components/sections/Services";
import { StrandDivider } from "@/components/ui/StrandDivider";
import { PortfolioPreview } from "@/components/sections/PortfolioPreview";
import { About } from "@/components/sections/About";
import { Testimonials } from "@/components/sections/Testimonials";
import { ContactCTA } from "@/components/sections/ContactCTA";
import {
  getPortfolio,
  getServices,
  getSiteSettings,
  getTestimonials,
} from "@/lib/content";

export default async function HomePage() {
  const [site, services, portfolio, testimonials] = await Promise.all([
    getSiteSettings(),
    getServices(),
    getPortfolio(),
    getTestimonials(),
  ]);
  return (
    <>
      <Hero siteData={site} />
      <ServicesMarquee services={services} />
      <Services services={services} />
      <StrandDivider />
      <PortfolioPreview portfolio={portfolio} />
      <About />
      <Testimonials testimonials={testimonials} />
      <ContactCTA siteData={site} />
    </>
  );
}
