"use client";

import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

interface MediaCardProps {
  isActive: boolean;
}

export default function MediaCard({isActive}: MediaCardProps) {
  return (
    //     border-radius: 5px;
    // border: 5px solid rgba(240, 75, 18, 0.56),
    // background: #071421,
    // box-shadow: 0px 4.549px 45.486px 0px rgba(0, 0, 0, 0.10)
    <Card
      sx={{
        // border: isActive ? "5px solid rgba(240, 75, 18, 0.56)" : "",
        // boxShadow: isActive
        //   ? "0px 4.549px 45.486px 0px rgba(0, 0, 0, 0.10)"
        //   : "",
        // borderRadius: "10px",
        background: "#071421",
        // transform: isActive ? "scale(1.2)" : "scale(1)",
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
          component="div"
        >
          Super Jumper 3d Run
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
          Adventure | Mobile | Action RPG
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
          Mauris euismod nibh mollis sodales eleifend. Donec tempor erat risus,
          congue magna accumsan commodo pretium.. Read More
        </Typography>
        <Button
          sx={{
            borderRadius: "6px",
            mt: {xs: 1, sm: 2},
            width: {xs: "130px", md: "162px"},
            height: {xs: "30px", md: "48px"},
            fontSize: {xs: "14px", md: "18px"},
            fontWeight: {xs: 400, md: 600},
            background: "linear-gradient(94deg, #C73300 10.11%, #F86910 89.7%)",
          }}
          type="submit"
          variant="contained"
        >
          View Details
        </Button>
      </CardContent>
    </Card>
  );
}
