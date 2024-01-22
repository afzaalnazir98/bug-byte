import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Box } from "@mui/material";

export default function MediaCard() {
  const imagePath = "/assets/images/card-bg.png";

  return (
    <Card
      sx={{
        position: "relative",
        borderRadius: "20px",
        border: "1px solid #000",
        background: `linear-gradient(0deg, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0)), url(${imagePath})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        boxShadow: "0px 4px 4px 0px rgba(0, 0, 0, 0.25)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center", 
        flexDirection: "column",
        transition: "transform 0.5s ease",
        ":hover": {
          transform: "rotateY(180deg)",
          background: `linear-gradient(0deg, rgba(0, 0, 0, 0.75), rgba(0, 0, 0, 0.75)), url(${imagePath})`,
        },
      }}
    >
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexDirection: "column",
          opacity: 0,
          transition: "opacity 0.5s ease",
          transform: "rotateY(180deg)",
          ":hover": {
            opacity: 1,
          },
        }}
      >
        <CardMedia
          sx={{
            height: "194.221px",
            width: "194.221px",
            mt: 3,
          }}
          image="/assets/images/game-development-agency-logo-with-faeture-image-623505743 1.png"
          component="img"
          loading="lazy"
          title="card-image"
        />

        <CardContent
          sx={{
            paddingInline: { xs: "1rem", md: "2rem" },
            mt: { xs: 0, md: 2 },
            color: "white",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            flexDirection: "column",
            textAlign: "center",
          }}
        >
          <Typography
            variant="h3"
            sx={{
              fontSize: { xs: "20px", sm: "24px", md: "34px" },
              fontWeight: { xs: 600, sm: 700 },
              background:
                "linear-gradient(88deg, #DD2C00 -9.17%, #FF3F00 67.35%, #FA9D04 130.66%)",
              WebkitBackgroundClip: "text",
              color: "transparent",
            }}
          >
            Danger
          </Typography>
          <Typography
            sx={{
              fontSize: { xs: "12px", sm: "14px" },
              fontWeight: { xs: 300, sm: 400 },
              color: "white",
            }}
            variant="body1"
            gutterBottom
            color="text.secondary"
          >
            Lorem ipsum dolor sit amet, consectetu adit.
          </Typography>
        </CardContent>
      </Box>
    </Card>
  );
}
