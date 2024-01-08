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
import Marquee from "react-fast-marquee";
import Container from "@/components/container";

export default function Sponsor() {
  const logoStyles = {
    display: "inline-block",
    margin: "0 10px",
  };

  const textToReverse = "BUG BYTE STUDIO";
  const reversedText = textToReverse.split("").reverse().join("");
  return (
    <>
      <Box
        sx={{
          background: "linear-gradient(0deg, white 60%, black 40%)",
          paddingBottom:"55px"
        }}
      >
        <Box
          sx={{
            maxWidth: "1440px",
            marginX: "auto",
          }}
        >
          <Marquee pauseOnHover={true}>
            <Box sx={logoStyles}>
              <Image src={Logo1} alt="Logo1" height={36} width={219} />
            </Box>
            <Box sx={logoStyles}>
              <Image src={Logo2} alt="Logo2" height={36} width={219} />
            </Box>
            <Box sx={logoStyles}>
              <Image src={Logo3} alt="Logo3" height={36} width={219} />
            </Box>
            <Box sx={logoStyles}>
              <Image src={Logo4} alt="Logo4" height={36} width={219} />
            </Box>
            <Box sx={logoStyles}>
              <Image src={Logo5} alt="Logo5" height={36} width={219} />
            </Box>
            <Box sx={logoStyles}>
              <Image src={Logo6} alt="Logo6" height={36} width={219} />
            </Box>
          </Marquee>
        </Box>

        <Box
          sx={{
            position: "relative",
            zIndex: 1,
            top: "34px",
          }}
        >
          <Box
            sx={{
              transform: "rotate(4.25deg)",
              width: "calc(100% + 14px)",
              padding: "30px 0px",
              marginLeft: "-8px",
              background:
                "linear-gradient(88deg, #DD2C00 -9.17%, #FF3F00 67.35%, #FA9D04 130.66%)",
            }}
          >
            <Container>
              <Marquee direction="right">
                <Box
                  sx={{
                    display: "inline-block",
                    whiteSpace: "nowrap",
                    overflow: "hidden",
                  }}
                >
                  <Box
                    sx={{
                      position: "relative",
                      zIndex: 2,
                    }}
                  >
                    <Box
                      sx={{
                        display: "flex",
                        justifyContent: "center",
                        gap: "4rem",
                        alignItems: "center",
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
              </Marquee>
            </Container>
          </Box>
          <Box
            sx={{
              background:
                "linear-gradient(90deg, rgba(247, 67, 29, 0.20) 0%, rgba(232, 57, 19, 0.20) 100%)",
              transform: "rotate(-1.545deg)",
              width: "calc(100% + 14px)",
              marginLeft: "-8px",
              position: "relative",
              zIndex: -1,
              overflow: "hidden",
              padding: "30px 0px",
            }}
          >
            <Container>
              <Marquee>
                <Box
                  sx={{
                    display: "inline-block",
                    whiteSpace: "nowrap",
                    overflow: "hidden",
                  }}
                >
                  <Box
                    sx={{
                      display: "flex",
                      justifyContent: "center",
                      gap: "4rem",
                      alignItems: "center",
                    }}
                  >
                    <Typography
                      sx={{
                        color: "#EAEAEA",
                        fontSize: "60px",
                        fontWeight: 600,
                        letterSpacing: "10.8px",
                        direction: "rtl",
                      }}
                    >
                      {reversedText}
                    </Typography>
                    <Image src={Star} alt="star" width={38} height={38} />
                    <Typography
                      sx={{
                        color: "#EAEAEA",
                        fontSize: "60px",
                        fontWeight: 600,
                        letterSpacing: "10.8px",
                        direction: "rtl",
                      }}
                    >
                      {reversedText}
                    </Typography>
                  </Box>
                </Box>
              </Marquee>
            </Container>
          </Box>
        </Box>
      </Box>
    </>
  );
}
