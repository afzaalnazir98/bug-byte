"use client";
import { Box, Grid, Typography } from "@mui/material";
import Image from "next/image";
import React from "react";
const iconStyle = {
  marginRight: "30px",
};

export default function Footer() {
  return (
    <Box
      sx={{
        maxWidth: "1250px",
        m: "auto",
        padding: "5.3rem 0",
        color: "#EAEAEA",
      }}
    >
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          flexDirection: { xs: "column", md: "row" },
          gap: { xs: "30px", md: "20px" },
        }}
      >
        <Box
          sx={{
            flex: "30%",
            display: "flex",
            justifyContent: "center",
          }}
        >
          <Box
            sx={{
              display: "grid",
              gap: "20px",
              maxWidth: "min-content",
              justifyContent: "center",
              textAlign: { xs: "center", md: "left" },
            }}
          >
            <Image
              src="/assets/images/logo.png"
              alt="logo.png"
              width={260}
              height={76}
            />
            <Typography
              sx={{
                fontSize: { md: "18px", md: "14px" },
                fontWeight: 400,
              }}
            >
              Reinventing the way of developing games, we aim to Develop the
              most master-peaced Games available on the market.
            </Typography>
          </Box>
        </Box>
        <Box
          sx={{
            flex: "70%",
          }}
        >
          <Grid
            container
            rowSpacing={{ xs: 4, sm: 8, md: 12 }}
            // sx={{
            //   flexDirection: { xs: "column", sm: "row" },
            //   textAlign: "center",
            // }}
          >
            <Grid item xs={12} sm={4}>
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "center",
                }}
              >
                <Box
                  sx={{
                    textAlign: { xs: "center", sm: "left" },
                  }}
                >
                  <Typography
                    sx={{
                      fontSize: "20px",
                      fontWeight: 700,
                      color: "#F86910",
                    }}
                  >
                    QUICK LINKS
                  </Typography>
                  <Box>
                    <Typography
                      sx={{
                        fontSize: { md: "18px", md: "14px" },
                        fontWeight: 400,
                        marginTop: "20px",
                      }}
                    >
                      Home
                    </Typography>
                    <Typography
                      sx={{
                        fontSize: { md: "18px", md: "14px" },
                        fontWeight: 400,
                        marginTop: "20px",
                      }}
                    >
                      About
                    </Typography>

                    <Typography
                      sx={{
                        fontSize: { md: "18px", md: "14px" },
                        fontWeight: 400,
                        marginTop: "20px",
                      }}
                    >
                      Our Services
                    </Typography>
                    <Typography
                      sx={{
                        fontSize: { md: "18px", md: "14px" },
                        fontWeight: 400,
                        marginTop: "20px",
                      }}
                    >
                      Portfolio
                    </Typography>

                    <Typography
                      sx={{
                        fontSize: { md: "18px", md: "14px" },
                        fontWeight: 400,
                        marginTop: "20px",
                      }}
                    >
                      Contact Us
                    </Typography>
                  </Box>
                </Box>
              </Box>
            </Grid>
            <Grid item xs={12} sm={4}>
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "center",
                }}
              >
                <Box
                  sx={{
                    textAlign: { xs: "center", sm: "left" },
                  }}
                >
                  <Typography
                    sx={{
                      fontSize: "20px",
                      fontWeight: 700,
                      color: "#F86910",
                    }}
                  >
                    OUR SERVICES
                  </Typography>
                  <Box>
                    <Typography
                      sx={{
                        fontSize: { md: "18px", md: "14px" },
                        fontWeight: 400,
                        marginTop: "20px",
                      }}
                    >
                      Game Development
                    </Typography>
                    <Typography
                      sx={{
                        fontSize: { md: "18px", md: "14px" },
                        fontWeight: 400,
                        marginTop: "20px",
                      }}
                    >
                      Blockchain
                    </Typography>

                    <Typography
                      sx={{
                        fontSize: { md: "18px", md: "14px" },
                        fontWeight: 400,
                        marginTop: "20px",
                      }}
                    >
                      AR/VR
                    </Typography>
                    <Typography
                      sx={{
                        fontSize: { md: "18px", md: "14px" },
                        fontWeight: 400,
                        marginTop: "20px",
                      }}
                    >
                      Metaverse
                    </Typography>

                    <Typography
                      sx={{
                        fontSize: { md: "18px", md: "14px" },
                        fontWeight: 400,
                        marginTop: "20px",
                      }}
                    >
                      Unity Development
                    </Typography>
                    <Typography
                      sx={{
                        fontSize: { md: "18px", md: "14px" },
                        fontWeight: 400,
                        marginTop: "20px",
                      }}
                    >
                      NFT
                    </Typography>
                  </Box>
                </Box>
              </Box>
            </Grid>
            <Grid item xs={12} sm={4}>
              <Box sx={{ margin: "auto" }}>
                <Box
                  sx={{
                    textAlign: { xs: "center", sm: "left" },
                  }}
                >
                  <Typography
                    sx={{
                      fontSize: "20px",
                      fontWeight: 700,
                      color: "#F86910",
                    }}
                  >
                    CONTACT US
                  </Typography>
                  <Typography
                    sx={{
                      fontSize: { md: "18px", md: "14px" },
                      fontWeight: 400,
                      marginTop: "20px",
                    }}
                  >
                    202 Helga Springs Rd, Crawford, TN 38554
                  </Typography>
                  <Typography
                    sx={{
                      fontSize: { md: "18px", md: "14px" },
                      fontWeight: 400,
                      marginTop: "20px",
                    }}
                  >
                    Call Us: 1234567890
                  </Typography>

                  <Typography
                    sx={{
                      fontSize: { md: "18px", md: "14px" },
                      fontWeight: 400,
                      marginTop: "20px",
                    }}
                  >
                    Hello@example.com
                  </Typography>

                  <Box
                    sx={{
                      marginTop: "20px",
                    }}
                  >
                    <Image
                      src="/assets/images/facebook.svg"
                      alt="facebook icon"
                      width={26}
                      height={26}
                      style={iconStyle}
                    />
                    <Image
                      src="/assets/images/instagram.svg"
                      alt="instagram icon"
                      width={26}
                      height={26}
                      style={iconStyle}
                    />
                    <Image
                      src="/assets/images/linkdine.svg"
                      alt="linkdine icon"
                      width={26}
                      height={26}
                      style={iconStyle}
                    />
                  </Box>
                </Box>
              </Box>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </Box>
  );
}
