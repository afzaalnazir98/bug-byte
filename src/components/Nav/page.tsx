"use client";

import * as React from "react";
import Link from "next/link";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import Button from "@mui/material/Button";
import Drawer from "@mui/material/Drawer";
import {useTheme} from "@material-ui/core/styles";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import Logo1 from "@/public/assets/images/logo-img.png";
import {useMediaQuery} from "@mui/material";

const LINKS = [
  {text: "AboutUs", href: "/about"},
  {text: "Services", href: "/services"},
  {text: "Portfolio", href: "/portfolio"},
  {text: "ContactUs", href: "/contact"},
];

const Page = () => {
  const theme = useTheme();
  const matchesSM = useMediaQuery(theme.breakpoints.down("sm"));
  const matchesXS = useMediaQuery(theme.breakpoints.down("xs"));
  const matchesMd = useMediaQuery(theme.breakpoints.down("md"));
  const matcheslg = useMediaQuery(theme.breakpoints.down("lg"));
  const [drawerOpen, setDrawerOpen] = React.useState(false);

  const toggleDrawer = () => {
    setDrawerOpen(!drawerOpen);
  };

  return (
    <Box sx={{background: "white"}}>
      <AppBar
        position="fixed"
        sx={{
          zIndex: 2000,
        }}
      >
        <Toolbar
          sx={{
            backgroundColor: "background.paper",
            display: "flex",
            alignItems: "center",
            justifyContent: "end",
          }}
        >
          <Box sx={{display: "flex", alignItems: "center", mr: "auto"}}>
            <img
              src={Logo1.src}
              style={{
                transform: "translateY(-2px)",
                height: matchesSM ? "70px" : "",
              }}
            />
          </Box>
          <Box sx={{display: {xs: "block", md: "none"}}}>
            <IconButton color="default" onClick={toggleDrawer} edge="start">
              <MenuIcon />
            </IconButton>
          </Box>
          <Box
            sx={{
              display: {xs: "none", md: "flex"},
              alignItems: "center",
            }}
          >
            {LINKS.map(({text, href}) => (
              <ListItem key={href}>
                <ListItemButton component={Link} href={href}>
                  <ListItemText
                    primary={text}
                    sx={{
                      color: "black",
                      fontSize: "18px",
                      fontWeight: 400,
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
          <Box sx={{width: 500, mt: "90px"}}>
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
                background:
                  "linear-gradient(95deg, #F04B12 1.59%, #FC8C46 100%)",
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
    </Box>
  );
};

export default Page;
