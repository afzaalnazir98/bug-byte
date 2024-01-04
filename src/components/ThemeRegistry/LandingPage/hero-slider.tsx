"use client";

import {useState} from "react";
import Image from "next/image";
import Link from "next/link";

import {Box, Button, Grid, Typography} from "@mui/material";
import {Swiper, SwiperSlide} from "swiper/react";

import {FreeMode, Thumbs, Autoplay, EffectFade} from "swiper/modules";

import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/free-mode";
import "swiper/css/thumbs";

export default function HeroSlider() {
  const [thumbsSwiper, setThumbsSwiper] = useState<any>(null);

  const titles = [
    "Blockchain",
    "AR/VR",
    "Metaverse",
    "Unity Development",
    "NFT",
    "Metaverse",
  ];

  const swiperStyles = {
    "& .swiper-fade .swiper-slide": {
      opacity: "0 !important",
    },
    "& .swiper-fade .swiper-slide-active": {
      opacity: "1 !important",
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
          thumbs={{swiper: thumbsSwiper}}
          modules={[EffectFade, Autoplay, FreeMode, Thumbs]}
          className="mySwiper2"
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
                <Grid item xs={12} sm={6} sx={{
                      order: {
                        sm: 0,
                        xs: 2
                      }
                }} >
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
                          color: "#FFF",
                          mb: {
                            md: "22px",
                            xs: "12px"
                          },
                          fontSize: {
                            md: "28px",
                            xs: "24px"
                          },
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
                          fontSize: {
                            lg: "58px",
                            md: "46px",
                            sm: "42px",
                            xs: "30px",
                          },
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
                          mb: {
                            md: "22px",
                            xs: "12px"
                          },
                          background:
                            "linear-gradient(100deg, #F04B12 6.88%, #FB8843 62.12%)",
                          backgroundClip: "text",
                          color: "transparent",
                          textTransform: "capitalize",
                          fontSize: {
                            lg: "74px",
                            md: "56px",
                            xs: "46px",
                          },
                          fontWeight: 700,
                          lineHeight: 1.05,
                        }}
                      >
                        AR/VR Services
                      </Typography>
                      <Typography
                        variant="body1"
                        sx={{
                          mb: {
                            md: "22px",
                            xs: "12px"
                          },
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
                          gap: {
                            lg: "50px",
                            xs: "30px",
                          },
                        }}
                      >
                        <Box component={Link} href={"/"}>
                          <Button
                            sx={{
                              color: "#FFF",
                              fontWeight: 600,
                              lineHeight: 1.2,
                              py: {
                                md: "16px",
                                xs: "14px",
                              },
                              borderRadius: "6px",
                              background:
                                "linear-gradient(95deg, #F04B12 1.59%, #FC8C46 100%)",
                              fontSize: {
                                md: "20px",
                                xs: "15px",
                              },
                              minWidth: {
                                lg: "194px",
                                md: "164px",
                                xs: "144px",
                              },
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
                              fontWeight: 600,
                              lineHeight: 1.2,
                              py: {
                                md: "16px",
                                xs: "14px",
                              },
                              borderRadius: "6px",
                              background: "#FFF",
                              fontSize: {
                                md: "20px",
                                xs: "15px",
                              },
                              minWidth: {
                                lg: "194px",
                                md: "164px",
                                xs: "144px",
                              },
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
                <Grid item xs={12} sm={6}>
                  <Box
                    sx={{
                      textAlign: "center",
                      height: "100%",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      "& .main-image": {
                        width: "100%",
                        height: "auto",
                        px: "30px",
                      },
                    }}
                  >
                    <Image
                      loading={"lazy"}
                      src="/assets/images/hero-image.png"
                      width={500}
                      height={500}
                      alt="hero-image"
                      className="main-image"
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
        <Box
          sx={{
            maxWidth: "1440px",
            m: "auto",
            "& .swiper-slide.swiper-slide-thumb-active button": {
              color: "#FE7624",
              borderBottomColor: "#FE7624",
            },
          }}
        >
          <Swiper
            onSwiper={(swiper: any) => setThumbsSwiper(swiper)}
            loop
            freeMode={true}
            watchSlidesProgress={true}
            modules={[FreeMode, Thumbs]}
            breakpoints={{
              1350: {
                slidesPerView: 5,
              },
              1100: {
                slidesPerView: 4,
              },
              700: {
                slidesPerView: 3,
              },
              0: {
                slidesPerView: 2,
              },
            }}
            className="mySwiper"
          >
            {[1, 2, 3, 4, 5, 6].map((num, index) => (
              <SwiperSlide key={index}>
                <Button
                  sx={{
                    color: "#EAEAEA",
                    textAlign: "center",
                    fontSize: "28px",
                    fontWeight: "600",
                    lineHeight: "normal",
                    width: "100%",
                    whiteSpace: "nowrap",
                    borderBottom: "1px solid white",
                    borderRadius: "0",
                    textTransform: "capitalize",
                    py: "24px",
                  }}
                >
                  {titles[index]}
                </Button>
              </SwiperSlide>
            ))}
          </Swiper>
        </Box>
      </Box>
    </Box>
  );
}
