"use client";
import { Box, Divider } from "@mui/material";
import React from "react";

export default function CopyRight() {
  return (
    <Box>
      <Divider sx={{ border: "2px solid  #C8C8C8" }} />
      <Box
        sx={{
          textAlign: "center",
          padding: "20px 0px",
          color: "#EAEAEA",
        }}
      >
        Copyright ©2023. All rights reserved.
      </Box>
    </Box>
  );
}
