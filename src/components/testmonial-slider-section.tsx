import * as React from "react";
import Typography from "@mui/material/Typography";
import {Box} from "@mui/material";
import TestimonialSlider from "./Sliders/testimonial-slider";

export default function TestimonialSectionContainer(): JSX.Element {
  return (
    <Box sx={{}}>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
          textAlign: "center",
          color: "white",
        }}
      >
        <Typography
          variant="body1"
          sx={{
            fontSize: "20px",
            fontWeight: 500,
            marginTop: "100px",
            letterSpacing: "0.4px",
            textTransform: "uppercase",
            color: "#FE7624",
          }}
        >
          TESTIMONIALS
        </Typography>
        <Typography
          variant="h1"
          sx={{
            fontSize: {xs: "30px", sm: "40px"},
            fontWeight: {xs: 500, sm: 700},
            lineHeight: "41px",
            textTransform: "uppercase",
            mt: {xs: 1, md: 3},
          }}
        >
          OUR CLIENTS TRUST US
        </Typography>
      </Box>
      <TestimonialSlider />
    </Box>
  );
}
