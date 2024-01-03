import * as React from "react";
import ServiceDetails from "./services-detail/page";
import HeroSlider from "@/components/ThemeRegistry/LandingPage/hero-slider";
import ProjectWithUs from "@/components/ThemeRegistry/LandingPage/project-withus";
import GameSlider from "@/components/Sliders/geme-experience-slider";

export default function HomePage() {
  return (
    <>
      <HeroSlider />
      <ProjectWithUs/>
      <ServiceDetails />
      <GameSlider />
    </>
  );
}
