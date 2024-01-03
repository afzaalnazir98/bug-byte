"use client";

import Image from "next/image";
import Link from "next/link";

import {Box, Button, Grid, Typography} from "@mui/material";
import {Swiper, SwiperSlide} from "swiper/react";
import {Pagination, Autoplay, EffectFade} from "swiper/modules";

import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/pagination";

export default function HeroSlider() {
  const pagination = {
    el: ".swiper-pagination",
    dynamicBullets: true,
    dynamicMainBullets: 5,
    clickable: true,
    renderBullet: (index: number, className: string) => {
      const titles = [
        "Blockchain",
        "AR/VR",
        "Metaverse",
        "Unity Development",
        "NFT",
        "Metaverse",
      ];
      return `<span class="${className}">${titles[index]}</span>`;
    },
  };

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
        >
          {[1, 2, 3, 4, 5, 6].map((num, index) => (
            <SwiperSlide key={index}>
              <Grid
                container
                sx={{
                  maxWidth: "1370px",
                  width: "100%",
                  p: {
                    lg: "30px 60px",
                    md: "15px 30px",
                    xs: "15px",
                  },
                  m: "auto",
                }}
              >
                <Grid item xs={6}>
                  <Box
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      height: "100%",
                    }}
                  >
                    <Box>
                      <Typography
                        variant="body1"
                        sx={{
                          mb: "22px",
                          color: "#FFF",
                          fontSize: "28px",
                          fontWeight: "400",
                          lineHeight: "normal",
                        }}
                      >
                        Building Gaming Worlds
                      </Typography>
                      <Typography
                        variant="h2"
                        sx={{
                          color: "#FFF",
                          fontSize: "58px",
                          fontWeight: "500",
                          lineHeight: "104.5%",
                          textTransform: "capitalize",
                        }}
                      >
                        We Provide
                      </Typography>
                      <Typography
                        variant="h2"
                        sx={{
                          marginBottom: "22px",
                          background:
                            "linear-gradient(100deg, #F04B12 6.88%, #FB8843 62.12%)",
                          backgroundClip: "text",
                          color: "transparent",
                          textTransform: "capitalize",
                          fontSize: "74px",
                          fontWeight: 700,
                          lineHeight: 1.05,
                        }}
                      >
                        AR/VR Services
                      </Typography>
                      <Typography
                        variant="body1"
                        sx={{
                          marginBottom: "22px",
                          color: "#FFF",
                          fontSize: "24px",
                          fontWeight: 400,
                          lineHeight: 1.2,
                        }}
                      >
                        Unleash Your Imagination – The Virtual Playground
                        Awaits.
                      </Typography>
                      <Box
                        sx={{
                          display: "flex",
                          gap: "50px",
                        }}
                      >
                        <Box component={Link} href={"/"}>
                          <Button
                            sx={{
                              color: "#FFF",
                              fontSize: "20px",
                              fontWeight: 600,
                              lineHeight: 1.2,
                              py: "16px",
                              borderRadius: "6px",
                              background:
                                "linear-gradient(95deg, #F04B12 1.59%, #FC8C46 100%)",
                              minWidth: "194px",
                              width: "100%",
                            }}
                          >
                            Get Started
                          </Button>
                        </Box>
                        <Box component={Link} href={"/"}>
                          <Button
                            sx={{
                              color: "#C73300",
                              fontSize: "20px",
                              fontWeight: 600,
                              lineHeight: 1.2,
                              py: "16px",
                              borderRadius: "6px",
                              background: "#FFF",
                              minWidth: "194px",
                              width: "100%",
                              "&:hover": {
                                background: "revert",
                              },
                            }}
                          >
                            View Portfolio
                          </Button>
                        </Box>
                      </Box>
                    </Box>
                  </Box>
                </Grid>
                <Grid item xs={6}>
                  <Box
                    sx={{
                      textAlign: "center",
                      height: "100%",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    <Image
                      loading={"lazy"}
                      src="/assets/images/hero-image.png"
                      width={500}
                      height={500}
                      alt="hero-image"
                    />
                  </Box>
                </Grid>
              </Grid>
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
