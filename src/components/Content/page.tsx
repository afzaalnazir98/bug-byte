import * as React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Image from "next/image";
import { Button } from "@mui/material";
import Link from "next/link";

export default function Content(props: any) {
  const { image, title, description, buttonText, buttonLink, order } = props;
  return (
    <Box>
      <Box
        sx={{
          maxWidth: "1250px",
          m: "auto",
          minHeight: "369px",
          display: "flex",
          justifyContent: "center",
          gap: "5rem",
        }}
      >
        <Box sx={{ flex: "50%", position: "relative", order: { order } }}>
          <Image src={image} alt="hello" layout="fill" objectFit="cover" />
        </Box>
        <Box sx={{ flex: "50%", alignSelf: "center" }}>
          <Box
            sx={{
              display: "grid",
              gap: "20px",
            }}
          >
            <Typography
              sx={{
                textTransform: "capitalize",
                fontWeight: 700,
                fontSize: "48px",
                backgroundImage:
                  "linear-gradient(90deg, #F04B12 0%, #FB8843 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              {title}
            </Typography>
            <Typography
              sx={{
                color: "#FFF",
                fontSize: "18px",
                fontWeight: "400",
                textTransform: "capitalize",
              }}
            >
              {description}
            </Typography>
            <Button
              component={Link}
              href={buttonLink}
              sx={{
                padding: "7px 80px",
                borderRadius: "6px",
                backgroundImage:
                  "linear-gradient(90deg, #F04B12 0%, #FB8843 100%)",
                fontSize: "24px",
                fontWeight: 600,
                textTransform: "capitalize",
                color: "#fff",
                maxWidth: "fit-content",
              }}
            >
              {buttonText}
            </Button>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}
