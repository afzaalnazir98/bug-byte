"use client";

import * as React from "react";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import Image from "next/image";

interface HeroSectionProps {
  items: {
    text: string;
    title: string;
    des: string;
  };
  image: {src: string};
}

export default function HeroSection({items, image}: HeroSectionProps) {
  return (
    <Grid
      container
      sx={{
        marginTop: {xs: "3rem", md: "0"},
      }}
    >
      <Grid
        item
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "start",
        }}
        md={5}
        sm={12}
        xs={12}
      >
        <Typography
          variant="body1"
          sx={{
            fontSize: {xs: "20px", sm: "28px"},
            fontWeight: {xs: 300, sm: 400},
          }}
        >
          {items.text}
        </Typography>
        <Typography
          variant="h1"
          sx={{
            fontSize: {xs: "60px", sm: "74px"},
            fontWeight: {xs: 500, sm: 700},
            lineHeight: {xs: "80%", sm: "104.5%"},
            textTransform: "capitalize",
          }}
        >
          {items.title}
        </Typography>
        <Typography
          variant="body1"
          sx={{
            fontSize: {xs: "18px", sm: "24px"},
            fontWeight: {xs: 300, sm: 400},
            lineHeight: "119%",
          }}
        >
          {items.des}
        </Typography>
      </Grid>
      <Grid
        item
        sx={{textAlign: "center", marginLeft: {md: "auto"}}}
        xs={12}
        sm={12}
        md={5}
      >
        <Image
          src={image.src}
          className="hero-image"
          alt="hero-image"
          width={400}
          height={400}
          style={{
            marginTop: "40px",
          }}
        />
      </Grid>
    </Grid>
  );
}
