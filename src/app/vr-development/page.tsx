import * as React from "react";
import HeroSection from "@/utils/HeroSection";
import VRDevelopment from "@/public/assets/images/vr-dev.png";
import Container from "@/components/container";
import { Box } from "@mui/material";
import QuestionForm from "@/components/QuestionForm";
import ServiceDetails from "../services-detail/page";
import jsonData from "@/Mocks/service-data.json";

const dataArray = jsonData.VRDevelopment;

const props = [
  {
    title: "VR DEVELOPMENT",
    text: "Explore",
    des: "Lorem ipsum dolor sit amet, consectetur adipisc",
    image: { VRDevelopment },
  },
];

export default function Services() {
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
            <HeroSection items={props[0]} image={VRDevelopment} />
          </Box>
        </Container>
      </Box>
      <ServiceDetails params={dataArray} />
      <QuestionForm />
    </>
  );
}
