"use client";

import * as React from "react";
import Container from "@/components/container";
import QuestionForm from "@/components/QuestionForm";
import Offering from "@/components/services/Offering";
import Work from "@/components/services/Work";
import ServicesImage from "@/public/assets/images/services.png";
import { Box } from "@mui/material";
import HeroSection from "@/utils/HeroSection";

const props = [
  {
    title: "Our Services",
    text: "Explore",
    des: "Lorem ipsum dolor sit amet, consectetur adipisc",
    image: { ServicesImage },
  },
];

export default function Service() {
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
            <HeroSection items={props[0]} image={ServicesImage} />
          </Box>
        </Container>
      </Box>
      <Offering />
      <Work />
      <QuestionForm />
    </>
  );
}
