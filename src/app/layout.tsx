import * as React from "react";

import Box from "@mui/material/Box";
import HomeIcon from "@mui/icons-material/Home";
import StarIcon from "@mui/icons-material/Star";
import ChecklistIcon from "@mui/icons-material/Checklist";
import ThemeRegistry from "@/components/ThemeRegistry/ThemeRegistry";
import Navbar from "@/utils/Navbar";
import FooterLayout from "@/components/Footer/FooterLayout";
import Footer from "@/components/Footer/Footer";
import CopyRight from "@/components/Footer/CopyRight";
import "./globals.css"

export const metadata = {
  title: "Next.js App Router + Material UI v5",
  description: "Next.js App Router + Material UI v5",
};

const LINKS = [
  { text: "Home", href: "/", icon: HomeIcon },
  { text: "Starred", href: "/starred", icon: StarIcon },
  { text: "Tasks", href: "/tasks", icon: ChecklistIcon },
];

const footerData = [
  {
    section: "Quick Links",
    links: [
      { text: "Home", url: "/" },
      { text: "About", url: "/about" },
      { text: "Our Services", url: "/services" },
      { text: "Portfolio", url: "/portfolio" },
      { text: "Contact Us", url: "/contact" },
    ],
  },
  {
    section: "Our Services",
    links: [
      { text: "Game Development", url: "/game-development" },
      { text: "Blockchain", url: "/blockchain" },
      { text: "AR/VR", url: "/ar-vr" },
      { text: "Metaverse", url: "/metaverse" },
      { text: "Unity Development", url: "/unity-development" },
      { text: "NFT", url: "/nft" },
    ],
  },
  {
    section: "Contact Us",
    links: [
      { text: "202 Helga Springs Rd, Crawford, TN 38554", url: "#" },
      { text: "1234567890", url: "#" },
      { text: "hello@example.com", url: "#" },
    ],
    socialMedia: [
      { platform: "Facebook", icon: "/assets/images/facebook.svg", url: "#" },
      { platform: "Instagram", icon: "/assets/images/instagram.svg", url: "#" },
      { platform: "Linkdine", icon: "/assets/images/linkdine.svg", url: "#" },
    ],
  },
];

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
          background:
            "linear-gradient(111deg, rgba(70, 28, 2, 0.60) -0.08%, rgba(0, 0, 0, 0.97) 100%),linear-gradient(111deg, rgba(88, 35, 2, 0.60) -0.08%, rgba(0, 0, 0, 0.97) 100%)",
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
        </ThemeRegistry>
      </Box>
    </html>
  );
}
