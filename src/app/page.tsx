import * as React from "react";
import ServiceDetails from "./services-detail/page";
import HeroSlider from "@/components/ThemeRegistry/LandingPage/hero-slider";

export default function HomePage() {
  return (
    <>
      <HeroSlider />
      <ServiceDetails />
    </>
  );
}
