"use client";

import * as React from "react";
import {Box} from "@mui/material";
import {Swiper, SwiperSlide} from "swiper/react";
import {Autoplay, Navigation, Pagination} from "swiper/modules";
import TestimonialCard from "@/components/Cards/testimonial-slider-card";
import Container from "@/components/container";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/effect-fade";

export default function TestimonialSlider() {
  const navigationEl = {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  };

  const hollowArrowStyles = {
    borderRadius: "50%",
    backgroundColor: "transparent",
    color: "#F04B12",
    cursor: "pointer",
    border: "2px solid #F04B12",
    textAlign: "center",
  };

  const paginationStyles = {
    position: "absolute",
    top: "380px !important",
    left: "50%",
    transform: "translateX(-50%)",
  };

  return (
    <Box
      sx={{
        
        overflow: "hidden",
        "& .swiper-slide.swiper-slide-prev": {
          visibility: "hidden !important",
        },
        "& .swiper-slide.swiper-slide-active, & .swiper-slide.swiper-slide-next":
          {
            visibility: "visible",
          },
        "& .swiper": {
          overflow: "visible",
        },
        "& .swiper-wrapper":{
         overflow: "hidden",
        },
        "& .swiper-button-next:after, .swiper-rtl .swiper-button-prev:after": {
          fontSize: "16px",
        },
        "& .swiper-button-prev:after, .swiper-rtl .swiper-button-next:after": {
          fontSize: "16px",
        },
        "& .swiper-pagination-bullet": {
          width: "10px",
          height: "10px",
          margin: "0 8px",
          background: "#F86910",
          opacity: 0.6,
          borderRadius: "50%",
          cursor: "pointer",
        },
        "& .swiper-pagination-bullet-active": {
          opacity: 1,
        },
        "& .swiper-pagination-bullets": {
          ...paginationStyles,
        },
      }}
    >
      <Container>
        <Box
          sx={{
            p: {
              xs: "20px 40px 100px 40px",
              sm: "35px 80px 100px 80px",
              md: "60px 80px 80px 80px",
            },
            overflow: "hidden",
          }}
        >
          <Swiper
            loop
            navigation={navigationEl}
            pagination={{clickable: true}}
            className="swiper-main"
            modules={[Autoplay, Navigation, Pagination]}
            breakpoints={{
              1050: {
                slidesPerView: 3,
                spaceBetween: 30,
              },
              700: {
                slidesPerView: 2,
                spaceBetween: 30,
              },
              0: {
                slidesPerView: 1,
                spaceBetween: 30,
              },
            }}
          >
            {[1, 2, 3, 4].map((num, index) => (
              <SwiperSlide key={index}>
                <TestimonialCard />
              </SwiperSlide>
            ))}

            <Box
              sx={{
                display: "flex",
                gap: "30px",
                justifyContent: "space-between",
                width: {xs: "fit-content", sm: "auto"},
                margin: "auto",
                position: "relative",
                top: {xs: "40px", sm: "-140px", md: "-190px"},
              }}
            >
              <Box
                className="swiper-button-prev"
                sx={{
                  position: {xs: "unset", sm: "relative"},
                  left: "-80px",
                  width: {xs: "30px", sm: "40px"},
                  height: {xs: "30px", sm: "40px"},
                  ...hollowArrowStyles,
                }}
              ></Box>
              <Box
                className="swiper-button-next"
                sx={{
                  position: {xs: "unset", sm: "relative"},
                  right: "-70px",
                  width: {xs: "30px", sm: "40px"},
                  height: {xs: "30px", sm: "40px"},
                  ...hollowArrowStyles,
                }}
              ></Box>
            </Box>
          </Swiper>
          <Box sx={paginationStyles}></Box>
        </Box>
      </Container>
    </Box>
  );
}
