"use client";

import React, { useState, useEffect } from "react";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import Image from "next/image";
import { HeroSectionProps } from "./types";
import { Box } from "@mui/material";

export default function HeroSection({ items, image }: HeroSectionProps) {
  const [screenWidth, setScreenWidth] = useState(global?.window && window.innerWidth);

  const isClient = typeof window !== "undefined";
  const pathName = isClient ? window.location.pathname : "";

  useEffect(() => {
    const handleResize = () => {
      setScreenWidth(window.innerWidth);
    };
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <Grid
      container
      sx={{
        padding: { xs: " 110px 0 0 0", md: " 150px 0 0 0" },
      }}
    >
      <Grid
        item
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: { xs: "center", md: "start" },
          mb: pathName == '/virtual-experience' ? {xs: 0, md:8} : 0,
        }}
        md={ pathName == '/virtual-experience' ?  12 : 5.8}
        sm={12}
        xs={12}
      >
        <Typography
          variant="body1"
          sx={{
            fontSize: { xs: "20px", sm: "28px" },
            fontWeight: { xs: 300, sm: 400 },
          }}
        >
          {items.text}
        </Typography>
        <Typography
          variant="h1"
          sx={{
            mt: 2,
            fontSize: { xs: "35px", sm: "45px", md: "60px", lg: "70px" },
            fontWeight: { xs: 500, sm: 700 },
            lineHeight: { xs: "80%", sm: "104.5%" },
            textTransform: "capitalize",
            textAlign: { xs: "center", md: "start" },
            backgroundImage:
              "linear-gradient(88deg, #DD2C00 -9.17%, #FF3F00 67.35%, #FA9D04 130.66%)",
            backgroundClip: "text",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
          }}
        >
          {items.title}
        </Typography>
        <Typography
          variant="body1"
          sx={{
            fontSize: { xs: "18px", sm: "24px" },
            fontWeight: { xs: 300, sm: 400 },
            lineHeight: "119%",
            textAlign: { xs: "center", md: "start" },
          }}
        >
          {items.des}
        </Typography>
      </Grid>
      <Grid
        item
        sx={{ textAlign: "center", marginLeft: { md: "auto" } }}
        xs={12}
        sm={12}
        md={5.1}
      >
        <Box
          sx={{
            mb: pathName == "/contact-us" ? 0 : 6,
            position: "relative",
            mt: { xs: 4, md: 0 },
          }}
        >
          {pathName !== '/virtual-experience' && (
            <Image
              src={image.src}
              className="hero-image"
              alt="hero-image"
              width={
                screenWidth >= 1200
                  ? 510
                  : screenWidth >= 899
                  ? 380
                  : screenWidth >= 600
                  ? 350
                  : 260
              }
              height={
                screenWidth >= 1200
                  ? 510
                  : screenWidth >= 899
                  ? 380
                  : screenWidth >= 600
                  ? 350
                  : 260
              }
            
            />
          )}
        </Box>
      </Grid>
    </Grid>
  );
}
