"use client";

import * as React from "react";
import Link from "next/link";
import Image from "next/image";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import Button from "@mui/material/Button";
import Drawer from "@mui/material/Drawer";
import {useTheme} from "@mui/material";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import {useMediaQuery} from "@mui/material";
import HighlightOffIcon from '@mui/icons-material/HighlightOff';

const LINKS = [
  {text: "About us", href: "/about"},
  {text: "Services", href: "/services-detail"},
  {text: "Portfolio", href: "/portfolio"},
  {text: "Contact Us", href: "/contact-us"},
];

const Navbar = () => {
  const [scroll, setScroll] = React.useState(false);

  const theme = useTheme();
  const matchesSM = useMediaQuery(theme.breakpoints.down("sm"));
  const matchesXS = useMediaQuery(theme.breakpoints.down("xs"));
  const matchesMd = useMediaQuery(theme.breakpoints.down("md"));
  const matcheslg = useMediaQuery(theme.breakpoints.down("lg"));
  const [drawerOpen, setDrawerOpen] = React.useState(false);

  React.useEffect(() => {
    window.addEventListener("scroll", () => {
      setScroll(window.scrollY > 100);
    });
  }, []);

  const toggleDrawer = () => {
    setDrawerOpen(!drawerOpen);
  };

  return (
    <AppBar
      sx={{
        position: "fixed",
        color: "white",
        background: scroll ? "rgba( 21, 20, 20, 0.35 )" : "transparent",
        boxShadow: scroll ? "0px 0px" : "0px 0px",
        backdropFilter: scroll ? "blur( 18.5px )" : "blur( 0px )",
        borderRadius: "10px",
        padding: "0",
        minHeight: "auto",
        height: "auto",
        transition: "0.3s all",
      }}
    >
      <Toolbar
        sx={{
          padding: "25px !important",
          minHeight: "auto",
          position: "relative",
          backgroundColor: "transparent",
          display: "flex",
          alignItems: "center",
          justifyContent: "end",
          maxWidth: "1370px",
          width: "100%",
          px: {
            lg: "60px !important",
            md: "30px !important",
            xs: "15px !important",
          },
          m: "auto",
        }}
      >
        <Box sx={{display: "flex", alignItems: "center", mr: "auto"}}>
          <Box component={Link} href={"/"}>
            <Image
              className="brand-logo"
              loading='lazy'
              src="/assets/images/logo-img.png"
              height={86}
              width={291}
              alt="brand logo"
            />
          </Box>
        </Box>
        <Box sx={{display: {xs: "block", md: "none"}}}>
          <IconButton
            onClick={toggleDrawer}
            edge="start"
            sx={{
              color: "white",
            }}
          >
            <MenuIcon fontSize="large" />
          </IconButton>
        </Box>
        <Box
          sx={{
            display: {xs: "none", md: "flex"},
            alignItems: "center",
          }}
        >
          {LINKS.map(({text, href}, index) => (
            <ListItem
              key={index}
              sx={{
                width: "auto",
                pr: {
                  lg: "60px",
                  md: "30px",
                  xs: "15px",
                },
              }}
            >
              <ListItemButton
                component={Link}
                href={href}
                sx={{
                  p: 0,
                }}
              >
                <ListItemText
                  primary={text}
                  sx={{
                    color: "#EAEAEA",
                    fontSize: "18px",
                    fontWeight: "400",
                  }}
                />
              </ListItemButton>
            </ListItem>
          ))}
        </Box>
        <Button
          variant="contained"
          color="primary"
          component={Link}
          href="/get-started"
          sx={{
            marginLeft: 2,
            width: matchesMd ? "150px" : "194px",
            height: matchesMd ? "42px" : "56px",
            ml: matchesMd ? "-7px" : 0,
            display: {xs: "none", md: "flex"},
            borderRadius: "6px",
            background: "linear-gradient(95deg, #F04B12 1.59%, #FC8C46 100%)",
          }}
        >
          <p
            style={{
              fontSize: matchesMd ? "14px" : "18px",
              fontWeight: matchesSM ? 200 : 400,
            }}
          >
            Get Started
          </p>
        </Button>
      </Toolbar>
      <Drawer anchor="top" open={drawerOpen} onClose={toggleDrawer}>
        <Box sx={{width: "100%"}}>
          <Box sx={{
            textAlign: "right"
          }}>
          <HighlightOffIcon sx={{
            m: "25px",
            cursor: "pointer"
          }} fontSize="large"  onClick={toggleDrawer} />
          </Box>
          {LINKS.map(({text, href}) => (
            <ListItem key={href}>
              <ListItemButton
                component={Link}
                href={href}
                onClick={toggleDrawer}
              >
                <ListItemText primary={text} />
              </ListItemButton>
            </ListItem>
          ))}
          <Button
            variant="contained"
            color="primary"
            component={Link}
            href="/"
            sx={{
              marginTop: 2,
              marginLeft: 2,
              width: "194px",
              height: "56px",
              display: "flex",
              borderRadius: "6px",
              background: "linear-gradient(95deg, #F04B12 1.59%, #FC8C46 100%)",
              mb: 2,
            }}
            onClick={toggleDrawer}
          >
            <span
              style={{
                fontSize: "18px",
                fontWeight: 4000,
              }}
            >
              Get Started
            </span>
          </Button>
        </Box>
      </Drawer>
    </AppBar>
  );
};

export default Navbar;
