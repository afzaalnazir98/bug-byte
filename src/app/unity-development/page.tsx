import * as React from "react";
import HeroSection from "@/utils/HeroSection";
import ContactForm from "@/components/forms/contact-page-form";
import UnityDev from "@/public/assets/images/unityDev.png";
import Container from "@/components/container";
import { Box } from "@mui/material";
import QuestionForm from "@/components/QuestionForm";
import ServiceDetails from "../services-detail/page";
import jsonData from "@/Mocks/service-data.json";

// Extract the data array
const dataArray = jsonData.serviceDetail;

const props = [
  {
    title: "UNITY & UNREAL DEVELOPMENT",
    text: "Explore",
    des: "Lorem ipsum dolor sit amet, consectetur adipisc",
    image: { UnityDev },
  },
];

export default function Services() {
  const Image = "/assets/images/contactUs-hero-bg.png";
  return (
    <>
      <Box
        sx={{
          backgroundImage: `linear-gradient(rgba(0, 16, 32, 0.95), rgba(0, 16, 32, 0.95)), url(${"/assets/images/common-bg.png"})`,
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
            <HeroSection items={props[0]} image={UnityDev} />
          </Box>
        </Container>
      </Box>
      <ServiceDetails params={dataArray} />
      <QuestionForm />
    </>
  );
}
