import { Hero } from "@/components/sections/Hero";
import { AboutSection } from "@/components/sections/AboutSection";
import { ServicesGrid } from "@/components/sections/ServicesGrid";
import { IndustriesSection } from "@/components/sections/IndustriesSection";
import { WhyChooseUs } from "@/components/sections/WhyChooseUs";
import { ProcessSection } from "@/components/sections/ProcessSection";
import { CaseStudiesPreview } from "@/components/sections/CaseStudiesPreview";
import { TechStackSection } from "@/components/sections/TechStackSection";
import { TestimonialsSection } from "@/components/sections/TestimonialsSection";
import { StatsSection } from "@/components/sections/StatsSection";
import { ContactCTA } from "@/components/sections/ContactCTA";
import { TeamSection } from "@/components/sections/TeamSection";

export default function Home() {
  return (
    <>
      <Hero />
      <StatsSection />
      <AboutSection />
      <ServicesGrid />
      <IndustriesSection />
      <WhyChooseUs />
      <ProcessSection />
      <CaseStudiesPreview />
      <TechStackSection />
      <TeamSection />
      <TestimonialsSection />
      <ContactCTA />
    </>
  );
}
