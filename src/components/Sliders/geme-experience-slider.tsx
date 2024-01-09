"use client";

import React, {useState} from "react";
import {Box, Tab, Tabs} from "@mui/material";
import {Swiper, SwiperSlide} from "swiper/react";
import {Autoplay, Navigation} from "swiper/modules";
import GameCard from "@/components/Cards/game-experience-card";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/effect-fade";
import Container from "@/components/container";

export default function GameExperienceSlider() {
  const [activeTab, setActiveTab] = useState(0);
  const [activeSlideIndex, setActiveSlideIndex] = useState(0);

  const handleTabChange = (event: any, newValue: any) => {
    setActiveTab(newValue);
  };
  const navigationel = {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  };

  const hollowArrowStyles = {
    borderRadius: "50%",
    backgroundColor: "transparent",
    color: "#030A11",
    cursor: "pointer",
    border: "2px solid #030A11",
    textAlign: "center",
  };
  const tabStyles = {
    color: "#030A12 !important",
    fontSize: "22px",
    fontWeight: 400,
    lineHeight: "24.42px",
    textTransform: "capitalize",
  };
  const activeTabStyles = {
    color: "#FE7624 !important",
  };

  const indicatorStyles = {
    backgroundColor: "#FE7624 !important",
  };

  return (
    <Box
      sx={{
        "& .swiper-slide": {
          visibility: "hidden",
        },
        "& .swiper-slide.swiper-slide-active, & .swiper-slide.swiper-slide-next": {
          visibility: "visible",
        },
        "& .swiper": {
          overflow: "visible",
        },
        "& .swiper-button-next:after, .swiper-rtl .swiper-button-prev:after": {
          fontSize: "20px",
        },
        "& .swiper-button-prev:after, .swiper-rtl .swiper-button-next:after": {
          fontSize: "20px",
        },
        "& .swiper-slide.swiper-slide-active": {
          borderRadius: "5px",
          border: "5px solid rgba(240, 75, 18, 0.56)",
          background: "#071421",
          boxShadow: "0px 4.549px 45.486px 0px rgba(0, 0, 0, 0.10)",
          transform: "scale(1.1)",
        },
      }}
    >
      <Container>
        <Box
          sx={{
            p: {
              xs: "20px 80px 40px 80px",
              sm: "35px 80px 47px 80px",
              md: "60px 80px 57px 80px",
            },
            overflow: "hidden",
          }}
        >
          <Box
            sx={{
              marginBottom: {xs: "30px", md: "50px"},
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              textAlign: "center",
            }}
          >
            <Tabs
              value={activeTab}
              onChange={handleTabChange}
              indicatorColor="primary"
              textColor="primary"
              variant="scrollable"
              scrollButtons="auto"
              sx={{
                ...tabStyles,
                "& .Mui-selected": activeTabStyles,
                "& .MuiTabs-indicator": indicatorStyles,
              }}
            >
              <Tab sx={{...tabStyles}} label="All" />
              <Tab sx={{...tabStyles, ml: 2}} label="Digital Twins" />
              <Tab sx={{...tabStyles, ml: 2}} label="AR/VR" />
              <Tab sx={{...tabStyles, ml: 2}} label="Unity Development" />
              <Tab sx={{...tabStyles, ml: 2}} label="Metaverse" />
              <Tab sx={{...tabStyles, ml: 2}} label="NFT" />
              <Tab sx={{...tabStyles, ml: 2}} label="blockchain" />
            </Tabs>
          </Box>
          <Swiper
            loop
            navigation={navigationel}
            className="swiper-main"
            modules={[Autoplay, Navigation]}
            onSwiper={(swiper) => {
              setActiveSlideIndex(swiper.activeIndex);
            }}
            breakpoints={{
              700: {
                slidesPerView: 2,
                spaceBetween: 50,
              },
              0: {
                slidesPerView: 1,
                spaceBetween: 90,
              },
            }}
          >
            {[1, 2, 3, 4, 5, 6, 7, 8].map((num, index) => (
              <SwiperSlide key={index}>
                  <GameCard isActive={index === activeSlideIndex} />
              </SwiperSlide>
            ))}
            <Box
              className="swiper-button-prev"
              sx={{
                left: "-80px",
                width: {xs: "30px", sm: "40px"},
                height: {xs: "30px", sm: "40px"},
                ...hollowArrowStyles,
              }}
            ></Box>
            <Box
              className="swiper-button-next"
              sx={{
                right: "-70px",
                width: {xs: "30px", sm: "40px"},
                height: {xs: "30px", sm: "40px"},
                ...hollowArrowStyles,
              }}
            ></Box>
          </Swiper>
        </Box>
      </Container>
    </Box>
  );
}
