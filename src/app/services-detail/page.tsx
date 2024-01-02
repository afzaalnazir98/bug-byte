"use client";

import * as React from "react";
import Box from "@mui/material/Box";
import Container from "@/utils/container";
import ContentComponent from "@/components/Content/Content";
import QuestionFormComponent from "@/utils/QuestionForm";

const dataArray = [
  {
    image: "/assets/images/unity-pic1.png",
    title: "Crossplatform Games",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore",
    buttonText: "contact us",
    buttonLink: "contact",
    order: 0,
  },
  {
    image: "/assets/images/unity-pic2.png",
    title: "Multiplayer Games",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore",
    buttonText: "Multiplayer",
    buttonLink: "contact",
    order: 1,
  },
  {
    image: "/assets/images/unity-pic3.png",
    title: "Hypercausal games",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore",
    buttonText: "Hypercausal",
    buttonLink: "contact",
    order: 0,
  },
  {
    image: "/assets/images/unity-pic4.png",
    title: "Simulation Games",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore",
    buttonText: "Simulation",
    buttonLink: "contact",
    order: 1,
  },
];

export default function ServiceDetails() {
  return (
    <>
      <Container>
        <Box
          sx={{
            color: "#fff",
            display: "grid",
          }}
        >
          {dataArray.map((item, index) => (
            <ContentComponent
              key={index}
              image={item.image}
              title={item.title}
              description={item.description}
              buttonText={item.buttonText}
              buttonLink={item.buttonLink}
              order={item.order}
            />
          ))}
        </Box>
        <QuestionFormComponent />
      </Container>
    </>
  );
}
