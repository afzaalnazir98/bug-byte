"use client";
import Image from "next/image";

import {Box, Button, Grid, Typography} from "@mui/material";
import {Swiper, SwiperSlide} from "swiper/react";
import {Pagination, Autoplay, EffectFade} from "swiper/modules";

import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/pagination";
import Container from "@/utils/container";
import Link from "next/link";

export default function HeroSlider() {
  const pagination = {
    dynamicBullets: true,
    dynamicMainBullets: 5,
    clickable: true,
    renderBullet: (index: any, className: any) => {
      const titles = [
        "Custom Title 1",
        "Custom Title 2",
        "Custom Title 3",
        "Custom Title 4",
        "Custom Title 5",
        "Custom Title 6",
      ];
      return `<span class="${className}">${titles[index]}</span>`;
    },
  };

  const swiperStyles = {
    "& .swiper-pagination-bullets": {
      position: "unset",
    },
    "& .swiper-pagination-horizontal.swiper-pagination-bullets .swiper-pagination-bullet":
      {
        background: "transparent",
        height: "auto",
        width: "auto",
        margin: 0,
        borderBottom: "2px solid",
        borderRadius: 0,
        padding: "20px",
        transition: "0.4s all",
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
    <Container>
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
          onSwiper={(swiper) => console.log(swiper)}
          className="h-96 w-full rounded-lg"
        >
          {[1, 2, 3, 4, 5, 6].map((num, index) => (
            <SwiperSlide key={index}>
                      <Grid container>
        <Grid item xs={6}>
          <Box>
            <Typography>Building Gaming Worlds</Typography>
            <Typography>We Provide</Typography>
            <Typography>AR/VR Services</Typography>
            <Typography variant="h1">{`${index} - ${num}`}</Typography>
            <Typography>Unleash Your Imagination – The Virtual Playground Awaits.</Typography>
            <Box>
              <Box component={Link} href={"/"}>
                <Button>Get Started</Button>
              </Box>
              <Box component={Link} href={"/"}>
                <Button>View Portfolio</Button>
              </Box>
            </Box>
          </Box>
        </Grid>
        <Grid item xs={6}>
          <Box>
            <Image
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
        </Swiper>
      </Box>
    </Container>
  );
}
