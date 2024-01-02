"use client";
import Container from "@/utils/container";
import { Box, Grid, Typography } from "@mui/material";
import Image from "next/image";
import React from "react";

import Link from "next/link";
interface FooterProps {
  footerData: {
    section: string;
    links?: Array<{ text: string; url: string }>;
    address?: string;
    phone?: string;
    email?: string;
    socialMedia?: Array<{ platform: string; icon: string; url: string }>;
  }[];
}


const Footer: React.FC<FooterProps> = ({ footerData }: any) => {

  return (
    <Container>
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
                  fontSize: { xs: "14px", md: "18px" },
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
            <Grid container rowSpacing={{ xs: 4, sm: 8, md: 12 }}>
              {footerData.map((data: any, index: any) => (
                <Grid item xs={12} sm={4} key={index}>
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
                        {data.section}
                      </Typography>
                      <Box>
                        {data?.links?.map((val: any, linkIndex: any) => (
                          <Box
                            key={linkIndex}
                            component={Link}
                            href={val.url}
                            sx={{
                              color: "#EAEAEA",
                              textDecoration: "none",
                            }}
                          >
                            <Typography
                              sx={{
                                fontSize: { xs: "14px", md: "18px" },
                                fontWeight: 400,
                                marginTop: "20px",
                                maxWidth: { sm: "150px" },
                              }}
                            >
                              {val.text}
                            </Typography>
                          </Box>
                        ))}
                        {data.socialMedia && (
                          <Box
                            sx={{
                              marginTop: "20px",
                              marginLeft: { xs: "10px", sm: "-6px" },
                            }}
                          >
                            {data.socialMedia.map(
                              (social: any, socialIndex: any) => (
                                <Box
                                  key={socialIndex}
                                  component={Link}
                                  href={social.url}
                                  sx={{marginRight: "30px"}}
                                >
                                  <Image
                                    src={social.icon}
                                    alt={`${social.platform} icon`}
                                    width={26}
                                    height={26}
                                  />
                                </Box>
                              )
                            )}
                          </Box>
                        )}
                      </Box>
                    </Box>
                  </Box>
                </Grid>
              ))}
            </Grid>
          </Box>
        </Box>
      </Box>
    </Container>
  );
};

export default Footer;
