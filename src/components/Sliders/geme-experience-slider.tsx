"use client";

import {Box} from "@mui/material";
import {Swiper, SwiperSlide} from "swiper/react";
import {Autoplay, Navigation} from "swiper/modules";
import GameCard from "@/components/Cards/game-experience-card";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/effect-fade";
import Container from "@/utils/container";

export default function GameExperienceSlider() {
  const navigationel = {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  };

  const hollowArrowStyles = {
    width: "40px",
    height: "40px",
    borderRadius: "50%",
    backgroundColor: "transparent",
    color: "#fff",
    cursor: "pointer",
    border: "2px solid #fff",
    textAlign: "center",
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
            p: "100px 80px",
            overflow: "hidden",
          }}
        >
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
                left: "-80px",
                ...hollowArrowStyles,
              }}
            ></Box>
            <Box
              className="swiper-button-next"
              sx={{
                right: "-80px",
                ...hollowArrowStyles,
              }}
            ></Box>
          </Swiper>
        </Box>
      </Container>
    </Box>
  );
}
