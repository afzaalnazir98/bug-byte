"use client";
import Image from "next/image";

import {Box, Button, Grid, Typography, styled} from "@mui/material";
import {Swiper, SwiperSlide} from "swiper/react";
import {Pagination, Autoplay, EffectFade} from "swiper/modules";

import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/pagination";
import Container from "@/utils/container";
import Link from "next/link";

export default function HeroSlider() {
  const pagination = {
    el: ".swiper-pagination",
    dynamicBullets: true,
    dynamicMainBullets: 5,
    clickable: true,
    renderBullet: (index: any, className: any) => {
      const titles = [
        "Blockchain",
        "AR/VR",
        // "Metaverse",
        // "Unity Development",
        // "NFT",
        // "Metaverse",
      ];
      return `<span class="${className}">${titles[index]}</span>`;
    },
  };

  styled(Box)``;

  const swiperStyles = {
    "& .swiper-pagination-bullets": {
      position: "unset",
    },
    "& .swiper-pagination-bullets .swiper-pagination-bullet": {
      background: "transparent",
      height: "auto",
      width: "auto",
      margin: 0,
      borderBottom: "2px solid rgba(255, 255, 255, 0.8)",
      borderRadius: 0,
      transition: "0.4s all !important",
      color: "white",
      opacity: 1,
      padding: "0 40px 24px",
      visibility: "hidden",
    },
    "& .swiper-pagination-bullets .swiper-pagination-bullet.swiper-pagination-bullet-active-main":
      {
        visibility: "visible",
      },
    "& .swiper-pagination-bullets .swiper-pagination-bullet-active": {
      color: "#FE7624",
      borderBottom: "2px solid rgba(254, 118, 36, 0.8)",
    },
    "& .swiper-fade .swiper-slide": {
      opacity: "0 !important",
    },
    "& .swiper-fade .swiper-slide-active": {
      opacity: "1 !important",
    },
    "& .swiper-pagination-horizontal.swiper-pagination-bullets.swiper-pagination-bullets-dynamic":
      {
        overflow: "hidden",
        fontSize: "20px",
        maxWidth: "100%",
        transform: "unset",
      },
    "& .swiper-pagination-bullets-dynamic .swiper-pagination-bullet-active-next, & .swiper-pagination-bullets-dynamic .swiper-pagination-bullet-active-prev":
      {
        opacity: 0,
        transform: "scale(1)",
      },
  };

  return (
    <Box>
      <Box sx={swiperStyles}>
        <Swiper
          loop
          effect="fade"
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          pagination={pagination}
          modules={[EffectFade, Autoplay, Pagination]}
          onSwiper={(swiper) => console.log(swiper)}
        >
          {[1, 2, 3, 4, 5, 6, 7, 8].map((num, index) => (
            <SwiperSlide key={index}>
              <Container>
                <Grid container>
                  <Grid item xs={6}>
                    <Box>
                      <Typography>Building Gaming Worlds</Typography>
                      <Typography>We Provide</Typography>
                      <Typography>AR/VR Services</Typography>
                      <Typography variant="h1">{`${index} - ${num}`}</Typography>
                      <Typography>
                        Unleash Your Imagination – The Virtual Playground
                        Awaits.
                      </Typography>
                      <Box>
                        <Box component={Link} href={"/"}>
                          <Button>Get Started</Button>
                        </Box>
                        <Box component={Link} href={"/"}>
                          <Button>View Portfolio</Button>
                        </Box>
                      </Box>
                    </Box>
                  </Grid>
                  <Grid item xs={6}>
                    <Box>
                      <Image
                        src="/assets/images/hero-image.png"
                        width={500}
                        height={500}
                        alt="hero-image"
                      />
                    </Box>
                  </Grid>
                </Grid>
              </Container>
            </SwiperSlide>
          ))}
          <Box
            className="swiper-pagination"
            sx={{
              "&.swiper-pagination-horizontal.swiper-pagination-bullets.swiper-pagination-bullets-dynamic":
                {
                  width: "100% !important",
                  maxWidth: "100% !important",
                  color: "#EAEAEA",
                  textAlign: "center",
                  fontSize: "32px",
                  fontWeight: "600",
                  lineHeight: "normal",
                },
            }}
          ></Box>
        </Swiper>
      </Box>
    </Box>
  );
}
