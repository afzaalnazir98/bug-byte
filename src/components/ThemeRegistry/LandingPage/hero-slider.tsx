"use client";

import {useState} from "react";
import {Box, Button, styled} from "@mui/material";
import {Swiper, SwiperSlide} from "swiper/react";
import {FreeMode, Thumbs, Autoplay, EffectFade} from "swiper/modules";
import HeroSection from "@/components/hero-section";
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

  const SliderButton = styled(Button)({
    color: "#EAEAEA",
    textAlign: "center",
    fontWeight: "600",
    lineHeight: "normal",
    width: "100%",
    whiteSpace: "nowrap",
    borderBottom: "1px solid white",
    borderRadius: "0",
    textTransform: "capitalize",
  });

  return (
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
      >
        {[1, 2, 3, 4, 5, 6].map((num, index) => (
          <SwiperSlide key={index}>
            <HeroSection />
          </SwiperSlide>
        ))}
      </Swiper>
      <Box
        sx={{
          bg: "#051223",
        }}
      >
        <Box
          sx={{
            maxWidth: "1440px",
            m: "auto",
            "& .swiper-slide button": {
              borderBottomColor: "#051223",
            },
            "& .swiper-slide.swiper-slide-thumb-active button": {
              color: "#FE7624",
              borderBottomColor: "#FE7624",
              background: "#040D15",
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
          >
            {[1, 2, 3, 4, 5, 6].map((num, index) => (
              <SwiperSlide key={index}>
                <SliderButton
                  sx={{
                    fontSize: {xs: "18px", sm: "22px", md: "28px"},
                    py: {xs: "18px", sm: "20px", md: "24px"},
                  }}
                >
                  {titles[index]}
                </SliderButton>
              </SwiperSlide>
            ))}
          </Swiper>
        </Box>
      </Box>
    </Box>
  );
}
