"use client";

import React, {useState} from "react";
import Typography from "@mui/material/Typography";
import {Box, Button} from "@mui/material";
import dynamic from "next/dynamic";

const ImageMasonry = dynamic(() => import("./layout"), {ssr: false});

export default function PortfolioGameCards() {

  return (
    <Box
      sx={{
        background: "#FFF",
        padding: { xs: "50px 0px", md: "100px 0px" },
      }}
    >
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
          textAlign: "center",
          color: "white",
        }}
      >
        <Typography
          variant="body1"
          sx={{
            fontSize: "20px",
            fontWeight: 500,
            letterSpacing: "0.4px",
            textTransform: "uppercase",
            color: "#030A12",
          }}
        >
          Crafting Unforgettable Gaming Experiences
        </Typography>
        <Typography
          variant="h1"
          sx={{
            fontSize: {xs: "26px", sm: "32px", md: "40px"},
            fontWeight: {xs: 500, sm: 700},
            lineHeight: "41px",
            textTransform: "uppercase",
            mt: {xs: 1, md: 3},
            background:
              "linear-gradient(88deg, #DD2C00 -9.17%, #FF3F00 67.35%, #FA9D04 130.66%)",
            WebkitBackgroundClip: "text",
            color: "transparent",
          }}
        >
          Our Games Are Vibrant Worlds <br /> With Charming Characters
        </Typography>
      </Box>
      <ImageMasonry />
      
    </Box>
  );
}
