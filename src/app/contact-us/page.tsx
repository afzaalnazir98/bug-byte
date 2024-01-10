
import * as React from "react";
import HeroSection from "@/utils/HeroSection";
import ContactForm from "@/components/forms/contact-page-form";
import ContactAgent from "@/public/assets/images/contact-agent.png";
import Container from "@/components/container";
import {Box} from "@mui/material";

const props = [
  {
    title: "Contact Us",
    text: "Get In Touch",
    des: "Lorem ipsum dolor sit amet, consectetur adipisc",
    image: {ContactAgent},
  },
];

export default function Services() {
  return (
    <Container>
      <Box color={"white"}>
        <HeroSection items={props[0]} image={ContactAgent} />
        <ContactForm />
      </Box>
    </Container>
  );
}
