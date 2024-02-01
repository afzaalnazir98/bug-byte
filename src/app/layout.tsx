import * as React from "react";

import Box from "@mui/material/Box";
import ThemeRegistry from "@/components/ThemeRegistry/ThemeRegistry";
import Navbar from "@/utils/Navbar";
import FooterLayout from "@/components/Footer/FooterLayout";
import Footer from "@/components/Footer/Footer";
import CopyRight from "@/components/Footer/CopyRight";
import {SpeedInsights} from "@vercel/speed-insights/next";
import "./globals.css";
import FooterData from "../Mock/FooterData.json";
import {FooterSection} from "@/utils/types";

export const metadata = {
  title: "bugg byte studios",
  description:
    "BuggBytes Studio is your gaming hub for Unity, Unreal, AR, VR, Metaverse, Blockchain, NFTs, and Virtual Real Estate. Experience the next level of fun with our console gaming creations – where innovation meets playtime excitement!",
};

const footerData: FooterSection[] = FooterData;

export default function RootLayout({children}: {children: React.ReactNode}) {
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
