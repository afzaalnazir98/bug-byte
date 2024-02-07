"use client";
import Container from "@/components/container";
import { Box, Divider } from "@mui/material";
import React from "react";

export default function CopyRight() {
  return (
    <>
      <Divider sx={{ border: "2px solid  #C8C8C8" }} />
      <Container>
        <Box
          sx={{
            textAlign: "center",
            padding: "20px 0px 40px 0px",
            color: "#EAEAEA",
            fontSize: { xs: "14px", md: "18px" },
          }}
        >
          Copyright ©2024. All rights reserved.
        </Box>
      </Container>
    </>
  );
}
