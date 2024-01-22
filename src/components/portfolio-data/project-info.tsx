"use client";

import { Box, Typography, styled, useMediaQuery } from "@mui/material";
import Container from "../container";
import Image from "next/image";

const projectInfoImage = {
  "@media (max-width: 600px)": {
    textAlign: "center",
  },
  "@media (min-width: 768px)": {
    marginRight: "20px",
  },
};
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

const SubTitle = styled(Typography)({
  color: "#fff",
  fontWeight: 600,
  lineHeight: "45.5px",
  textTransform: "uppercase",
});
export default function ProjectInfo() {
  const matches = useMediaQuery("(min-width:1000px)");
  return (
    <Box sx={{
      padding:"100px 0px"
    }}>
        <Container>
      <Box sx={{
        display: "grid",
        justifyItems: "center",
        gap:"100px"
      }}>
        <Box sx={{
          display: "grid",
          justifyItems: "center",
          gap:"20px"
        }}>
        <Title
        sx={{
          fontSize: { xs: "20px", sm: "30px", lg: "40px" },
          textAlign: { xs: "center", lg: "left" },
        }}
      >
        Project Info
      </Title>
      <SubTitle
        sx={{
          fontSize: { xs: "20px", lg: "25px" },
          textAlign:"center",
        }}
      >
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
      </SubTitle>
        </Box>

     
      <Box
        sx={{
          display: "flex",
          flexDirection: matches?"row":"column",
          alignItems: "center",
          gap: matches?"0px":"90px",
        }}
      >
        <Box
          sx={{
            flex: "40%",
            ...projectInfoImage,
            "&  .protfolio-image": {
              "@media (max-width: 600px)": {
                width: "270px",
                height: "250px",
              },
            },
          }}
        >
          <Image
            className="protfolio-image"
            src="/assets/images/project-info.png"
            alt="cartoon-img"
            width={400}
            height={323}
          />
        </Box>
        <Box
          sx={{
            flex: "60%",
          }}
        >
          <Box>
            <Typography
              sx={{
                color: "#FFF",
                fontSize: "30px",
                fontWeight: 600,
              }}
            >
              Project Type:
            </Typography>
            <Box
              sx={{
                marginTop: "20px",
                maxWidth: {xs:"fit-content",sm:"610px"},
                borderRadius: "5px",
                border: "1px solid  #DD2C00",
                backgroundColor: "#071626",
                display: "flex",
                padding: "13px 14px",
                alignItems: "center",
                gap: "10px",
              }}
            >
              <Image
                src="/assets/social-media-icons/project-info-type-svg1.svg"
                alt="project-info-type-svg1"
                width={36}
                height={36}
              />
              <Typography
                sx={{
                  color: "#FFF",
                  fontSize: "24px",
                  fontWeight: 500,
                }}
              >
                Video Game
              </Typography>
            </Box>
          </Box>
          <Box
            sx={{
              marginTop: "35px",
            }}
          >
            <Typography
              sx={{
                color: "#FFF",
                fontSize: "30px",
                fontWeight: 600,
              }}
            >
              Project Type:
            </Typography>
            <Box
              sx={{
                marginTop: "20px",
                maxWidth: {xs:"fit-content",sm:"610px"},
                borderRadius: "5px",
                border: "1px solid  #DD2C00",
                backgroundColor: "#071626",
                display: "flex",
                flexDirection: {xs:"column",sm:"row"},
                alignItems: "flex-start",
                padding: "13px 14px",
                gap:{xs:"20px",sm:"0px"}
              }}
            >
              <Box sx={{
                display:"flex",
                gap: "10px",
              }}>
              <Image
                src="/assets/social-media-icons/project-info-unity.svg"
                alt="project-info-type-svg1"
                width={36}
                height={36}
              />
              <Typography
                sx={{
                  color: "#FFF",
                  fontSize: "24px",
                  fontWeight: 500,
                  paddingRight: "20px",
                }}
              >
                Unity
              </Typography>
              </Box>

              <Box sx={{
                display:"flex",
                gap: "10px",
              }}>
              <Image
                src="/assets/social-media-icons/project-info-unity.svg"
                alt="project-info-type-svg1"
                width={36}
                height={36}
              />
              <Typography
                sx={{
                  whiteSpace: "nowrap",
                  color: "#FFF",
                  fontSize: "24px",
                  fontWeight: 500,
                  paddingRight: "20px",
                }}
              >
                Auto desk Maya
              </Typography>

              </Box>
             
             <Box sx={{
                display:"flex",
                gap: "10px",
              }}>
             <Image
                src="/assets/social-media-icons/project-info-unity.svg"
                alt="project-info-type-svg1"
                width={36}
                height={36}
              />
              <Typography
                sx={{
                  whiteSpace: "nowrap",
                  color: "#FFF",
                  fontSize: "24px",
                  fontWeight: 500,
                }}
              >
                Blender
              </Typography>

             </Box>
             
             
            </Box>
          </Box>
          <Box
            sx={{
              marginTop: "35px",
            }}
          >
             
            <Typography
              sx={{
                color: "#FFF",
                fontSize: "30px",
                fontWeight: 600,
              }}
            >
              Technology Stacks:
            </Typography>
            <Box
              sx={{
                marginTop: "20px",
                maxWidth: {xs:"fit-content",sm:"610px"},
                borderRadius: "5px",
                border: "1px solid  #DD2C00",
                backgroundColor: "#071626",
                display: "flex",
                flexDirection: {xs:"column",sm:"row"},
                alignItems: "flex-start",
                padding: "13px 14px",
                gap:{xs:"20px",sm:"0px"}
              }}
            >
              <Box sx={{
                display:"flex",
                gap: "10px",
              }}>

<Image
                src="/assets/social-media-icons/project-info-apple.svg"
                alt="project-info-type-svg1"
                width={36}
                height={36}
              />
              <Typography
                sx={{
                  color: "#FFF",
                  fontSize: "24px",
                  fontWeight: 500,
                  paddingRight: "20px",
                }}
              >
                Apple Store
              </Typography>
              </Box>
              <Box sx={{
                display:"flex",
                gap: "10px",
              }}>
                <Image
                src="/assets/social-media-icons/project-info-playstore.svg"
                alt="project-info-type-svg1"
                width={36}
                height={36}
              />
              <Typography
                sx={{
                  color: "#FFF",
                  fontSize: "24px",
                  fontWeight: 500,
                }}
              >
                Play Store
              </Typography>
              </Box>
              
              
            </Box>
          </Box>
        </Box>
      </Box>
      </Box>
     
    </Container>
    </Box>

  
  );
}
