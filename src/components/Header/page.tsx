"use client";

import * as React from "react";
import HeroSection from "@/utils/HeroSection";
import ContactAgent from "@/public/assets/images/contact-agent.png";
import Container from "@/components/container";

const props = [
  {
    title: "Contact Us",
    text: "Get In Touch",
    des: "Lorem ipsum dolor sit amet, consectetur adipisc",
    image: {ContactAgent},
  },
];

export default function Header() {
  return (
    <Container>
      <HeroSection items={props[0]} image={ContactAgent} />
    </Container>
  );
}
