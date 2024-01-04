"use client";

import * as React from "react";
import {Box, Tab, Tabs} from "@mui/material";
import {Swiper, SwiperSlide} from "swiper/react";
import {Autoplay, Navigation} from "swiper/modules";
import GameCard from "@/components/Cards/game-experience-card";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/effect-fade";
import Container from "@/components/container";

export default function GameExperienceSlider() {
  const [activeTab, setActiveTab] = React.useState(0);

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
    color: "#fff",
    cursor: "pointer",
    border: "2px solid #fff",
    textAlign: "center",
  };
  const tabStyles = {
    color: "white !important",
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
            onSwiper={(swiper) => console.log(swiper)}
            breakpoints={{
              700: {
                slidesPerView: 2,
                spaceBetween: 30,
              },
              0: {
                slidesPerView: 1,
                spaceBetween: 90,
              },
            }}
          >
            {[1, 2, 3, 4, 5, 6, 7, 8].map((num, index) => (
              <SwiperSlide key={index}>
                <Box>
                  <GameCard />
                </Box>
              </SwiperSlide>
            ))}
            <Box
              className="swiper-button-prev"
              sx={{
                left: "-70px",
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
