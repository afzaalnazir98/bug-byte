"use client";

import React, {FC} from "react";
import Image from "next/image";
import Link from "next/link";
import {Box, Button, Grid, Typography} from "@mui/material";
import ArrowOutwardIcon from "@mui/icons-material/ArrowOutward";
import {slide} from "@/utils/types";

interface HeroSectionProps {
  Slide: slide;
}

const HeroSection: FC<HeroSectionProps> = ({Slide}): JSX.Element => {
  return (
    <Grid
      container
      sx={{
        margin: "auto",
        maxWidth: "1370px",
        width: "100%",
        p: {
          xs: "7rem 2rem 2rem",
          md: "10rem 4rem 2rem",
          lg: "12rem 4rem 2rem",
        },
        mb: "auto",
      }}
    >
      <Grid
        item
        xs={12}
        sm={7}
        sx={{
          order: {
            sm: 0,
            xs: 2,
          },
          mt:{xs:6,md:0},
        }}
      >
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            height: "100%",
          }}
        >
          <Box>
            {Slide.subTitle && (
              <Typography
                variant="body1"
                sx={{
                  color: "#D9D9D9",
                  mb: {
                    md: "22px",
                    xs: "12px",
                  },
                  fontSize: {
                    md: "28px",
                    sm: "24px",
                    xs: "18px",
                  },
                  fontWeight: "400",
                  lineHeight: "normal",
                }}
              >
                {Slide.subTitle}
              </Typography>
            )}
            {Slide.title?.t1 && (
              <Typography
                variant="h2"
                sx={{
                  color: "#F7F7F7",
                  fontSize: {
                    lg: "85.045px",
                    md: "46px",
                    sm: "40px",
                    xs: "30px",
                  },
                  fontWeight: 700,
                  lineHeight: 1.045,
                  textTransform: "uppercase",
                }}
              >
                {Slide.title.t1}
              </Typography>
            )}
            {Slide.title?.t2 && (
              <Typography
                variant="h2"
                sx={{
                  mb: {
                    md: "22px",
                    xs: "12px",
                  },
                  background:
                    "linear-gradient(88deg, #DD2C00 -9.17%, #FF3F00 67.35%, #FA9D04 130.66%)",
                  backgroundClip: "text",
                  color: "transparent",
                  textTransform: "uppercase",
                  fontSize: {
                    lg: "85.045px",
                    md: "56px",
                    sm: "50px",
                    xs: "46px",
                  },
                  fontWeight: 700,
                  lineHeight: 1.045,
                }}
              >
                {Slide.title?.t2}
              </Typography>
            )}
            {Slide.description && (
              <Typography
                variant="body1"
                sx={{
                  mb: {
                    md: "22px",
                    xs: "12px",
                  },
                  color: "#D9D9D9",
                  fontSize: {xs: "18px", sm: "22px", lg: "24px"},
                  fontWeight: 400,
                  lineHeight: {xs: "1.5", sm: "1.7", md: "normal"},
                }}
              >
                {Slide.description}
              </Typography>
            )}
            <Box
              sx={{
                display: "flex",
                gap: {
                  lg: "32px",
                  md: "26px",
                  sm: "18px",
                  xs: "8px",
                },
              }}
            >
              {Slide.btns.map((btn, index) => (
                <Box component={Link} href={btn.link} key={index}>
                  {btn.Styled ? (
                    <Button
                      sx={{
                        color: "#FFF",
                        fontWeight: 400,
                        lineHeight: 1.2,
                        borderRadius: "6px",
                        background:
                          "linear-gradient(88deg, #DD2C00 -9.17%, #FF3F00 67.35%, #FA9D04 130.66%)",
                        boxShadow: "20px 25px 50px 0px rgba(0, 0, 0, 0.50)",
                        fontSize: {
                          md: "20px",
                          xs: "15px",
                        },
                        width: "100%",
                        textTransform: "capitalize",
                        whiteSpace: "nowrap",
                        p: {
                          md: "16px 34px",
                          sm: "14px 20px",
                          xs: "8px 16px",
                        },
                      }}
                      endIcon={
                        <ArrowOutwardIcon
                          sx={{
                            ml: {
                              md: "37px",
                              sm: "18px",
                              xs: "8px",
                            },
                          }}
                        />
                      }
                    >
                      {btn.text}
                    </Button>
                  ) : (
                    <Button
                      sx={{
                        color: "#FFFFFF",
                        fontWeight: 400,
                        lineHeight: 1.2,
                        p: {
                          md: "16px 34px",
                          sm: "14px 20px",
                          xs: "10px 20px",
                        },
                        whiteSpace: "nowrap",
                        borderRadius: "6px",
                        background: "#262626",
                        fontSize: {
                          md: "20px",
                          sm: "18px",
                          xs: "14px",
                        },
                        width: "100%",
                        textTransform: "capitalize",
                      }}
                    >
                      {btn.text}
                    </Button>
                  )}
                </Box>
              ))}
            </Box>
          </Box>
        </Box>
      </Grid>
      <Grid item xs={12} sm={5}>
        {Slide.imagePath && (
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
                px: "15px",
              },
            }}
          >
            <Image
              src={Slide.imagePath}
              width={500}
              height={500}
              alt="hero-image"
              className="main-image"
            />
          </Box>
        )}
      </Grid>
    </Grid>
  );
};

export default HeroSection;
