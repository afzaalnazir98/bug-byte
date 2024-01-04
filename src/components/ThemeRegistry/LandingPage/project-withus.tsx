"use client";
import React from "react";
import Container from "@/components/container";
import { Box, Grid, Typography } from "@mui/material";
import Divider from "@mui/material/Divider";
import Image from "next/image";
import svg1 from "@/public/assets/social-media-icons/projectWIthUsIcon1.svg";
import svg2 from "@/public/assets/social-media-icons/projectWIthUsIcon2.svg";
import svg3 from "@/public/assets/social-media-icons/projectWIthUsIcon3.svg";
import arrow from "@/public/assets/social-media-icons/arrow.svg";

const projectInfoImage = {
  "@media (max-width: 600px)": {
    textAlign: "center",
  },
  "@media (min-width: 768px)": {
    marginLeft: "-25px",
  },
  "@media (min-width: 1200px)": {
    marginLeft: "-55px",
  },
};

const projectImageStyled = {
  "@media (max-width: 600px)": {
    width: "270px",
    height: "250px",
  },
};

export default function ProjectWithUs() {
  return (
    <Box
      sx={{
        color: "white",
        padding: "10rem 0rem",
        overflow: "hidden",
      }}
    >
      <Box
        sx={{
          background: "linear-gradient(91deg, #E95A29 6.55%, #F07325 98.79%)",
          transform: "rotate(-1.545deg)",
          width: "calc(100% + 14px)",
          marginLeft: "-8px",
          position: "relative",
          zIndex: 2,
        }}
      >
        <Container>
          <Box
            sx={{
              display: { xs: "flex", md: "block" },
              justifyContent: "center",
            }}
          >
            <Box
              sx={{
                display: "flex",
                justifyContent: "space-between",
                flexDirection: { xs: "column", md: "row" },
                gap: { xs: "15px", sm: "20px", md: "30px" },
              }}
            >
              <Box
                sx={{
                  ...projectInfoImage,
                  "&  .project-image": {
                    marginTop: "-98px",
                    verticalAlign: "bottom",
                    ...projectImageStyled,
                  },
                }}
              >
                <Image
                  className="project-image"
                  src="/assets/images/image-section2-landingPage.png"
                  alt="cartoon-img"
                  width={400}
                  height={323}
                />
              </Box>
              <Box
                sx={{
                  transform: { xs: "", sm: "rotate(-1.096deg)" },
                  padding: { xs: "30px 20px", md: "50px 0px" },
                  textAlign: { xs: "center", sm: "" },
                }}
              >
                <Typography
                  sx={{
                    fontSize: { xs: "32px", lg: "42px" },
                    lineHeight: { xs: "1.2", md: "1.5" },
                    fontWeight: 600,
                    textTransform: "uppercase",
                  }}
                >
                  LET’S Create a Project with Us!
                </Typography>
                <Typography
                  sx={{
                    color: "#EBEBF0",
                    fontSize: "18px",
                    fontWeight: 400,
                    maxWidth: "595px",
                  }}
                >
                  We offer innovative solutions that will fit our customer's
                  requirements and for a long-lasting partnership.
                </Typography>
              </Box>
            </Box>
          </Box>
        </Container>
      </Box>
      <Container>
        <Grid
          container
          spacing={8}
          sx={{
            paddingTop: { xs: "50px", md: "0px" },
            flexDirection: { xs: "column", md: "row" },
            alignContent: { xs: "center", md: "left" },
          }}
        >
          <Grid item xs={12} sm={8} md={4}>
            <Box
              sx={{
                display: "grid",
                gap: "15px",
              }}
            >
              <Box
                sx={{
                  display: { xs: "none", md: "block" },
                  color: "white",
                  textAlign: "center",
                  position: "relative",
                  left: "20px",
                  marginBottom: "15px",
                  maxWidth: "fit-content",
                }}
              >
                <Box
                  sx={{
                    "&::before": {
                      content: '""',
                      position: "absolute",
                      left: "-4px",
                      bottom: 0,
                      background: "white",
                      width: "10px",
                      height: "10px",
                      borderRadius: "10px",
                    },
                  }}
                />
                <Divider
                  orientation="vertical"
                  variant="fullWidth"
                  light={true}
                  sx={{
                    borderRightWidth: "thin",
                    width: "max-content",
                    height: "194px",
                    borderColor: "white",
                  }}
                />
              </Box>
              <Image src={svg1} width={60} height={60} alt="instagram-svg" />

              <Typography
                sx={{
                  color: "#EAEAEA",
                  fontSize: "26px",
                  fontWeight: 600,
                  textTransform: "uppercase",
                }}
              >
                {" "}
                Quality Services
              </Typography>
              <Box>
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "baseline",
                    gap: "10px",
                  }}
                >
                  <Image
                    src={arrow}
                    width={13}
                    height={13}
                    alt="instagram-svg"
                  />
                  <Typography
                    sx={{
                      color: "#EAEAEA",
                      fontSize: { xs: "18px", md: "14px" },
                      fontWeight: 400,
                      textTransform: "uppercase",
                    }}
                  >
                    In-depth research of gamers' needs and expectat is at the
                    heart of our game art and development.
                  </Typography>
                </Box>
                <Box
                  sx={{
                    marginTop: "15px",
                    display: "flex",
                    alignItems: "baseline",
                    gap: "10px",
                  }}
                >
                  <Image
                    src={arrow}
                    width={13}
                    height={13}
                    alt="instagram-svg"
                  />
                  <Typography
                    sx={{
                      color: "#EAEAEA",
                      fontSize: { xs: "18px", md: "14px" },
                      fontWeight: 400,
                      textTransform: "uppercase",
                    }}
                  >
                    80+ products we’ve created don't leave their targ audiences
                    indifferent.
                  </Typography>
                </Box>
              </Box>
            </Box>
          </Grid>
          <Grid item xs={12} sm={8} md={4}>
            <Box
              sx={{
                display: "grid",
                gap: "15px",
              }}
            >
              <Box
                sx={{
                  display: { xs: "none", md: "block" },
                  color: "white",
                  textAlign: "center",
                  position: "relative",
                  left: "20px",
                  marginBottom: "15px",
                  maxWidth: "fit-content",
                }}
              >
                <Box
                  sx={{
                    "&::before": {
                      content: '""',
                      position: "absolute",
                      left: "-4px",
                      bottom: 0,
                      background: "white",
                      width: "10px",
                      height: "10px",
                      borderRadius: "10px",
                    },
                  }}
                />
                <Divider
                  orientation="vertical"
                  variant="fullWidth"
                  light={true}
                  sx={{
                    borderRightWidth: "thin",
                    width: "max-content",
                    height: "159px",
                    borderColor: "white",
                  }}
                />
              </Box>
              <Image src={svg2} width={60} height={60} alt="instagram-svg" />

              <Typography
                sx={{
                  color: "#EAEAEA",
                  fontSize: "26px",
                  fontWeight: 600,
                  textTransform: "uppercase",
                }}
              >
                {" "}
                Quality Services
              </Typography>
              <Box>
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "baseline",
                    gap: "10px",
                  }}
                >
                  <Image
                    src={arrow}
                    width={13}
                    height={13}
                    alt="instagram-svg"
                  />
                  <Typography
                    sx={{
                      color: "#EAEAEA",
                      fontSize: { xs: "18px", md: "14px" },
                      fontWeight: 400,
                      textTransform: "uppercase",
                    }}
                  >
                    In-depth research of gamers' needs and expectat is at the
                    heart of our game art and development.
                  </Typography>
                </Box>
                <Box
                  sx={{
                    marginTop: "15px",
                    display: "flex",
                    alignItems: "baseline",
                    gap: "10px",
                  }}
                >
                  <Image
                    src={arrow}
                    width={13}
                    height={13}
                    alt="instagram-svg"
                  />
                  <Typography
                    sx={{
                      color: "#EAEAEA",
                      fontSize: { xs: "18px", md: "14px" },
                      fontWeight: 400,
                      textTransform: "uppercase",
                    }}
                  >
                    80+ products we’ve created don't leave their targ audiences
                    indifferent.
                  </Typography>
                </Box>
              </Box>
            </Box>
          </Grid>
          <Grid item xs={12} sm={8} md={4}>
            <Box
              sx={{
                display: "grid",
                gap: "15px",
              }}
            >
              <Box
                sx={{
                  display: { xs: "none", md: "block" },
                  color: "white",
                  textAlign: "center",
                  position: "relative",
                  left: "20px",
                  marginBottom: "15px",
                  maxWidth: "fit-content",
                }}
              >
                <Box
                  sx={{
                    "&::before": {
                      content: '""',
                      position: "absolute",
                      left: "-4px",
                      bottom: 0,
                      background: "white",
                      width: "10px",
                      height: "10px",
                      borderRadius: "10px",
                    },
                  }}
                />
                <Divider
                  orientation="vertical"
                  variant="fullWidth"
                  light={true}
                  sx={{
                    borderRightWidth: "thin",
                    width: "max-content",
                    height: "120px",
                    borderColor: "white",
                  }}
                />
              </Box>
              <Image src={svg3} width={60} height={60} alt="instagram-svg" />

              <Typography
                sx={{
                  color: "#EAEAEA",
                  fontSize: "26px",
                  fontWeight: 600,
                  textTransform: "uppercase",
                }}
              >
                {" "}
                Quality Services
              </Typography>
              <Box>
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "baseline",
                    gap: "10px",
                  }}
                >
                  <Image
                    src={arrow}
                    width={13}
                    height={13}
                    alt="instagram-svg"
                  />
                  <Typography
                    sx={{
                      color: "#EAEAEA",
                      fontSize: { xs: "18px", md: "14px" },
                      fontWeight: 400,
                      textTransform: "uppercase",
                    }}
                  >
                    In-depth research of gamers' needs and expectat is at the
                    heart of our game art and development.
                  </Typography>
                </Box>
                <Box
                  sx={{
                    marginTop: "15px",
                    display: "flex",
                    alignItems: "baseline",
                    gap: "10px",
                  }}
                >
                  <Image
                    src={arrow}
                    width={13}
                    height={13}
                    alt="instagram-svg"
                  />
                  <Typography
                    sx={{
                      color: "#EAEAEA",
                      fontSize: { xs: "18px", md: "14px" },
                      fontWeight: 400,
                      textTransform: "uppercase",
                    }}
                  >
                    80+ products we’ve created don't leave their targ audiences
                    indifferent.
                  </Typography>
                </Box>
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
