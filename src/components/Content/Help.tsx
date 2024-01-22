"use client";
import * as React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Image from "next/image";
import {Button, styled} from "@mui/material";
import Link from "next/link";
import Container from "@/components/container";

export default function Help() {
  const HelpSection = styled(Box)({
    backgroundColor: "#F5F5F5",
    position: "relative",
  });

  const Cover = styled(Box)({
    backgroundImage: `url(${"/assets/images/help-bg.png"})`,
    backgroundPosition: "0% 100%",
    backgroundRepeat: "no-repeat",
    width: "100%",
    height: "100%",
    position: "absolute",
    top: "0",
  });

  const SubTitle = styled(Typography)({
    color: "#02060B",
    fontWeight: 600,
    lineHeight: "45.5px",
    textTransform: "uppercase",
  });

  const Title = styled(Typography)({
    backgroundImage:
      "linear-gradient(88deg, #DD2C00 -9.17%, #FF3F00 67.35%, #FA9D04 130.66%)",
    fontWeight: 700,
    lineHeight: "30px",
    letterSpacing: "0.8px",
    textTransform: "uppercase",
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent",
  });

  const Description = styled(Typography)({
    color: "#071421",
    fontWeight: 400,
    lineHeight: "20px",
  });

  const StyleButton = styled(Button)({
    borderRadius: "6px",
    backgroundImage:
      "linear-gradient(88deg, #DD2C00 -9.17%, #FF3F00 67.35%, #FA9D04 130.66%)",
    fontWeight: 600,
    textTransform: "capitalize",
    color: "#fff",
    maxWidth: "fit-content",
  });

  return (
    <HelpSection
      sx={{
        paddingBottom: {xs: "10rem", sm: "8rem", md: "2rem"},
      }}
    >
      <Cover
        sx={{
          backgroundSize: {xs: "cover", md: "auto"},
        }}
      />
      <Container>
        <Box
          sx={{
            display: "flex",
            position: "relative",
            gap: { lg: "8rem"},
            flexDirection: {xs: "column", md: "row"},
            justifyContent: {xs: "center", md: "space-between"},
            padding: {xs: "2rem 0rem", md: "4rem 0rem", lg: "8rem 0px"},
          }}
        >
          <Box
            sx={{
              maxWidth: "529px",
              height: "100%",
              alignSelf: "center",
              "& .character-image": {
                "@media (max-width: 600px)": {
                  width: "100%",
                  height: "auto",
                },
              },
            }}
          >
            <Image
              className="character-image"
              src="/assets/images/help-img.png"
              alt="help-img"
              width={505}
              height={535}
            />
          </Box>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignSelf: "center",
              gap: {xs:"15px",lg:"17px"},
              maxWidth: "548px",
            }}
          >
            <SubTitle
              sx={{
                fontSize: {xs: "20px", lg: "25px"},
              }}
            >
              HOW WE HELP YOU?
            </SubTitle>
            <Title
              sx={{
                fontSize: {xs: "20px", sm: "30px", lg: "40px"},
                lineHeight:{xs:"20px",sm:"25px",md:"30px",lg:"40px"},
                letterSpacing: {xs:"1.2",md:'1.8'}
              }}
            >
              Bringing People Together Through The Power Of Play
            </Title>
            <Description
              sx={{
                fontSize: {md: "18px", xs: "14px"},
                lineHeight:{xs:"18px",sm:"20px",lg:"25px"}, 
                color:"#071421"
              }}
            >
              Welcome to Buggbyte Studios! We create fun games using Unity and
              Unreal Engine. Have you ever heard of the Metaverse? It&apos;s a
              virtual world where our games come to life, and you can join in
              using AR and VR technology, which makes the experience even
              cooler. Your in-game items are extra special because of Blockchain
              and NFTs. They&apos;re like your own personal treasures! At Buggbyte
              Studios, we strive to make gaming easy, exciting, and filled with
              joy. Are you ready to play?
            </Description>
            <Box component={Link} href="/">
              <StyleButton
                sx={{
                  fontSize: {xs: "18px", md: "20px"},
                  padding: {xs: " 9px 20px", md: "9px 30px"},
                }}
              >
                More About Us
              </StyleButton>
            </Box>
          </Box>
        </Box>
      </Container>
    </HelpSection>
  );
}
