import * as React from "react";
import HeroSection from "@/utils/HeroSection";
import ContactForm from "@/components/forms/contact-page-form";
import Container from "@/components/container";
import { Box } from "@mui/material";
import {hero} from "@/utils/types";
import HerosData from "@/Mock/HerosData.json" ;
import Header from "@/components/Header";


const Heros: hero[] = HerosData;


export default function Services() {
  return (
    <>
      <Header num={0} url={"/assets/images/contactUs-hero-bg.png"}/>
      <ContactForm />
      <iframe
       src="https://maps.google.com/maps?q=Webbuggs+%28Your+Cyber+Space+Existence+Managers%29&t=&z=20&ie=UTF8&iwloc=&output=embed"
        width={"100%"}
        height={393}
        allowFullScreen={true}
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
    </>
  );
}
