import * as React from "react";

import Box from "@mui/material/Box";
import ThemeRegistry from "@/components/ThemeRegistry/ThemeRegistry";
import Navbar from "@/utils/Navbar";
import FooterLayout from "@/components/Footer/FooterLayout";
import Footer from "@/components/Footer/Footer";
import CopyRight from "@/components/Footer/CopyRight";
import {SpeedInsights} from "@vercel/speed-insights/next";
import "./globals.css";

export const metadata = {
  title: "BUGG BYTE",
  description:
    "Reinventing the way of developing games, we aim to Develop the most master-peaced Games available on the market.",
};

const footerData = [
  {
    section: "Quick Links",
    links: [
      {text: "Home", url: "/"},
      {text: "About", url: "/about"},
      {text: "Our Services", url: "/services"},
      {text: "Portfolio", url: "/portfolio"},
      {text: "Contact Us", url: "/contact"},
    ],
  },
  {
    section: "Our Services",
    links: [
      {text: "Game Development", url: "/game-development"},
      {text: "Blockchain", url: "/blockchain"},
      {text: "AR/VR", url: "/ar-vr"},
      {text: "Metaverse", url: "/metaverse"},
      {text: "Unity Development", url: "/unity-development"},
      {text: "NFT", url: "/nft"},
    ],
  },
  {
    section: "Contact Us",
    links: [
      {text: "202 Helga Springs Rd, Crawford, TN 38554", url: "#"},
      {text: "1234567890", url: "#"},
      {text: "hello@example.com", url: "mailto:hello@example.com"},
    ],
    socialMedia: [
      {platform: "Facebook", icon: "/assets/images/facebook.svg", url: "#"},
      {platform: "Instagram", icon: "/assets/images/instagram.svg", url: "#"},
      {platform: "Linkdine", icon: "/assets/images/linkdine.svg", url: "#"},
    ],
  },
];

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
            <Box
              component="main"
              sx={{
                paddingTop: "140px",
              }}
            >
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
