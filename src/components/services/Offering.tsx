"use client";
import * as React from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { Button, styled} from "@mui/material";
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

function TabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <Box
      role="tabpanel"
      hidden={value !== index}
      id={`vertical-tabpanel-${index}`}
      aria-labelledby={`vertical-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ padding: "0px 24px" }}>
          <Typography>{children}</Typography>
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
        padding: { xs: "2rem 0rem",sm: "3rem 0rem", md: "4rem 0rem", lg: "6rem 0rem" },
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
            fontSize: { xs: "20px", sm: "30px", lg: "40px" },
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
            marginTop: { xs: "20px", sm: "30px", md: "40px", lg: "50px" },
            display: "flex",
            flexDirection: { xs: "column", sm: "row" },
            height: 450,
          }}
        >
          <Tabs
            orientation={matches ? "horizontal" : "vertical"}
            variant="scrollable"
            scrollButtons={matches ? true : false}
            value={value}
            onChange={handleChange}
            allowScrollButtonsMobile={matches ? true : false}
            aria-label="Vertical tabs example"
            sx={{
              minWidth: "fit-content",
              overflowX: { xs: "visible", sm: "hidden" },
              display: { xs: "flex", sm: "block" },
              maxWidth: { xs: 320, sm: 480 },

              "& .mui-heg063-MuiTabs-flexContainer": {
                flexDirection: { xs: "row", sm: "column" },
              },

              "& .MuiTab-root": {
                padding: {
                  sm: "5px 22px 5px 12px",
                  md: "5px 25px 5px 15px",
                  lg: "5px 30px 5px 20px",
                },
                whiteSpace: "nowrap",
              },
              "&  .mui-10d9dml-MuiTabs-indicator": {
                backgroundColor: "#06121F",
                width: "100%",
                borderRadius: "5px",
              },
              "& .mui-2dhfn1-MuiButtonBase-root-MuiTab-root": {
                padding: "8px",
              },
              "& .mui-2dhfn1-MuiButtonBase-root-MuiTab-root.Mui-selected": {
                backgroundImage:
                  "linear-gradient(88deg, #DD2C00 -9.17%, #FF3F00 67.35%, #FA9D04 130.66%)",
                fontSize: { sm: "18px", md: "22px", lg: "25px" },
                fontWeight: 700,
                zIndex: 1,
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              },
              "& .MuiTab-root.Mui-selected": {
                color: "#06121F",
              },
              "& .label": {
                fontSize: { sm: "14px", md: "20px", lg: "24px" },
                fontWeight: 600,
                alignItems: "flex-start",
                maxWidth: { xs: "max-content", sm: "370px" },
              },
            }}
          >
            <Tab label="Unity & unreal" {...a11yProps(0)} className="label" />
            <Tab label="BLOCKCHAIN games" {...a11yProps(1)} className="label" />
            <Tab label="nft & metaverse" {...a11yProps(2)} className="label" />
            <Tab label="AR DEVELOPMENT" {...a11yProps(3)} className="label" />
            <Tab label="VR DEVELOPMENT" {...a11yProps(4)} className="label" />
            <Tab
              label="GAMES & ANIMATIONS"
              {...a11yProps(5)}
              className="label"
            />
            <Tab
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
                gap: { xs: "20px", md: "30px", lg: "40px" },
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
                  fontSize: { md: "18px", xs: "14px" },
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
                    fontSize: { xs: "18px", md: "20px" },
                    padding: { xs: " 6px 28px", md: "7px 30px" },
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
                gap: { xs: "20px", md: "30px", lg: "40px" },
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
                  fontSize: { md: "18px", xs: "14px" },
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
                    fontSize: { xs: "18px", md: "20px" },
                    padding: { xs: " 6px 28px", md: "7px 30px" },
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
                gap: { xs: "20px", md: "30px", lg: "40px" },
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
                  fontSize: { md: "18px", xs: "14px" },
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
                    fontSize: { xs: "18px", md: "20px" },
                    padding: { xs: " 6px 28px", md: "7px 30px" },
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
                gap: { xs: "20px", md: "30px", lg: "40px" },
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
                  fontSize: { md: "18px", xs: "14px" },
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
                    fontSize: { xs: "18px", md: "20px" },
                    padding: { xs: " 6px 28px", md: "7px 30px" },
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
                gap: { xs: "20px", md: "30px", lg: "40px" },
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
                  fontSize: { md: "18px", xs: "14px" },
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
                    fontSize: { xs: "18px", md: "20px" },
                    padding: { xs: " 6px 28px", md: "7px 30px" },
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
                gap: { xs: "20px", md: "30px", lg: "40px" },
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
                  fontSize: { md: "18px", xs: "14px" },
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
                    fontSize: { xs: "18px", md: "20px" },
                    padding: { xs: " 6px 28px", md: "7px 30px" },
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
                gap: { xs: "20px", md: "30px", lg: "40px" },
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
                  fontSize: { md: "18px", xs: "14px" },
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
                    fontSize: { xs: "18px", md: "20px" },
                    padding: { xs: " 6px 28px", md: "7px 30px" },
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
