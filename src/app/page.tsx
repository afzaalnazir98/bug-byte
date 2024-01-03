import * as React from "react";
import ServiceDetails from "./services-detail/page";
import HeroSlider from "@/components/ThemeRegistry/LandingPage/hero-slider";
import ProjectWithUs from "@/components/ThemeRegistry/LandingPage/project-withus";
import GameExperienceSection from "@/components/game-experience-section";
import TestimonialSection from "@/components/testmonial-slider-section";

export default function HomePage() {
  return (
    <>
      <HeroSlider />
      <ProjectWithUs />
      <ServiceDetails />
      <GameExperienceSection />
      <TestimonialSection />
    </>
  );
}
