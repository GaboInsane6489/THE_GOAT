import React from "react";
import { HeroSection } from "@/components/sections/HeroSection";
import { MetricsRibbon } from "@/components/sections/MetricsRibbon";
import { ExperienceTimeline } from "@/components/sections/ExperienceTimeline";
import { ProjectsGrid } from "@/components/sections/ProjectsGrid";
import { TechMatrix } from "@/components/sections/TechMatrix";
import { ContactSection } from "@/components/sections/ContactSection";

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <MetricsRibbon />
      <ExperienceTimeline />
      <ProjectsGrid />
      <TechMatrix />
      <ContactSection />
    </>
  );
}
