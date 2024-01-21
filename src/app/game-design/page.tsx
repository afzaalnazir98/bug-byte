import * as React from "react";
import HeroSection from "@/utils/HeroSection";
import GameDesign from "@/public/assets/images/game-design-1.png";
import Container from "@/components/container";
import { Box } from "@mui/material";
import QuestionForm from "@/components/QuestionForm";
import ServiceDetails from "../services-detail/page";
import jsonData from "@/Mocks/service-data.json";

const dataArray = jsonData.gameDesign;

const props = [
  {
    title: "GAME DESIGN",
    text: "Explore",
    des: "Lorem ipsum dolor sit amet, consectetur adipisc",
    image: { GameDesign },
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
            <HeroSection items={props[0]} image={GameDesign} />
          </Box>
        </Container>
      </Box>
      <ServiceDetails params={dataArray} />
      <QuestionForm />
    </>
  );
}
