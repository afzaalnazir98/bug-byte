"use client";

import {useEffect, useState} from "react";
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
import {styled, useTheme} from "@mui/material";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import {useMediaQuery} from "@mui/material";
import HighlightOffIcon from "@mui/icons-material/HighlightOff";
import ArrowOutwardIcon from "@mui/icons-material/ArrowOutward";

const LINKS = [
  {text: "About us", href: "/about-us"},
  {text: "Services", href: "/services"},
  {text: "Portfolio", href: "/portfolio"},
  {text: "Contact Us", href: "/contact-us"},
];

const Navbar = () => {
  const [scroll, setScroll] = useState(false);

  const theme = useTheme();
  const matchesSM = useMediaQuery(theme.breakpoints.down("sm"));
  const matchesMd = useMediaQuery(theme.breakpoints.down("md"));
  const [drawerOpen, setDrawerOpen] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      setScroll(window.scrollY > 100);
    });
  }, []);

  const toggleDrawer = () => {
    setDrawerOpen(!drawerOpen);
  };

  const NavAppBar = styled(AppBar)({
    position: "fixed",
    color: "white",
    background: scroll ? "rgba( 21, 20, 20, 0.35 )" : "transparent",
    boxShadow: scroll ? "0px 0px" : "0px 0px",
    backdropFilter: scroll ? "blur( 18.5px )" : "blur( 0px )",
    padding: "0",
    minHeight: "auto",
    height: "auto",
    transition: "0.3s all",
  });

  const NavToolbar = styled(Toolbar)({
    padding: "25px !important",
    minHeight: "auto",
    position: "relative",
    backgroundColor: "transparent",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    maxWidth: "1370px",
    flexWrap: "nowrap",
    width: "100%",
    margin: "auto",
  });

  return (
    <NavAppBar>
      <NavToolbar
        sx={{
          px: {
            lg: "60px !important",
            md: "30px !important",
            xs: "15px !important",
          },
        }}
      >
        <Box sx={{display: "flex", alignItems: "center"}}>
          <Box component={Link} href={"/"}>
            <Image
              className="brand-logo"
              src="/assets/images/logo.png"
              width={121}
              height={61}
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
            gap: "55px",
          }}
        >
          {LINKS.map(({text, href}, index) => (
            <ListItem
              key={index}
              sx={{
                width: "auto",
                p: 0,
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
                    borderBottom: "1px solid transparent",
                    "&:hover": {
                      borderBottom: "1px solid white",
                    },
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
            p: {
              md: "7px 32px",
              xs: "7px 28px",
            },
            fontSize: matchesMd ? "14px" : "18px",
            fontWeight: matchesSM ? 200 : 400,
            marginLeft: 2,
            ml: matchesMd ? "-7px" : 0,
            display: {xs: "none", md: "flex"},
            borderRadius: "6px",
            background:
              "linear-gradient(88deg, #DD2C00 -9.17%, #FF3F00 67.35%, #FA9D04 130.66%)",
            textTransform: "capitalize",
          }}
          endIcon={
            <ArrowOutwardIcon
              sx={{
                ml: "10px",
              }}
            />
          }
        >
          Get Started
        </Button>
      </NavToolbar>
      <Drawer anchor="top" open={drawerOpen} onClose={toggleDrawer}>
        <Box sx={{width: "100%"}}>
          <Box
            sx={{
              textAlign: "right",
            }}
          >
            <HighlightOffIcon
              sx={{
                m: "25px",
                cursor: "pointer",
              }}
              fontSize="large"
              onClick={toggleDrawer}
            />
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
    </NavAppBar>
  );
};

export default Navbar;
