"use client";

import * as React from "react";
import HeroSection from "@/utils/HeroSection";
import Nav from "@/utils/Navbar";
import QuestionForm from "@/utils/QuestionForm";
import ConatactUsForm from "@/utils/ContactUsForm";
import {Container} from "@mui/material";
import {makeStyles} from "@material-ui/core/styles";
import ContactAgent from "@/public/assets/contact-agent.png";

const useStyles = makeStyles((theme) => ({
  serviceContainer: {
    maxWidth: "1300px",
    background: `
      linear-gradient(111deg, rgba(70, 28, 2, 0.60) -0.08%, rgba(0, 0, 0, 0.97) 100%),
      linear-gradient(111deg, rgba(88, 35, 2, 0.60) -0.08%, rgba(0, 0, 0, 0.97) 100%)
    `,
    color: "white",
    marginTop: "5em",
    [theme.breakpoints.down("xs")]: {
      marginTop: "1.5em",
    },
    [theme.breakpoints.down("sm")]: {
      marginTop: "2.5em",
    },
  },
}));

const props = [
  {
    title: "Contact Us",
    text: "Get In Touch",
    des: "Lorem ipsum dolor sit amet, consectetur adipisc",
    image: {ContactAgent},
  },
];

export default function Services() {
  const classes = useStyles();
  return (
    <Container className={classes.serviceContainer}>
      <Nav />
      <HeroSection items={props[0]} image={ContactAgent} />
      <ConatactUsForm />
    </Container>
  );
}
