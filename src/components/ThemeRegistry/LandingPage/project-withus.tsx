"use client";
import Container from "@/utils/container";
import { Box, Grid, Typography } from "@mui/material";
import Divider from "@mui/material/Divider";
import Image from "next/image";
import React from "react";

export default function ProjectWithUs() {
  return (
    <Box
      sx={{
        color: "white",
        padding: "10rem 0rem",
      }}
    >
      <Box
        sx={{
          background: "linear-gradient(91deg, #E95A29 6.55%, #F07325 98.79%)",
          transform: "rotate(-1.545deg)",
          width: "calc(100% + 14px)",
          marginLeft: "-8px",
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
              }}
            >
              <Image
                src="/assets/images/image-section2-landingPage.png"
                alt="cartoon-img"
                width={400}
                height={323}
                style={{ marginTop: "-98px" }}
              />

              <Box
                sx={{
                  transform: "rotate(-1.096deg)",
                  padding: "50px 0px",
                }}
              >
                <Typography
                  sx={{
                    fontSize: "42px",
                    fontWeight: 600 /* 119.006% */,
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
        <Grid></Grid>
        <Box
          sx={{
            color: "white",
            textAlign: "center",
            position: "relative",
            //   marginLeft: "180px",
            top: "13px",
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
      </Container>
    </Box>
  );
}
