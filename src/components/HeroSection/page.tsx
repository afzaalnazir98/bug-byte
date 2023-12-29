"use client";

import * as React from "react";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import {makeStyles, useTheme} from "@material-ui/core/styles";
import useMediaQuery from "@material-ui/core/useMediaQuery";

const useStyles = makeStyles((theme) => ({
  hero_image: {
    width: "370px",
    [theme.breakpoints.down("sm")]: {
      width: "250px",
    },
  },
  centerTest: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "start",
  },
}));

interface HeroSectionProps {
  items: {
    text: string;
    title: string;
    des: string;
  };
  image: {src: string};
}

export default function HeroSection({items, image}: HeroSectionProps) {
  const classes = useStyles();
  const theme = useTheme();
  const matchesXS = useMediaQuery(theme.breakpoints.down("xs"));
  return (
    <Grid container spacing={0}>
      <Grid item className={classes.centerTest} xs={12} sm={7} md={7}>
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

      <Grid item sx={{textAlign: "center"}} xs={12} sm={5} md={5}>
        <img
          src={image.src}
          alt="hero-img"
          className={classes.hero_image}
          style={{
            height: "auto",
            marginTop: matchesXS ? "20px" : 0,
          }}
        />
      </Grid>
    </Grid>
  );
}
