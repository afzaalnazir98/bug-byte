"use client";
import * as React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Image from "next/image";
import { Button } from "@mui/material";
import Link from "next/link";
import Container from "@/components/container";
import Divider from "@mui/material/Divider";

export default function CompanyProgress() {
  return (
    <Box sx={{
        position: 'relative'
    }}> 
      <Box
        sx={{
          width: "100%",
          height: "100%",
          position: "absolute",
          zIndex:"1px",
          backgroundSize: { xs: "cover", md: "auto" },
          "&::before": {
            content: '""',
            background: `url(${"/assets/images/progress-bg.png"}) no-repeat 0% 100%`,
            position: "absolute",
            top: "0",
            left: "0",
            width: "100%",
            height: "100%",
            backgroundSize: "30% 100%"
          },
          "&::after": {
            content: '""',
            background: `url(${"/assets/images/progress-bg.png"}) no-repeat 98% 100%`,
            position: "absolute",
            top: "0",
            right: "0",
            width: "100%",
            height: "100%",
            backgroundSize: "30% 100%"
          },
        }}
      />
      <Box
        sx={{
          backgroundColor: "#F5F5F5",
          padding: "100px 0px",
        }}
      >
        <Container>
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              gap: "56px",
            }}
          >
            <Box
              sx={{
                display: "flex",
                gap: "66px",
              }}
            >
              <Box>
                <Typography
                  sx={{
                    textShadow: "20px 15px 80px rgba(0, 0, 0, 0.10)",
                    fontSize: "100px",
                    textAlign: "center",
                    fontWeight: 700,
                    background:
                      "linear-gradient(88deg, #DD2C00 -9.17%, #FF3F00 67.35%, #FA9D04 130.66%)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                  }}
                >
                  1k+
                </Typography>
                <Typography
                  sx={{
                    fontSize: "32px",
                    fontWeight: 500,
                  }}
                >
                  Total Projects Completed
                </Typography>
              </Box>

              <Divider
                orientation="vertical"
                sx={{
                  height: "141.5px",
                  width: "1px",
                  borderImage:
                    "linear-gradient(88deg, rgba(5, 14, 24, 0), rgba(6, 19, 32, 1), rgba(4, 13, 22, 0))",
                  borderImageSlice: 1,
                }}
              />
            </Box>

            <Box
              sx={{
                display: "flex",
                gap: "66px",
              }}
            >
              <Box>
                <Typography
                  sx={{
                    textShadow: "20px 15px 80px rgba(0, 0, 0, 0.10)",
                    fontSize: "100px",
                    textAlign: "center",
                    fontWeight: 700,
                    background:
                      "linear-gradient(88deg, #DD2C00 -9.17%, #FF3F00 67.35%, #FA9D04 130.66%)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                  }}
                >
                  10
                </Typography>
                <Typography
                  sx={{
                    fontSize: "32px",
                    fontWeight: 500,
                  }}
                >
                  Projects In-Progress
                </Typography>
              </Box>

              <Divider
                orientation="vertical"
                sx={{
                  height: "141.5px",
                  width: "1px",
                  borderImage:
                    "linear-gradient(88deg, rgba(5, 14, 24, 0), rgba(6, 19, 32, 1), rgba(4, 13, 22, 0))",
                  borderImageSlice: 1,
                }}
              />
            </Box>

            <Box
              sx={{
                display: "flex",
                gap: "66px",
              }}
            >
              <Box>
                <Typography
                  sx={{
                    textShadow: "20px 15px 80px rgba(0, 0, 0, 0.10)",
                    fontSize: "100px",
                    textAlign: "center",
                    fontWeight: 700,
                    background:
                      "linear-gradient(88deg, #DD2C00 -9.17%, #FF3F00 67.35%, #FA9D04 130.66%)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                  }}
                >
                  100+
                </Typography>

                <Typography
                  sx={{
                    fontSize: "32px",
                    fontWeight: 500,
                  }}
                >
                  Talented Team Members
                </Typography>
              </Box>
            </Box>
          </Box>
        </Container>
      </Box>
    </Box>
  );
}
