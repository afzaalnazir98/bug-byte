"use client";

import React from "react";
import { Box, Typography } from "@mui/material";
import Logo1 from "@/public/assets/social-media-icons/scroll-logo1.svg";
import Logo2 from "@/public/assets/social-media-icons/scroll-logo2.svg";
import Logo3 from "@/public/assets/social-media-icons/scroll-logo3.svg";
import Logo4 from "@/public/assets/social-media-icons/scroll-logo4.svg";
import Logo5 from "@/public/assets/social-media-icons/scroll-logo5.svg";
import Logo6 from "@/public/assets/social-media-icons/scroll-logo6.svg";
import Star from "@/public/assets/social-media-icons/star.svg";
import Image from "next/image";
import Container from "@/components/container";

export default function Sponsor() {
  const logoContainerStyles = {
    overflow: "hidden",
    whiteSpace: "nowrap",
  };

  const logoStyles = {
    display: "inline-block",
    margin: "0 10px",
    animation: "scroll 5s linear infinite",
  };

  const secondBoxStyles = {
    position: "relative",
    zIndex: 2,
    animation: "scrollOpposite 15s linear infinite",
  };

  const banner = {
    position: "relative",
    top: "51px",
    transform: "rotate(4.25deg)",
    width: "calc(100% + 18px)",
    background:
      "linear-gradient(88deg, #DD2C00 -9.17%, #FF3F00 67.35%, #FA9D04 130.66%)",
    padding: "30px 0px",
  };
  return (
    <>
      <Box
        sx={{
          padding: "200px 0px",
        }}
      >
        <Box sx={logoContainerStyles}>
          <Image
            src={Logo1}
            alt="Logo1"
            height={36}
            width={219}
            style={logoStyles}
          />
          <Image
            src={Logo2}
            alt="Logo2"
            height={36}
            width={219}
            style={logoStyles}
          />
          <Image
            src={Logo3}
            alt="Logo3"
            height={36}
            width={219}
            style={logoStyles}
          />
          <Image
            src={Logo4}
            alt="Logo4"
            height={36}
            width={219}
            style={logoStyles}
          />
          <Image
            src={Logo5}
            alt="Logo5"
            height={36}
            width={219}
            style={logoStyles}
          />
          <Image
            src={Logo6}
            alt="Logo6"
            height={36}
            width={219}
            style={logoStyles}
          />
        </Box>
        <Box>
          <Box sx={banner}>
            <Container>
              <Box
                sx={{
                  display: "inline-block",
                  whiteSpace: "nowrap",
                  overflow: "hidden",
                }}
              >
                <Box sx={secondBoxStyles}>
                  <Box
                    sx={{
                      display: "flex",
                      justifyContent: "center",
                      gap: "4rem",
                      alignItems: "center",
                      transform: "rotate(-0.5deg)",
                    }}
                  >
                    <Typography
                      sx={{
                        color: "#EAEAEA",
                        fontSize: "60px",
                        fontWeight: 600,
                        letterSpacing: "10.8px",
                      }}
                    >
                      BUG BYTE STUDIO
                    </Typography>
                    <Image src={Star} alt="star" width={38} height={38} />
                    <Typography
                      sx={{
                        color: "#EAEAEA",
                        fontSize: "60px",
                        fontWeight: 600,
                        letterSpacing: "10.8px",
                      }}
                    >
                      BUG BYTE STUDIO
                    </Typography>
                  </Box>
                </Box>
              </Box>
            </Container>
          </Box>
        </Box>
      </Box>
    </>
  );
}
