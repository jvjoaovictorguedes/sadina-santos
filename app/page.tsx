import { Hero } from "@/components/sections/Hero";
import { ServicesMarquee } from "@/components/sections/ServicesMarquee";
import { Services } from "@/components/sections/Services";
import { StrandDivider } from "@/components/ui/StrandDivider";
import { PortfolioPreview } from "@/components/sections/PortfolioPreview";
import { About } from "@/components/sections/About";
import { Testimonials } from "@/components/sections/Testimonials";
import { ContactCTA } from "@/components/sections/ContactCTA";

export default function HomePage() {
  return (
    <>
      <Hero />
      <ServicesMarquee />
      <Services />
      <StrandDivider />
      <PortfolioPreview />
      <About />
      <Testimonials />
      <ContactCTA />
    </>
  );
}
