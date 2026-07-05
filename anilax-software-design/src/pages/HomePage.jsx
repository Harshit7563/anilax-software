import { Hero } from "../components/Hero";
import { ServiceSolutions } from "../components/ServiceSolutions";
import { StatsBar } from "../components/StatsBar";
import { CaseStudies } from "../components/CaseStudies";
import { IndustriesSection } from "../components/IndustriesSection";
import { Workflow } from "../components/Workflow";
import { TechServices } from "../components/TechServices";
import { Testimonials } from "../components/Testimonials";
import { FAQ } from "../components/FAQ";
import { ContactSection } from "../components/ContactSection";

export function HomePage() {
  return (
    <>
      <Hero />
      <ServiceSolutions />
      <StatsBar />
      <CaseStudies />
      <IndustriesSection />
      <Workflow />
      <TechServices />
      <Testimonials />
      <FAQ />
      <ContactSection />
    </>
  );
}
