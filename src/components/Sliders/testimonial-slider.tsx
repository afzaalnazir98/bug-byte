"use client";
import * as React from "react";
import {Box} from "@mui/material";
import {Swiper, SwiperSlide} from "swiper/react";
import {Autoplay, Navigation, Pagination} from "swiper/modules";
import TestimonialCard from "@/components/Cards/testimonial-slider-card";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/effect-fade";
import Container from "@/components/container";

export default function TestimonialSlider() {
  const navigationel = {
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
        "& .swiper-slide.swiper-slide-prev": {
          visibility: "hidden !important",
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
              xs: "20px 80px 100px 80px",
              sm: "35px 80px 100px 80px",
              md: "60px 80px 80px 80px",
            },
            overflow: "hidden",
            marginBottom: "50px",
          }}
        >
          <Swiper
            loop
            navigation={navigationel}
            pagination={{clickable: true}}
            className="swiper-main"
            modules={[Autoplay, Navigation, Pagination]}
            onSwiper={(swiper) => console.log(swiper)}
            breakpoints={{
              1050: {
                slidesPerView: 3,
                spaceBetween: 80,
              },
              700: {
                slidesPerView: 2,
                spaceBetween: 80,
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
                  <TestimonialCard />
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
          <Box sx={paginationStyles}></Box>
        </Box>
        
      </Container>
    </Box>
  );
}
