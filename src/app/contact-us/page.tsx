import * as React from "react";
import HeroSection from "@/utils/HeroSection";
import ContactForm from "@/components/forms/contact-page-form";
import ContactAgent from "@/public/assets/images/contact-agent.png";
import Container from "@/components/container";
import { Box } from "@mui/material";

const props = [
  {
    title: "Contact Us",
    text: "Get In Touch",
    des: "Lorem ipsum dolor sit amet, consectetur adipisc",
    image: { ContactAgent },
  },
];

export default function Services() {
  const Image = "/assets/images/contactUs-hero-bg.png";
  return (
    <>
      <Box
        sx={{
          backgroundImage: `linear-gradient(rgba(0, 16, 32, 0.95), rgba(0, 16, 32, 0.95)), url(${"/assets/images/contactUs-hero-bg.png"})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <Container>
          <Box
            sx={{
              color: "#fff",
            }}
          >
            <HeroSection items={props[0]} image={ContactAgent} />
          </Box>
        </Container>
      </Box>
      <ContactForm />
      <iframe
       src="https://maps.google.com/maps?q=Webbuggs+%28Your+Cyber+Space+Existence+Managers%29&t=&z=20&ie=UTF8&iwloc=&output=embed"
        width={"100%"}
        height={393}
        allowFullScreen={true}
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
    </>
  );
}
