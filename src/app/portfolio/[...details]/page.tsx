"use client";

import {useEffect} from "react";
import {Box} from "@mui/material";
import PorfolioHeader from "@/components/PortfolioHeader";
import GameArt from "@/components/game-art";
import ProjectInfo from "@/components/portfolio-data/project-info";
import QuestionForm from "@/components/QuestionForm";
import OtherProject from "@/components/other-projects";
import projectDetails from "@/Mock/portfolio-detail.json";
import {notFound} from "next/navigation";
import {hero, gameArt, projectInfo} from "@/utils/types";

export default function Portfolio({params}: {params: {details: string[]}}) {
  const gameNameToFind = params.details[0] ?? "";
  const selectedGame = projectDetails.find(
    (item) => gameNameToFind in item
  ) as {
    [key: string]: {
      Header: hero;
      GameArt: gameArt;
      ProjectInfo: projectInfo;
    };
  };

  useEffect(() => {
    if (!selectedGame) {
      notFound();
    }
  }, [selectedGame]);

  if (!selectedGame) {
    return null;
  }

  return (
    <Box>
      {selectedGame[gameNameToFind]?.Header && (
        <PorfolioHeader headerData={selectedGame[gameNameToFind]?.Header} />
      )}
      {selectedGame[gameNameToFind]?.GameArt && (
        <GameArt gameArtData={selectedGame[gameNameToFind]?.GameArt} />
      )}
      {selectedGame[gameNameToFind]?.ProjectInfo && (
        <ProjectInfo
          portfolioData={selectedGame[gameNameToFind]?.ProjectInfo}
        />
      )}
      <OtherProject />
      <QuestionForm />
    </Box>
  );
}
