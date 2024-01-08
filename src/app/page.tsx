import * as React from "react";
import ServiceDetails from "./services-detail/page";
import HeroSlider from "@/components/ThemeRegistry/LandingPage/hero-slider";
import ProjectWithUs from "@/components/ThemeRegistry/LandingPage/project-withus";
import Sponser from "@/components/ThemeRegistry/LandingPage/sponser";
import GameExperienceSection from "@/components/game-experience-section";
import TestimonialSection from "@/components/testmonial-slider-section";
import Help from "@/components/Content/Help";
import StudioFacts from "@/components/studio-facts";
import QuestionFormComponent from "@/utils/QuestionForm";

export default function HomePage() {
  return (
    <>
      <HeroSlider />
      <Help />
      <ProjectWithUs />
      <Sponser />
      <GameExperienceSection />
      <StudioFacts />
      <TestimonialSection />
      <ServiceDetails />
      <QuestionFormComponent />
    </>
  );
}
