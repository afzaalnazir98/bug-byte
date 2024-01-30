"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { Box, CircularProgress, Typography } from "@mui/material";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import GameDevelopment from "@/public/assets/images/game-development.png";
import GameDesign from "@/public/assets/images/game-design.png";
import ArVr from "@/public/assets/images/ar-vr.png";
import BlockchainGames from "@/public/assets/images/blockchain-games.png";
import Link from "next/link";
import { motion } from "framer-motion";
import { ServiceDetail } from "@/utils/types";
import "swiper/css";

const arrowMotion = {
  rest: {
    opacity: 0,
  },
  hover: {
    opacity: 1,
    x: '90%',
    transition: { type: "spring", stiffness: 300, damping: 20 },
  },
};

const NextLevelServicesProvider = () => {
  const [isLoading, setIsLoading] = useState<boolean>(true);

  const serviceDetails: ServiceDetail[] = [
    {
      image: GameDevelopment,
      title: "Game Development",
      description:
        "Game design, programming, art, animation, audio, testing, marketing, publishing, monetization, maintenance.",
      buttonLink: "/game-development",
      buttonText: "Learn More",
    },
    {
      image: GameDesign,
      title: "Game Development",
      description:
        "Game design, programming, art, animation, audio, testing, marketing, publishing, monetization, maintenance.",
      buttonLink: "/game-design",
      buttonText: "Learn More",
    },
    {
      image: ArVr,
      title: "AR and VR Games",
      description:
        "Real-life simulations, gamified metaverses, shopping experiences, real estate, sports, fashion.",
      buttonLink: "/ar-development",
      buttonText: "Learn More",
    },
    {
      image: BlockchainGames,
      title: "Blockchain Games",
      description: "P2E, NFT marketplaces, staking, smart contracts",
      buttonLink: "/blockchain-games",
      buttonText: "Learn More",
    },
  ];

  useEffect(() => {
    setIsLoading(false);
  }, []);

  return (
    <Box
      sx={{
        background: "#071421",
      }}
    >
      <Box
        sx={{
          maxWidth: "1440px",
          m: "auto",
        }}
      >
        <Box
        data-aos="fade-down"
        data-aos-easing="linear"
        data-aos-duration="500"
          sx={{
            textAlign: "center",
            p: "90px 0 60px 0",
          }}
        >
          <Typography
            variant="body1"
            sx={{
              color: "#FFF",
              fontSize: "25px",
              fontWeight: 600,
              lineHeight: 1.8,
              textTransform: "uppercase",
            }}
          >
            WE PROVIDE
          </Typography>
          <Typography
        data-aos="fade-down"
        data-aos-easing="linear"
        data-aos-duration="200"
            variant="h3"
            sx={{
              fontSize: "48px",
              fontWeight: 700,
              lineHeight: "1",
              letterSpacing: "0.96px",
              textTransform: "uppercase",
              background:
                "linear-gradient(88deg, #DD2C00 -9.17%, #FF3F00 67.35%, #FA9D04 130.66%)",
              backgroundClip: "text",
              color: "transparent",
            }}
          >
            Next Level Services
          </Typography>
        </Box>

        {isLoading ? (
          <Box
            sx={{
              textAlign: "center",
            }}
          >
            <CircularProgress
              variant="indeterminate"
              sx={{
                color: "white",
              }}
            />
          </Box>
        ) : (
          <Box>
            <Swiper
              autoplay={{
                delay: 2000,
                disableOnInteraction: true,
                pauseOnMouseEnter: true,
              }}
              modules={[Autoplay]}
              breakpoints={{
                0: {
                  slidesPerView: 1.2,
                },
                700: {
                  slidesPerView: 2.5,
                },
                850: {
                  slidesPerView: 3,
                },
                1200: {
                  slidesPerView: 4,
                },
              }}
            >
              {serviceDetails?.map((service: ServiceDetail, index: number) => (
                <SwiperSlide key={index}>
                  <Box
                    className="slide-wrapper"
                    sx={{
                      width: "100%",
                      float: "left",
                      position: "relative",
                      overflow: "hidden",
                      color: "white",
                      "& .service-title": {
                        color: "#EAEAEA",
                        fontSize: "28px",
                        fontWeight: 600,
                        lineHeight: 1.2,
                        letterSpacing: "0.56px",
                      },
                      "& .slide-content-overlay": {
                        position: "absolute",
                        bottom: 0,
                        left: 0,
                        width: "-webkit-fill-available",
                        overflow: "hidden",
                        p: "25px 19px",
                        display: "flex",
                        alignItems: "end",
                        transition: "all .2s ease-out",
                      },
                      "& .slide-overlay-1": {
                        background:
                          "linear-gradient(180deg, rgba(0, 0, 0, 0.00) 0%, #000 100%)",
                        height: "100%",
                      },
                      "&:hover .slide-overlay-1": {
                        opacity: 0,
                      },
                      "& .slide-image": {
                        width: "100%",
                        height: "auto",
                      },
                      "& .slide-overlay-2": {
                        height: "0",
                      },
                      "&:hover .slide-overlay-2": {
                        height: "100%",
                        background: "rgba(95, 29, 4, 0.8)",
                      },
                      "& .service-link": {
                        textDecoration: "underline",
                        color: "#FFF",
                        display: "block",
                        fontSize: "16px",
                        fontWeight: 700,
                        lineHeight: "normal",
                        textTransform: "capitalize",
                        p: 0,
                      },
                    }}
                  >
                    <Image
                      className="slide-image"
                      src={`${service?.image?.src}`}
                      alt={service?.title ?? ""}
                      height={100}
                      width={100}
                      loading="lazy"
                    />
                    <Box className="slide-content-overlay slide-overlay-1">
                      <Box>
                        <Typography className="service-title" variant="body1">
                          {service?.title}
                        </Typography>
                        <Box sx={{
                          display: 'flex',
                          alignItems: 'center',
                        }}>
                        <Box
                          component={Link}
                          href={service?.buttonLink ?? "/"}
                          className="service-link"
                        >
                          {service?.buttonText}
                        </Box>
                        <Box sx={{ display: "inline-block", margin: "7px 0px 0px 6px" }}>
                            <ArrowForwardIcon />
                          </Box>
                        </Box>
                        
                      </Box>
                    </Box>
                    <Box
                      component={motion.div}
                      initial="rest"
                      whileHover="hover"
                      className="slide-content-overlay slide-overlay-2"
                    >
                      <Box>
                        <Typography className="service-title" variant="body1">
                          {service?.title}
                        </Typography>
                        <Typography
                          variant="body2"
                          className="service-description"
                          sx={{
                            color: "#EAEAEA",
                            fontSize: "16px",
                            fontWeight: 400,
                            lineHeight: "1.2",
                            letterSpacing: "0.32px",
                            margin: "12px 0 34px 0",
                          }}
                        >
                          {service?.description}
                        </Typography>
                        <Box sx={{
                          display: 'flex',
                          alignItems: 'center',
                          width:'100%'
                        }}>
                          <Box
                          component={Link}
                          href={service?.buttonLink ?? "/"}
                          className="service-link"
                          >
                          {service?.buttonText}
                        </Box>
                        <Box
                            component={motion.div}
                            sx={{ display: "inline-block", margin: "7px 0px 0px 6px" ,flexGrow:2}}
                            variants={arrowMotion}
                          >
                            <ArrowForwardIcon />
                          </Box>
                        </Box>
                        
                      </Box>
                    </Box>
                  </Box>
                </SwiperSlide>
              ))}
            </Swiper>
          </Box>
        )}
      </Box>
    </Box>
  );
};

export default NextLevelServicesProvider;
