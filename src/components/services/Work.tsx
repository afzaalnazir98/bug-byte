import { Box, Button, Typography, styled } from "@mui/material";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

const StyleButton = styled(Button)({
  borderRadius: "6px",
  backgroundImage:
    "linear-gradient(88deg, #DD2C00 -9.17%, #FF3F00 67.35%, #FA9D04 130.66%)",
  fontWeight: 600,
  textTransform: "capitalize",
  color: "#fff",
  maxWidth: "fit-content",
});

export default function Work() {
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  
  const circle = [
    {
      url:"/assets/social-media-icons/work-icon1.svg"
    },
    {
      url:"/assets/social-media-icons/work-icon2.svg"
    },
    {
      url:"/assets/social-media-icons/work-icon3.svg"
    },
    {
      url:"/assets/social-media-icons/work-icon4.svg"
    },
    {
      url:"/assets/social-media-icons/work-icon5.svg"
    },
    {
      url:"/assets/social-media-icons/work-icon6.svg"
    },
    {
      url:"/assets/social-media-icons/work-icon7.svg"
    }

  ]
  const projectLifecycle = [
    {
      step: 1,
      phase: "Support",
      description:
        "The team isn’t done yet! We are here with you throughout the lifecycle to scale up your project in the future.",
    },
    {
      step: 2,
      phase: "Release",
      description:
        "Our project managers create channels of viable release channels, and IP delegation for you.",
    },
    {
      step: 3,
      phase: "Post-production",
      description:
        "The refining phase, where our team of testers and producers smooth out the edges and fine-tune the product.",
    },
    {
      step: 4,
      phase: "Conceptualization",
      description:
        "Based on the findings, we create a visual outlook to show you an image of what you have in mind.",
    },
    {
      step: 5,
      phase: "Pre-production",
      description:
        "Every element of the project is streamlined into milestones and processes for optimal productivity.",
    },
    {
      step: 6,
      phase: "Production",
      description:
        "Here’s where we put the foot on the pedal. Our team of developers and designers create the final functional product.",
    },
    {
      step: 7,
      phase: "Ideation",
      description:
        "Our team of game & product designers work closely with you on the nitty-gritty details about your project.",
    },
  ];

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % 7);
    }, 5000);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <>
      <Box
        sx={{
          backgroundImage: `url("/assets/images/service-work-bg.png")`,
          textAlign: "center",
          padding: "60px 0px",
          display: "grid",
          backgroundSize:"cover",
          justifyContent: "center",
          gap: "30px",
          alignItems: "center",
          overflow: "hidden",
        }}
      >
        <Box>
          <Typography
            sx={{
              backgroundImage:
                "linear-gradient(88deg, #DD2C00 -9.17%, #FF3F00 67.35%, #FA9D04 130.66%)",
              WebkitTextFillColor: "transparent",
              WebkitBackgroundClip: "text",
              fontSize: "14px",
              fontWeight: 400,
            }}
          >
            Get to know
          </Typography>

          <Typography
            sx={{
              color: "#FFF",
              fontSize: {xs:"20px",sm:"25px", md:"30px",lg:"40px"},
              fontWeight: 700,
              textTransform: "uppercase",
            }}
          >
            How We Work
          </Typography>
        </Box>

        <Box
          sx={{
            padding:{xs:"40px 0px",sm:"60px 0px",md:"80px 0px"},
            textAlign: "center",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            position: "relative",
            maxWidth: "max-content",
            margin: "auto"
          }}
        >
          <Box
            sx={{
              backgroundImage: `url("/assets/images/circle.svg")`,
              backgroundSize: "contain",
              height: {xs:"240px",sm:"550px",md:"600px"},
              width: {xs:"240px",sm:"550px",md:"600px"},
              transform: "rotate(75deg)",
              animation: "anime1 35s linear infinite",
              borderRadius: "50%",
              position: "relative",
            }}
          >
            <Box
              sx={{
                position: "relative",
                left: {xs:"-54%",sm:"-50%"},
                width: "100%",
                height: "100%",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                cursor: "pointer",
              }}
            >
              {circle.map((val,index) => {
                return (
                  <Box key={index} sx={{
                    border: 
                    index === currentIndex ?"1px solid #DD2C00":"1px solid transparent",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  position: "absolute",
                  padding: {xs:"3px",sm:"5px"},
                  borderRadius: "50%",
                  transition: "0.5s",
                  borderCollapse: "separate",
                  borderSpacing: "2px",
                  transform: `rotate(calc(360deg/7 * ${index + 0.8}))`,
                  transformOrigin: {xs:"162px",sm:"330px",md:"355px"},
                  overflow: "hidden",
                    
                  }}>
                    <Box
                      key={index}
                      sx={{
                        background:
                          index === currentIndex 
                            ? "linear-gradient(88deg, #DD2C00 -9.17%, #FF3F00 67.35%, #FA9D04 130.66%)"
                            : "white",
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        padding: index === currentIndex ?{xs:"16px",sm:"33px"}:{xs:"12px",sm:"30px"},
                        borderRadius: "50%",
                        "& .svgImage":{
                        animation: "anime1 35s linear infinite",
                        width: {xs:"33px",sm:"43px"},
                        height: {xs:"33px",sm:"43px"},
                        }
                      }}
                    >
                      <Image
                        src={val.url}
                        alt="WorkSvg1"
                        className="svgImage"
                        width={43}
                        height={43}
                      />
                    </Box>
                  </Box>
                );
              })}
            </Box>
          </Box>

          <Box
            sx={{
              position: "absolute",
              color: "white",
            }}
          >
            <Box
              sx={{
                width: {xs:"175px",sm:"326px"},
                height: {xs:"175px",sm:"326px"},
                borderRadius: "181px",
                border: "3px solid  #DD2C00",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Box
                sx={{
                  width: {xs:"165px",sm:"300px"},
                  height: {xs:"165px",sm:"300px"},
                  borderRadius: "181px",
                  backgroundImage:
                    "linear-gradient(88deg, #DD2C00 -9.17%, #FF3F00 67.35%, #FA9D04 130.66%)",
                  boxShadow: "0px 0px 46px 0px rgba(137, 136, 136, 0.22)",
                  display: "grid",
                  justifyContent: "center",
                  alignContent: "center",
                  gap: {xs:"10px",sm:"20px"},
                }}
              >
                {projectLifecycle.map((item, index) => (
                  <Box
                    key={index}
                    style={{
                      display: index === currentIndex ? "block" : "none",
                    }}
                  >
                    <Typography
                      sx={{
                        color: "#FFF",
                        textAlign: "center",
                        fontSize: {xs:"14px",sm:"28px"},
                        fontWeight: 600,
                      }}
                    >
                      {item.phase}
                    </Typography>
                    <Typography
                      sx={{
                        color: "#FFF",
                        textAlign: "center",
                        fontSize: {xs:"10px",sm:"18px"},
                        fontWeight: 400,
                        maxWidth: {xs:"140px",sm:"220px"},
                      }}
                    >
                      {item.description}
                    </Typography>
                  </Box>
                ))}
              </Box>
            </Box>
          </Box>
        </Box>

        <Typography
          sx={{
            color: "#FFF",
            fontSize: {xs:"18px",sm:"22px",md:"24px"},
            fontWeight: 400,
            maxWidth: {xs:"330px",sm:"max-content"},
            textTransform: "capitalize",
          }}
        >
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
        </Typography>
        <Box component={Link} href="#">
          <StyleButton
            sx={{
              fontSize: { xs: "18px", md: "20px" },
              padding: { xs: " 6px 28px", md: "7px 30px" },
            }}
          >
            Explore More
          </StyleButton>
        </Box>
      </Box>
    </>
  );
}
