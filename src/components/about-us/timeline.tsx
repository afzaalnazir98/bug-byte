import { Box, Hidden } from "@mui/material";
import React from "react";
import { Chrono } from "react-chrono";
import useMediaQuery from "@mui/material/useMediaQuery";

export default function TimeLine() {
  const matchelg = useMediaQuery("(max-width:1280px)");
  const matchemd = useMediaQuery("(max-width:1180px)");
  const matcheTimeLine = useMediaQuery("(max-width:1028px)");
  const items = [
    {
      cardTitle: "01",
      cardSubtitle: "Magical Moments",
      cardDetailedText:
        "Creating magical 3D games, enchanting Avatar journeys, and thrilling AR/VR experiences.",
    },
    {
      cardTitle: "02",
      cardSubtitle: "Your Unique Touch",
      cardDetailedText:
        "Buggbytes Studios adds a personal touch just for you, using cool things like NFTs, blockchain, Unity, and Unreal Engine.",
    },
    {
      cardTitle: "03",
      cardSubtitle: "Top-Notch Always",
      cardDetailedText:
        "Buggbytes Studios is all about making things that are top-notch and good",
    },
    {
      cardTitle: "04",
      cardSubtitle: "Joyful Adventures",
      cardDetailedText:
        "Bring joy to your world with our game designs and magical AR/VR wonders.",
    },
    {
      cardTitle: "05",
      cardSubtitle: "Enter the Fun Zone",
      cardDetailedText:
        "Buggbytes Studios is your entry pass to a world of excitement and digital adventures.",
    },
    {
      cardTitle: "06",
      cardSubtitle: "Smart Ideas, Big Fun",
      cardDetailedText:
        "Buggbytes Studios combines smart ideas and creative fun to make your digital experience extra special.",
    },
  ];

  return (
    <Box
      sx={{
        maxWidth: "1440px",
        margin: "auto",
        height: "942px",
        "& .hySUUY": {
          display: "none",
        },
        ".hzItGr": {
          overflowX: "hidden",
          padding: "0.2em",
        },
        ".jHeaAq": {
          margin: 0,
        },
        "& .gJAGSz": {
          display: "none",
        },
        "& .hthIVH": {
          animation: " jKVXCn 2.25s ease-in-out",
          backgroundColor: "transparent",
        },
        "& .hthIVH > .bevYHo": {
          alignitems: "center",
          display: "flex",
          flexDirection: "column",
          margin: "0 auto",
          marginTop: "0.5em",
          marginBottom: "0.5em",
          position: "relative",
          maxHeight: "150px",
          overflowX: "hidden",
          overflowY: "auto",
          scrollbarColor: "#FFF default",
          scrollbarWidth: "thin",
          transition: "max-height 0.25s ease-in-out",
          width: "calc(95% - 0.5rem)",
          padding: "0.25rem 0.25rem",
        },
        ".bevYHo::after": {
          background: "none",
        },
        ".MKRaZ": {
          textAlign: "left",
          fontSize: matchemd ? "30px" : "40px",
          fontWeight: 600,
          backgroundImage:
            " linear-gradient(88deg, #DD2C00 -9.17%, #FF3F00 67.35%, #FA9D04 130.66%)",
          textTransform: "uppercase",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
        },
        ".UGBvC": {
          margin: " 0px 10px",
        },
        "& .jHGHrJ": {
          marginTop: "10px",
          fontSize: matchemd ? "18px" : "20px",
          fontWeight: 600,
          backgroundImage:
            " linear-gradient(88deg, #DD2C00 -9.17%, #FF3F00 67.35%, #FA9D04 130.66%)",
          textTransform: "uppercase",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
        },
        "& .bCtGeP": {
          backgroundImage:
            " linear-gradient(88deg, #DD2C00 -9.17%, #FF3F00 67.35%, #FA9D04 130.66%)",
          textTransform: "uppercase",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
        },
        "& .kbYFSf": {
          filter: "invert(1)",
        },
        "& .duijVK.left > .hthIVH": {
          minHeight: "fit-content",
          backgroundColor: "transparent",
        },
        "& .duijVK.left header> h1": {
          textAlign: "right",
          fontSize: matchemd ? "30px" : "40px",
          fontWeight: 600,
          backgroundImage:
            " linear-gradient(88deg, #DD2C00 -9.17%, #FF3F00 67.35%, #FA9D04 130.66%)",
          textTransform: "uppercase",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
        },
        "& .duijVK.left header> h2  ": {
          textAlign: "right",
          backgroundImage:
            " linear-gradient(88deg, #DD2C00 -9.17%, #FF3F00 67.35%, #FA9D04 130.66%)",
          textTransform: "uppercase",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
          fontSize: matchemd ? "18px" : "20px",
          fontWeight: 600,
          marginTop: "20px",
          marginLeft: "-9px",
        },

        "& .duijVK.right > .hthIVH": {
          minHeight: "fit-content",
          backgroundColor: "transparent",
          marginLeft: "10px",
        },
        "& .duijVK.right header> h1  ": {
          fontSize: matchemd ? "30px" : "40px",
          fontWeight: 600,
          backgroundImage:
            " linear-gradient(88deg, #DD2C00 -9.17%, #FF3F00 67.35%, #FA9D04 130.66%)",
          textTransform: "uppercase",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
          marginLeft: "10px",
        },
        "& .duijVK.right header> h2  ": {
          backgroundImage:
            " linear-gradient(88deg, #DD2C00 -9.17%, #FF3F00 67.35%, #FA9D04 130.66%)",
          textTransform: "uppercase",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
          fontSize: matchemd ? "18px" : "20px",
          fontWeight: 600,
          marginTop: "20px",
          marginLeft: "10px",
        },
        "& .jaQaOm": {
          color: "#FFF",
          fontSize: matchemd ? "14px" : "18px",
          fontWeight: 400,
        },

        ".dHWHqM::before": {
          content: '""',
          height: "0px",
          minWidth: matchemd ? "70px" : matchelg ? "80px" : "90px",
          border: "2px solid white",
          marginRight: "80px",
        },
        ".dHWHqM": {
          width: "10px",
          height: "10px",
          borderRadius: "50%",
          left: "-4px",
          top: "calc(10%)",
          transform: "none",
        },
        ".hFrYSD::before": {
          content: '""',
          height: "0px",
          minWidth: matchemd ? "70px" : matchelg ? "80px" : "90px",
          border: "2px solid white",
          marginLeft: "80px",
        },
        ".hFrYSD": {
          width: "10px",
          height: "10px",
          borderRadius: "50%",
          right: "7px",
          top: "calc(10%)",
          transform: "none",
        },
        "& .erdVAe": {
          margin: matcheTimeLine ? "0%" : "0px 20px",
        },
        ".bXpluN ": {
          width: matcheTimeLine ? "0%" : "10%",
        },
        ".erdVAe": {
          width: matcheTimeLine ? "8%" : "10%",
        },
        "& .edCynq": {
          display: "none",
        },
        "& .erdVAe::after": {
          left: matcheTimeLine ? "-3%" : "50%",
          backgroundColor: "#fff",
          width: "7px",
        },
        "& .erdVAe::before": {
          left: matcheTimeLine ? "-3%" : "50%",
          backgroundColor: "#fff",
          width: "6px",
        },
      }}
    >
      <Chrono
        mode="VERTICAL_ALTERNATING"
        items={items}
        slideShow
        scrollable={{ scrollbar: false }}
      />
    </Box>
  );
}
