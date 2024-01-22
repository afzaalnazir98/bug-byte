import React, { useState } from "react";
import Masonry from "@mui/lab/Masonry";
import Container from "../container";
import { Box, Button, Tab, Tabs, Typography } from "@mui/material";
import PortfolioData from "@/Mock/portfolio.json";
import { portfolio } from "@/utils/types";
import Image from "next/image";
import { TabPanel } from "@mui/lab";
import Link from "next/link";

const Portfolio: portfolio[] = PortfolioData;
export default function ImageMasonry() {
  const [isHovered, setHovered] = useState(-1);
  const [activeTab, setActiveTab] = useState(0);

  const handleTabChange = (event: any, newValue: any) => {
    setActiveTab(newValue);
  };
  const tabStyles = {
    color: "#030A12 !important",
    fontSize: "22px",
    fontWeight: 400,
    lineHeight: "24.42px",
    textTransform: "capitalize",
  };
  const activeTabStyles = {
    color: "#FE7624 !important",
  };

  const indicatorStyles = {
    backgroundColor: "#FE7624 !important",
  };

  return (
    <Container>
      <Box
        sx={{
          marginBottom: { xs: "30px", md: "50px", lg: "90px" },
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          textAlign: "center",
        }}
      >
        <Tabs
          value={activeTab}
          onChange={handleTabChange}
          indicatorColor="primary"
          textColor="primary"
          variant="scrollable"
          scrollButtons="auto"
          sx={{
            ...tabStyles,
            "& .Mui-selected": activeTabStyles,
            "& .MuiTabs-indicator": indicatorStyles,
          }}
        >
          <Tab sx={{ ...tabStyles }} label="All" />
          <Tab sx={{ ...tabStyles, ml: 2 }} label="Digital Twins" />
          <Tab sx={{ ...tabStyles, ml: 2 }} label="AR/VR" />
          <Tab sx={{ ...tabStyles, ml: 2 }} label="Unity Development" />
          <Tab sx={{ ...tabStyles, ml: 2 }} label="Metaverse" />
          <Tab sx={{ ...tabStyles, ml: 2 }} label="NFT" />
          <Tab sx={{ ...tabStyles, ml: 2 }} label="blockchain" />
        </Tabs>
      </Box>
      <Box
        sx={{
          maxHeight: "1500px",
          overflow: "auto",
        }}
      >
        <Masonry columns={{ xs: 1, md: 2 }} spacing={{ xs: 1, sm: 2 }}>
          {Portfolio.map((item, index) => (
            <Box
              key={index}
              sx={{
                position: "relative",
                "&:hover": {
                  ".hover-box": {
                    display: "flex",
                    opacity: 1,
                    transition: "opacity 0.3s ease-in-out",
                  },
                },
              }}
              onMouseEnter={() => setHovered(index)}
              onMouseLeave={() => setHovered(-1)}
            >
              <Image
                className="portfolio-image"
                src={`${item.img}?w=162&auto=format`}
                alt="portfolio-item"
                loading="lazy"
                width={item.size.width}
                height={item.size.height}
                style={{
                  borderBottomLeftRadius: 4,
                  borderBottomRightRadius: 4,
                  display: "block",
                  width: "100%",
                }}
              />
              <Box
                className="hover-box"
                sx={{
                  display: "none",
                  ...(isHovered === index && { display: "flex" }),
                }}
              >
                <Box
                  sx={{
                    width: "100%",
                    height: "100%",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    position: "absolute",
                    zIndex: 2,
                    top: "0px",
                  }}
                >
                  <Box
                    sx={{
                      background:
                        "linear-gradient(88deg, #DD2C00 -9.17%, #FF3F00 67.35%, #FA9D04 130.66%)",
                      opacity: 0.7,
                      width: " 90%",
                      height: "90%",
                      display: "grid",
                      alignItems: "center",
                    }}
                  >
                    <Box
                      sx={{
                        textAlign: "center",
                        margin: "0px 30px",
                        opacity: 1,
                      }}
                    >
                      <Typography
                        sx={{
                          color: "#FFF",
                          fontSize: "18px",
                          fontWeight: 600,
                        }}
                      >
                        Metaverse
                      </Typography>
                      <Typography
                        sx={{
                          color: "#FFF",
                          fontSize: "55px",
                          fontWeight: 600,
                          textTransform: "capitalize",
                          marginTop: "5px",
                        }}
                      >
                        Tiny Titans
                      </Typography>
                      <Typography
                        sx={{
                          color: "#FFF",
                          fontSize: "18px",
                          fontWeight: 500,
                          textTransform: "capitalize",
                          marginTop: "10px",
                        }}
                      >
                        Join thousands of players who are fighting tiny but
                        winning BIG.
                      </Typography>
                      <Box component={Link} href={"portfolio-detail"}>
                        <Button
                          sx={{
                            marginTop: "30px",
                            padding: "16px 42px",
                            borderRadius: "5px",
                            backgroundColor: "white",
                            fontSize: { xs: "18px", md: "24px" },
                            fontWeight: 600,
                            textTransform: "capitalize",
                            color: "#F04B12",
                            maxWidth: "fit-content",
                            "&:hover": {
                              backgroundColor: "white",
                              padding: "18px 44px",
                            },
                          }}
                        >
                          View Details
                        </Button>
                      </Box>
                    </Box>
                  </Box>
                </Box>
              </Box>
            </Box>
          ))}
        </Masonry>
      </Box>
    </Container>
  );
}
