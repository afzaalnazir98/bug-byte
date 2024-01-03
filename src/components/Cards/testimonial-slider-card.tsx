import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";

export default function MediaCard() {
  const imagePath = "/assets/images/card-bg.png";

  return (
    <Card
      sx={{
        borderRadius: "20px",
        border: "1px solid #000",
        background: `linear-gradient(0deg, rgba(0, 0, 0, 0.75), rgba(0, 0, 0, 0.75)), url(${imagePath})`,
        backgroundSize: "cover", 
        backgroundPosition: "center", 
        boxShadow: "0px 4px 4px 0px rgba(0, 0, 0, 0.25)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column",
      }}
    >
      <CardMedia
        sx={{
          height: "194.221px",
          width: "194.221px",
          mt:3
        }}
        image="/assets/images/game-development-agency-logo-with-faeture-image-623505743 1.png"
        component="img"
        loading="lazy"
        title="card-image"
      />

      <CardContent
        sx={{
          paddingInline: {xs: "1rem", md: "2rem"},
          mt: {xs: 0, md: 2},
          color: "white",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexDirection: "column",
        }}
      >
        <Typography
          
          variant="h3"
          sx={{
            fontSize: {xs: "20px", sm: "24px", md: "34px"},
            fontWeight: {xs: 600, sm: 700},
            color: "#FE7624",
          }}
          component="div"
        >
          Danger
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
          Lorem ipsum dolor sit amet, consectetu adit. 
        </Typography>
      </CardContent>
    </Card>
  );
}