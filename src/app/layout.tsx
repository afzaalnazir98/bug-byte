"use client";

import * as React from "react";
import Box from "@mui/material/Box";
import ThemeRegistry from "@/components/ThemeRegistry/ThemeRegistry";
import Navbar from "@/utils/Navbar";
import FooterLayout from "@/components/Footer/FooterLayout";
import Footer from "@/components/Footer/Footer";
import CopyRight from "@/components/Footer/CopyRight";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { AppProgressBar as ProgressBar } from "next-nprogress-bar";
import FooterData from "../Mock/FooterData.json";
import "./globals.css";
import { FooterSection } from "@/utils/types";

const footerData: FooterSection[] = FooterData;

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <Box
        component={"body"}
        sx={{
          backgroundColor: "#000",
        }}
      >
        <Box
          sx={{
            background:
              "linear-gradient(112deg, rgba(23, 69, 113, 0.30) -13.12%, rgba(0, 0, 0, 0.30) 123.07%)",
          }}
        >
          <ThemeRegistry>
            <Navbar />
            <Box component="main">
              {children}
              <ProgressBar
                height="6px"
                color="#FA9D04"
                options={{ showSpinner: false }}
                shallowRouting
              />
            </Box>
            <FooterLayout>
              <Footer footerData={footerData} />
              <CopyRight />
            </FooterLayout>
            <SpeedInsights />
          </ThemeRegistry>
        </Box>
      </Box>
    </html>
  );
}
