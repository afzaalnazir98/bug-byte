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
            slidesPerView={2}
            spaceBetween={30}
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
                color: "white",
              }}
            ></Box>
            <Box
              className="swiper-button-next"
              sx={{
                right: "-80px",
                color: "white",
              }}
            ></Box>
          </Swiper>
        </Box>
      </Container>
    </Box>
  );
}
