import { Hero } from "../components/Hero";
import { Pillars } from "../components/Pillars";
import { PartnerTrust } from "../components/PartnerTrust";
import { PlatformDemo } from "../components/PlatformDemo";
import { Workflow } from "../components/Workflow";
import { Segments } from "../components/Segments";
import { ApiTeaser } from "../components/ApiTeaser";
import { Testimonials } from "../components/Testimonials";
import { Trust } from "../components/Trust";
import { CTACards } from "../components/CTACards";
import { FAQ } from "../components/FAQ";

export function HomePage() {
  return (
    <>
      <Hero />
      <Pillars />
      <PartnerTrust />
      <PlatformDemo />
      <Workflow />
      <Segments />
      <ApiTeaser />
      <Testimonials />
      <Trust />
      <CTACards />
      <FAQ />
    </>
  );
}
