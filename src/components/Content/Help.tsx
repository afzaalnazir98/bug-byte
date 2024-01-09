"use client";
import * as React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Image from "next/image";
import {Button} from "@mui/material";
import Link from "next/link";
import Container from "@/components/container";

export default function Help() {
  return (
    <Box
      sx={{
        backgroundColor: "#F5F5F5",
        position: "relative",
      }}
    >
      <Box
        sx={{
          backgroundImage: `url(${"/assets/images/help-bg.png"})`,
          backgroundPosition: "0% 100%",
          backgroundRepeat: "no-repeat",
          backgroundSize: {xs: "cover", md: "auto"},
          width: "100%",
          height: "100%",
          position: "absolute",
          top: "0",
        }}
      />
      <Container>
        <Box
          sx={{
            position: "relative",
            padding: "150px 0px",
            display: "flex",
            flexDirection: {xs: "column", md: "row"},
            justifyContent: {xs: "center", md: "space-between"},
            gap: {sm: "2rem", md: "4rem", lg: "8rem"},
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
              gap: {xs: "20px", md: "30px", lg: "42px"},
              maxWidth: "548px",
            }}
          >
            <Typography
              sx={{
                color: "#02060B",
                fontSize: {xs: "20px", lg: "25px"},
                fontWeight: 600,
                lineHeight: "45.5px",
                textTransform: "uppercase",
              }}
            >
              HOW WE HELP YOU?
            </Typography>
            <Typography
              sx={{
                backgroundImage:
                  "linear-gradient(88deg, #DD2C00 -9.17%, #FF3F00 67.35%, #FA9D04 130.66%)",
                fontSize: {xs: "20px", sm: "30px", lg: "40px"},
                fontWeight: 700,
                lineHeight: "30px",
                letterSpacing: "0.8px",
                textTransform: "uppercase",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              Bringing People Together Through The Power Of Play
            </Typography>

            <Typography
              sx={{
                color: "#071421",

                fontSize: {xs: "18px", md: "14px"},
                fontWeight: 400,
                lineHeight: "20px",
              }}
            >
              Share your idea and we guarantee to design an outstanding version
              of the game for you. Our game developers are experts in compatible
              across all devices.
            </Typography>

            <Box component={Link} href="#">
              <Button
                sx={{
                  padding: {xs: " 9px 20px", md: "9px 30px"},
                  borderRadius: "6px",
                  backgroundImage:
                    "linear-gradient(88deg, #DD2C00 -9.17%, #FF3F00 67.35%, #FA9D04 130.66%)",
                  fontSize: {xs: "18px", md: "20px"},
                  fontWeight: 600,
                  textTransform: "capitalize",
                  color: "#fff",
                  maxWidth: "fit-content",
                }}
              >
                More About Us
              </Button>
            </Box>
          </Box>
        </Box>
      </Container>
    </Box>
  );
}
