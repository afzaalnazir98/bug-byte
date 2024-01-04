"use client";
import * as React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Image from "next/image";
import { Button } from "@mui/material";
import Link from "next/link";
import Container from "@/utils/container";




const HelpImageStyled = {

  "@media (min-width: 280px)": {
    width:'270px',
    height:'250px',
  },
  "@media (min-width: 400px)": {
    width:'370px',
    height:'350px',
  },
  "@media (min-width: 600px)": {
    width:'400px',
    height:'380px',
  },
  "@media (min-width: 1200px)": {
    width:'488px',
    height:'468px'
  },
};

export default function Help() {
  return (
    <Box>
      <Container>
        <Box
          sx={{
            display: "flex",
            flexDirection:{ xs:"column",md:"row" },
            justifyContent: {xs:"center",md:"space-between"},
            gap:{xs:'10px', md:'20px',lg:'30px'}
          }}
        >
          <Box
            sx={{
              alignSelf: 'center',
              maxWidth: {xs:"380px",md:"580.46px"},
              display: "flex",
              gap:{ xs:"12px",md:"18px",lg:"24px"},
              flexDirection: "column",
              order:{xs:2,md:1},
              justifyContent: "center",
            }}
          >
            <Typography
              sx={{
                color: "#FE7624",
                fontSize: { xs: "18px", sm: "14px" },
                fontWeight: 600,
                textTransform: "uppercase",
                lineHeight: "45.5px" / 325% /,
                letterSpacing: "4.34px",
              }}
            >
              HOW WE HELP YOU?
            </Typography>
            <Typography
              sx={{
                color: "#EAEAEA",
                fontSize: "40px",
                fontWeight: 700,
                lineHeight: "45.5px" / 113.75% /,
                letterSpacing: "0.8px",
                textTransform: "uppercase",
              }}
            >
              Bringing People Together Through The Power Of Play
            </Typography>
            <Typography
              sx={{
                color: "#EAEAEA",
                fontSize: "18px",
                fontWeight: 400,
                textTransform: "uppercase",
              }}
            >
              Share your idea and we guarantee to design an outstanding version
              of the game for you. Our game developers are experts in compatible
              across all devices. This has made us to completely drench into the
              technology of gaming and thus lead to the stage where we have the
              solution for each game in the world. As a leading game development
              company in Pakistan, we use the best gaming technologies in the
              industry to build exceptionally high-quality and exclusive games.
            </Typography>
            <Box component={Link} href="#">
              <Button
                sx={{
                  padding: { xs: " 7px 58px", md: "7px 80px" },
                  borderRadius: "6px",
                  backgroundImage:
                    "linear-gradient(90deg, #F04B12 0%, #FB8843 100%)",
                  fontSize: { xs: "18px", md: "24px" },
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
          <Box sx={{
            alignSelf: 'center',
            order:{xs:1,md:2},
          }}>


          <Box  sx={{
                  "&  .project-image": {
                    ...HelpImageStyled
                  }
                }}>
              <Image
              className="project-image"
                src="/assets/images/racing-car.png"
                alt="racing-car"
                width={588}
                height={568}
               />

              </Box>

          </Box>
        </Box>
      </Container>
    </Box>
  );
}