import React from "react";
import Image from "next/image";
import Link from "next/link";
import {Box, Button, Grid, Typography} from "@mui/material";
import ArrowOutwardIcon from "@mui/icons-material/ArrowOutward";

const HeroSection = () => {
  return (
    <Grid
      container
      sx={{
        margin: "auto",
        maxWidth: "1370px",
        width: "100%",
        p: {
          xs: "2rem 1rem ",
          md: "4rem 2rem",
          lg: "2rem 4rem",
        },
        mb: "auto",
      }}
    >
      <Grid
        item
        xs={12}
        sm={6}
        sx={{
          order: {
            sm: 0,
            xs: 2,
          },
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
              Building Gaming Worlds
            </Typography>
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
              We Provide
            </Typography>
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
              AR/VR Services
            </Typography>
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
              Unleash Your Imagination – The Virtual Playground Awaits.
            </Typography>
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
              <Box component={Link} href={"/"}>
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
                  Get Quote Now
                </Button>
              </Box>
              <Box component={Link} href={"/"}>
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
                  View Portfolio
                </Button>
              </Box>
            </Box>
          </Box>
        </Box>
      </Grid>
      <Grid item xs={12} sm={6}>
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
              px: "30px",
            },
          }}
        >
          <Image
            src="/assets/images/hero-image.png"
            width={500}
            height={500}
            alt="hero-image"
            className="main-image"
          />
        </Box>
      </Grid>
    </Grid>
  );
};

export default HeroSection;
