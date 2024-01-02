import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

export default function MediaCard() {
  return (
    <Card sx={{borderRadius: "10px", background: "rgba(0, 0, 0, 0.40)"}}>
      <CardMedia
        sx={{height: 317, width: "100%"}}
        image="/assets/images/card1.png"
        title="card-image"
      />

      <CardContent
        sx={{
          paddingInline: "2rem",
          mt: 2,
          color: "white",
        }}
      >
        <Typography
          gutterBottom
          variant="h3"
          sx={{
            fontSize: "36px",
            fontWeight: 700,
            color: "white",
          }}
          component="div"
        >
          Super Jumper 3d Run
        </Typography>
        <Typography
          sx={{fontSize: "14px", fontWeight: 400, color: "white"}}
          variant="body1"
          gutterBottom
          color="text.secondary"
        >
          Adventure | Mobile | Action RPG
        </Typography>
        <Typography
          sx={{fontSize: "14px", mt: 2, fontWeight: 400, color: "white"}}
          variant="body1"
          color="text.secondary"
        >
          Mauris euismod nibh mollis sodales eleifend. Donec tempor erat risus,
          congue magna accumsan commodo pretium.. Read More
        </Typography>
        <Button
          sx={{
            borderRadius: "6px",
            mt: 2,
            width: "162px",
            height: "48px",
            fontSize: "18px",
            fontWeight: 600,
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
