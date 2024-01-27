"use client";
import * as React from "react";
import Tab from "@mui/material/Tab";
import Tabs from "@mui/material/Tabs";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import {Button, styled} from "@mui/material";
import Link from "next/link";
import useMediaQuery from "@mui/material/useMediaQuery";
import Image from "next/image";
import Container from "../container";

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

const StyleButton = styled(Button)({
  borderRadius: "6px",
  backgroundImage:
    "linear-gradient(88deg, #DD2C00 -9.17%, #FF3F00 67.35%, #FA9D04 130.66%)",
  fontWeight: 600,
  textTransform: "capitalize",
  color: "#fff",
  maxWidth: "fit-content",
});
const Label = styled(Tab)({
  color: "#030B12",
});

const Title = styled(Box)({
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

function TabPanel(props: TabPanelProps) {
  const {children, value, index, ...other} = props;

  return (
    <Box
      role="tabpanel"
      hidden={value !== index}
      id={`vertical-tabpanel-${index}`}
      aria-labelledby={`vertical-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box>
          <Box>{children}</Box>
        </Box>
      )}
    </Box>
  );
}

function a11yProps(index: number) {
  return {
    id: `vertical-tab-${index}`,
    "aria-controls": `vertical-tabpanel-${index}`,
  };
}
const Description = styled(Typography)({
  color: "#071421",
  fontWeight: 400,
  lineHeight: "20px",
});
export default function Offering() {
  const [value, setValue] = React.useState(0);
  const matches = useMediaQuery("(min-width:600px)");

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <Box
      sx={{
        padding: {
          xs: "2rem 0rem",
          sm: "3rem 0rem",
          md: "4rem 0rem",
          lg: "6rem 0rem",
        },
        backgroundColor: "white",
      }}
    >
      <Container>
        <Typography
          sx={{
            color: "#030B12",
            fontSize: "24px",
            fontWeight: 600,
            textTransform: "uppercase",
          }}
        >
          WHAT WE ARE OFFERING
        </Typography>

        <Title
          sx={{
            fontSize: {xs: "20px", sm: "30px", lg: "40px"},
          }}
        >
          OUR SERVICES
        </Title>
        <Typography>
          BuggBytes creates cool 3D games, personalizes journeys, and delivers
          excellent results. Our solutions are made just for you, using things
          lik NFTs, blockchain, Unity, and Unreal Engine. Trust Bugubytes
          Studios for great work that adds joy with fun game designs and cool
          AR/VR wonders.
        </Typography>
        <Box
          sx={{
            flexGrow: 1,
            marginTop: {xs: "20px", sm: "30px", md: "40px", lg: "50px"},
            display: "flex",
            flexDirection: {xs: "column", sm: "row"},
            gap: "20px",
            paddingBottom: "5rem",
          }}
        >
          <Tabs
            className="tabs-container"
            value={value}
            onChange={handleChange}
            variant="scrollable"
            scrollButtons="auto"
            aria-label={
              matches ? "scrollable auto tabs example" : "Vertical tabs example"
            }
            sx={{
              "& [role='tablist']": {
                gap: "10px",
                flexDirection: {xs: "row", sm: "column"},
              },
              "& .MuiTabs-scroller": {
                maxHeight: {sm: "350px", md: "420px"},
                overflowY: "visible",
              },
              "& .MuiTabs-scrollButtons ": {
                display: "none",
              },
              "& .MuiTouchRipple-root": {
                backgroundColor: "#06121F",
                zIndex: -1,
              },
              "& [role='tablist'] + .MuiTabs-indicator": {
                display: "none",
              },
              "& .label.Mui-selected": {
                color: "#FF3F00",
                zIndex: 2,
              },
              "& .label": {
                whiteSpace: "pre-line",
                textAlign: "left",
                fontSize: {sm: "14px", md: "20px", lg: "24px"},
                fontWeight: 600,
                alignItems: "flex-start",
                maxWidth: {xs: "max-content", sm: "370px"},
              },
            }}
          >
            <Label label="Unity & unreal" {...a11yProps(0)} className="label" />
            <Label
              label="BLOCKCHAIN games"
              {...a11yProps(1)}
              className="label"
            />
            <Label
              label="nft & metaverse"
              {...a11yProps(2)}
              className="label"
            />
            <Label label="AR DEVELOPMENT" {...a11yProps(3)} className="label" />
            <Label label="VR DEVELOPMENT" {...a11yProps(4)} className="label" />
            <Label
              label="GAMES  DESIGN & ANIMATIONS"
              {...a11yProps(5)}
              className="label"
            />
            <Label
              label="VIRTUAL EXPERIENCES"
              {...a11yProps(6)}
              className="label"
            />
          </Tabs>
          <TabPanel value={value} index={0}>
            <Box
              sx={{
                maxWidth: "858px",
                display: "grid",
                justifyContent: "center",
                gap: {xs: "20px", md: "30px", lg: "40px"},
              }}
            >
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
                  },
                }}
              >
                <Image
                  className="main-image"
                  src="/assets/images/services-tab-1.png"
                  alt="services"
                  width={858}
                  height={312}
                />
              </Box>
              <Description
                sx={{
                  fontSize: {md: "18px", xs: "14px"},
                }}
              >
                Join the fun at Buggbyte! Our games, made with Unity and Unreal
                Engine, not only look cool but also have a relaxed vibe. Picture
                yourself going on exciting adventures or simply chilling in a
                virtual world. Come be part of the enjoyment where each part of
                the game tells a laid-back and cool story, crafted just for you!
              </Description>
              <Box component={Link} href="/">
                <StyleButton
                  sx={{
                    fontSize: {xs: "18px", md: "20px"},
                    padding: {xs: " 6px 28px", md: "7px 30px"},
                  }}
                >
                  Learn More
                </StyleButton>
              </Box>
            </Box>
          </TabPanel>
          <TabPanel value={value} index={1}>
            <Box
              sx={{
                maxWidth: "858px",
                display: "grid",
                justifyContent: "center",
                gap: {xs: "20px", md: "30px", lg: "40px"},
              }}
            >
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
                  },
                }}
              >
                <Image
                  className="main-image"
                  src="/assets/images/services-tab-1.png"
                  alt="services"
                  width={858}
                  height={312}
                />
              </Box>
              <Description
                sx={{
                  fontSize: {md: "18px", xs: "14px"},
                }}
              >
                Join the fun at Buggbyte! Our games, made with Unity and Unreal
                Engine, not only look cool but also have a relaxed vibe. Picture
                yourself going on exciting adventures or simply chilling in a
                virtual world. Come be part of the enjoyment where each part of
                the game tells a laid-back and cool story, crafted just for you!
              </Description>
              <Box component={Link} href="/">
                <StyleButton
                  sx={{
                    fontSize: {xs: "18px", md: "20px"},
                    padding: {xs: " 6px 28px", md: "7px 30px"},
                  }}
                >
                  Learn More
                </StyleButton>
              </Box>
            </Box>
          </TabPanel>
          <TabPanel value={value} index={2}>
            <Box
              sx={{
                maxWidth: "858px",
                display: "grid",
                justifyContent: "center",
                gap: {xs: "20px", md: "30px", lg: "40px"},
              }}
            >
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
                  },
                }}
              >
                <Image
                  className="main-image"
                  src="/assets/images/services-tab-1.png"
                  alt="services"
                  width={858}
                  height={312}
                />
              </Box>
              <Description
                sx={{
                  fontSize: {md: "18px", xs: "14px"},
                }}
              >
                Join the fun at Buggbyte! Our games, made with Unity and Unreal
                Engine, not only look cool but also have a relaxed vibe. Picture
                yourself going on exciting adventures or simply chilling in a
                virtual world. Come be part of the enjoyment where each part of
                the game tells a laid-back and cool story, crafted just for you!
              </Description>
              <Box component={Link} href="/">
                <StyleButton
                  sx={{
                    fontSize: {xs: "18px", md: "20px"},
                    padding: {xs: " 6px 28px", md: "7px 30px"},
                  }}
                >
                  Learn More
                </StyleButton>
              </Box>
            </Box>
          </TabPanel>
          <TabPanel value={value} index={3}>
            <Box
              sx={{
                maxWidth: "858px",
                display: "grid",
                justifyContent: "center",
                gap: {xs: "20px", md: "30px", lg: "40px"},
              }}
            >
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
                  },
                }}
              >
                <Image
                  className="main-image"
                  src="/assets/images/services-tab-1.png"
                  alt="services"
                  width={858}
                  height={312}
                />
              </Box>
              <Description
                sx={{
                  fontSize: {md: "18px", xs: "14px"},
                }}
              >
                Join the fun at Buggbyte! Our games, made with Unity and Unreal
                Engine, not only look cool but also have a relaxed vibe. Picture
                yourself going on exciting adventures or simply chilling in a
                virtual world. Come be part of the enjoyment where each part of
                the game tells a laid-back and cool story, crafted just for you!
              </Description>
              <Box component={Link} href="/">
                <StyleButton
                  sx={{
                    fontSize: {xs: "18px", md: "20px"},
                    padding: {xs: " 6px 28px", md: "7px 30px"},
                  }}
                >
                  Learn More
                </StyleButton>
              </Box>
            </Box>
          </TabPanel>
          <TabPanel value={value} index={4}>
            <Box
              sx={{
                maxWidth: "858px",
                display: "grid",
                justifyContent: "center",
                gap: {xs: "20px", md: "30px", lg: "40px"},
              }}
            >
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
                  },
                }}
              >
                <Image
                  className="main-image"
                  src="/assets/images/services-tab-1.png"
                  alt="services"
                  width={858}
                  height={312}
                />
              </Box>
              <Description
                sx={{
                  fontSize: {md: "18px", xs: "14px"},
                }}
              >
                JOur games, made with Unity and Unreal Engine, not only look
                cool but also have a relaxed vibe. Picture yourself going on
                exciting adventures or simply chilling in a virtual world. Come
                be part of the enjoyment where each part of the game tells a
                laid-back and cool story, crafted just for you!
              </Description>
              <Box component={Link} href="/">
                <StyleButton
                  sx={{
                    fontSize: {xs: "18px", md: "20px"},
                    padding: {xs: " 6px 28px", md: "7px 30px"},
                  }}
                >
                  Learn More
                </StyleButton>
              </Box>
            </Box>
          </TabPanel>
          <TabPanel value={value} index={5}>
            <Box
              sx={{
                maxWidth: "858px",
                display: "grid",
                justifyContent: "center",
                gap: {xs: "20px", md: "30px", lg: "40px"},
              }}
            >
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
                  },
                }}
              >
                <Image
                  className="main-image"
                  src="/assets/images/services-tab-1.png"
                  alt="services"
                  width={858}
                  height={312}
                />
              </Box>
              <Description
                sx={{
                  fontSize: {md: "18px", xs: "14px"},
                }}
              >
                Join the fun at Buggbyte! Our games, made with Unity and Unreal
                Engine,xciting adventures or simply chilling in a virtual world.
                Come be part of the enjoyment where each part of the game tells
                a laid-back and cool story, crafted just for you!
              </Description>
              <Box component={Link} href="/">
                <StyleButton
                  sx={{
                    fontSize: {xs: "18px", md: "20px"},
                    padding: {xs: " 6px 28px", md: "7px 30px"},
                  }}
                >
                  Learn More
                </StyleButton>
              </Box>
            </Box>
          </TabPanel>
          <TabPanel value={value} index={6}>
            <Box
              sx={{
                maxWidth: "858px",
                display: "grid",
                justifyContent: "center",
                gap: {xs: "20px", md: "30px", lg: "40px"},
              }}
            >
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
                  },
                }}
              >
                <Image
                  className="main-image"
                  src="/assets/images/services-tab-1.png"
                  alt="services"
                  width={858}
                  height={312}
                />
              </Box>
              <Description
                sx={{
                  fontSize: {md: "18px", xs: "14px"},
                }}
              >
                Join the fun at Buggbyte! Our games, made with Unity and Unreal
                Engine, not only look cool but also have a relaxed vibe. Picture
                yourself going on exciting adventures or simply chilling in a
                virtual world. Come be part of the enjoyment where each part of
                the game tells a laid-back and cool story, crafted just for you!
              </Description>
              <Box component={Link} href="/">
                <StyleButton
                  sx={{
                    fontSize: {xs: "18px", md: "20px"},
                    padding: {xs: " 6px 28px", md: "7px 30px"},
                  }}
                >
                  Learn More
                </StyleButton>
              </Box>
            </Box>
          </TabPanel>
        </Box>
      </Container>
    </Box>
  );
}
