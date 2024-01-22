"use client";

import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import {MediaCardProps} from "@/utils/types";
import Link from "next/link";
import {Box} from "@mui/material";


export default function GameCard({gameExperience, isActive}: MediaCardProps) {
  return (
    <Card
      sx={{
        background: "#071421",
      }}
    >
      <CardMedia
        sx={{
          height: {xs: 170, sm: 210, md: 317},
          width: "100%",
          borderRadius: isActive
            ? "11.371px 11.371px 0px 0px"
            : "9.373px 9.373px 0px 0px",
        }}
        image="/assets/images/card1.png"
        component="img"
        loading="lazy"
        title="card-image"
      />

      <CardContent
        sx={{
          paddingInline: {xs: "0.5rem", md: "2rem"},
          mt: {xs: 0, md: 2},
          color: "white",
        }}
      >
        <Typography
          gutterBottom
          variant="h3"
          sx={{
            fontSize: {xs: "16px", sm: "24px", md: "34px"},
            fontWeight: {xs: 600, sm: 700},
            color: "white",
          }}
        >
          {gameExperience.title}
        </Typography>
        <Typography
          sx={{
            fontSize: {xs: "12px", sm: "14px"},
            fontWeight: {xs: 300, sm: 400},
            color: "white",
          }}
          variant="body1"
          gutterBottom
          color="text.secondary"
        >
          {gameExperience?.tags?.join(" | ")}
        </Typography>
        <Typography
          sx={{
            fontSize: {xs: "12px", md: "14px"},
            fontWeight: {xs: 300, md: 400},
            mt: {xs: 0, sm: 2},
            color: "white",
          }}
          variant="body1"
          color="text.secondary"
        >
          {gameExperience.description}
        </Typography>
        <Box component={Link} href={gameExperience.btnLink}>
          <Button
            sx={{
              borderRadius: "6px",
              mt: {xs: 1, sm: 2},
              width: {xs: "130px", md: "162px"},
              height: {xs: "30px", md: "48px"},
              fontSize: {xs: "14px", md: "18px"},
              fontWeight: {xs: 400, md: 600},
              background:
                "linear-gradient(94deg, #C73300 10.11%, #F86910 89.7%)",
            }}
            variant="contained"
          >
            {gameExperience.btnTitle}
          </Button>
        </Box>
      </CardContent>
    </Card>
  );
}
