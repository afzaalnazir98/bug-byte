"use client";

import Header from "@/components/Header";
import GameArt from "@/components/game-art";
import ProjectInfo from "@/components/portfolio-data/project-info";
import GetPlay from "@/components/portfolio-data/game-play";
import QuestionForm from "@/components/QuestionForm";
import OtherProject from "@/components/other-projects";
import { Box } from "@mui/material";

export default function PortfolioDetial() {
  return (
    <Box>
      <Header num={4} url={"/assets/images/about-us-bg.png"} />
      <GameArt />
      <ProjectInfo />
      <GetPlay />
      <OtherProject />
      <QuestionForm />
    </Box>
  );
}