"use client";

import * as React from "react";
import Typography from "@mui/material/Typography";
import {Box, Button} from "@mui/material";
import GameSlider from "@/components/Sliders/geme-experience-slider";

export default function GameExperience() {
  return (
    <Box
      sx={{
        background: "#FFF",
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
            marginTop: "100px",
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
      <GameSlider />
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          textAlign: "center",
          p: "0px 0 70px",
        }}
      >
        <Button
          sx={{
            position: "relative",
            marginTop: "25px",
            borderRadius: "6px",
            width: {xs: "150px", sm: "180px", md: "206px"},
            height: {xs: "30px", sm: "38px", md: "48px"},
            fontSize: {xs: "14px", md: "16px"},
            fontWeight: {xs: 400, md: 600},
            background: "linear-gradient(94deg, #C73300 10.11%, #F86910 89.7%)",
            boxShadow: "20px 25px 50px 0px rgba(0, 0, 0, 0.30)",
          }}
          type="submit"
          variant="contained"
        >
          View All Projects
        </Button>
      </Box>
    </Box>
  );
}
