import { Box, Typography, styled } from "@mui/material";
import Image from "next/image";
import Container from "../container";
import useMediaQuery from "@mui/material/useMediaQuery";

const Title = styled(Typography)({
  backgroundImage:
    "linear-gradient(88deg, #DD2C00 -9.17%, #FF3F00 67.35%, #FA9D04 130.66%)",
  fontWeight: 700,
  margin: "15px 0px",
  lineHeight: "30px",
  letterSpacing: "0.8px",
  textTransform: "uppercase",
  WebkitBackgroundClip: "text",
  WebkitTextFillColor: "transparent",
});

export default function Service() {
  const matches = useMediaQuery("(min-width:1000px)");
  return (
    <Box>
      <Container>
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            flexDirection: matches ? "row" : "column",
            gap: "4rem",
            padding: { xs: "40px 0px", md: "60px 0px", lg: "90px 0px" },
            alignItems: "center",
          }}
        >
          <Box
            sx={{
              flex: "40%",
            }}
          >
            <Box
              sx={{
                minWidth: { sm: "auto", lg: "575px" },
                height: "100%",
                alignSelf: "center",
                "& .service-main": {
                  width: "100%",
                  height: "auto",
                },
              }}
            >
              <Image
                className="service-main"
                src="/assets/images/about-service-img.png"
                alt="acbout-service image"
                width={575}
                height={670}
                layout="intrinsic"
              />
            </Box>
          </Box>

          <Box
            sx={{
              flex: "60%",
              display: "grid",
              alignContent: "center",
            }}
          >
            <Box>
              <Typography
                sx={{
                  color: "#FFF",
                  fontSize: "30px",
                  fontWeight: 400,
                  textTransform: "uppercase",
                  textAlign: { xs: "center", lg: "left" },
                }}
              >
                Our Services
              </Typography>
              <Title
                sx={{
                  fontSize: { xs: "20px", sm: "30px", lg: "40px" },
                  textAlign: { xs: "center", lg: "left" },
                }}
              >
                What we are serving?
              </Title>
            </Box>
            <Box
              sx={{
                display: "grid",
                gap: { xs: "40px", lg: "74px" },
                marginTop: { xs: "20px", lg: "50px" },
              }}
            >
              <Box
                sx={{
                  display: "flex",
                  gap: { xs: "60px", lg: "80px" },
                  flexDirection: { xs: "column", sm: "row" },
                }}
              >
                <Box
                  sx={{
                    textAlign: { xs: "center", sm: "left" },
                  }}
                >
                  <Image
                    src="./assets/social-media-icons/about-service-svg1.svg"
                    alt="about-service-svg1"
                    width={41}
                    height={56}
                  />
                  <Typography
                    sx={{
                      marginTop: "8px",
                      fontSize: "20px",
                      color: "#FFF",
                      fontWeight: 600,
                      textTransform: "capitalize",
                    }}
                  >
                    Year{" "}
                    <Typography
                      sx={{
                        display: "inline",
                        backgroundImage:
                          "linear-gradient(88deg, #DD2C00 -9.17%, #FF3F00 67.35%, #FA9D04 130.66%)",
                        WebkitBackgroundClip: "text",
                        WebkitTextFillColor: "transparent",
                        fontSize: "20px",
                        color: "#FFF",
                        fontWeight: 600,
                        textTransform: "capitalize",
                      }}
                    >
                      Experience
                    </Typography>
                  </Typography>
                  <Typography
                    sx={{
                      marginTop: "6px",
                      maxWidth: "260px",
                      color: "#FFF",
                      fontSize: { xs: "14px", lg: "16px" },
                      fontWeight: 400,
                    }}
                  >
                    Explore our world of experience! We&apos;re the best in creating
                    3D games, Avatar experiences, and AR/VR wonders.
                  </Typography>
                </Box>

                <Box
                  sx={{
                    textAlign: { xs: "center", sm: "left" },
                  }}
                >
                  <Image
                    src="./assets/social-media-icons/about-service-svg2.svg"
                    alt="about-service-svg1"
                    width={46}
                    height={60}
                  />
                  <Typography
                    sx={{
                      marginTop: "8px",
                      fontSize: "20px",
                      color: "#FFF",
                      fontWeight: 600,
                      textTransform: "capitalize",
                    }}
                  >
                    Tailored{" "}
                    <Typography
                      sx={{
                        display: "inline",
                        backgroundImage:
                          "linear-gradient(88deg, #DD2C00 -9.17%, #FF3F00 67.35%, #FA9D04 130.66%)",
                        WebkitBackgroundClip: "text",
                        WebkitTextFillColor: "transparent",
                        fontSize: "20px",
                        color: "#FFF",
                        fontWeight: 600,
                        textTransform: "capitalize",
                      }}
                    >
                      Solutions
                    </Typography>
                  </Typography>
                  <Typography
                    sx={{
                      marginTop: "6px",
                      maxWidth: "260px",
                      color: "#FFF",
                      fontSize: { xs: "14px", lg: "16px" },
                      fontWeight: 400,
                    }}
                  >
                    Tailored for you! Our years of experience ensure
                    personalized solutions for your unique needs.
                  </Typography>
                </Box>
              </Box>
              <Box
                sx={{
                  display: "flex",
                  gap: { xs: "60px", lg: "80px" },
                  flexDirection: { xs: "column", sm: "row" },
                }}
              >
                <Box
                  sx={{
                    textAlign: { xs: "center", sm: "left" },
                  }}
                >
                  <Image
                    src="./assets/social-media-icons/about-service-svg3.svg"
                    alt="about-service-svg1"
                    width={53}
                    height={40}
                  />
                  <Typography
                    sx={{
                      marginTop: "8px",
                      fontSize: "20px",
                      color: "#FFF",
                      fontWeight: 600,
                      textTransform: "capitalize",
                    }}
                  >
                    Guaranteed{" "}
                    <Typography
                      sx={{
                        display: "inline",
                        backgroundImage:
                          "linear-gradient(88deg, #DD2C00 -9.17%, #FF3F00 67.35%, #FA9D04 130.66%)",
                        WebkitBackgroundClip: "text",
                        WebkitTextFillColor: "transparent",
                        fontSize: "20px",
                        color: "#FFF",
                        fontWeight: 600,
                        textTransform: "capitalize",
                      }}
                    >
                      Quality Results
                    </Typography>
                  </Typography>
                  <Typography
                    sx={{
                      marginTop: "6px",
                      maxWidth: "260px",
                      color: "#FFF",
                      fontSize: { xs: "14px", lg: "16px" },
                      fontWeight: 400,
                    }}
                  >
                    Guaranteed excellence! As the best development company, our
                    commitment to quality ensures outcomes that exceed
                    expectations.
                  </Typography>
                </Box>
                <Box
                  sx={{
                    textAlign: { xs: "center", sm: "left" },
                  }}
                >
                  <Image
                    src="./assets/social-media-icons/about-service-svg4.svg"
                    alt="about-service-svg1"
                    width={72}
                    height={45}
                  />
                  <Typography
                    sx={{
                      marginTop: "8px",
                      fontSize: "20px",
                      color: "#FFF",
                      fontWeight: 600,
                      textTransform: "capitalize",
                    }}
                  >
                    Client-Centric{" "}
                    <Typography
                      sx={{
                        display: "inline",
                        backgroundImage:
                          "linear-gradient(88deg, #DD2C00 -9.17%, #FF3F00 67.35%, #FA9D04 130.66%)",
                        WebkitBackgroundClip: "text",
                        WebkitTextFillColor: "transparent",
                        fontSize: "20px",
                        color: "#FFF",
                        fontWeight: 600,
                        textTransform: "capitalize",
                      }}
                    >
                      Approach
                    </Typography>
                  </Typography>
                  <Typography
                    sx={{
                      marginTop: "6px",
                      maxWidth: "260px",
                      color: "#FFF",
                      fontSize: { xs: "14px", lg: "16px" },
                      fontWeight: 400,
                    }}
                  >
                    You are at the center of our world! Our client-centric
                    approach revolves around your satisfaction, whether you&apos;re
                    diving into the Metaverse with excitement.
                  </Typography>
                </Box>
              </Box>
            </Box>
          </Box>
        </Box>
      </Container>
    </Box>
  );
}
