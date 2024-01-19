"use client";

import * as React from "react";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import {
  Box,
  TextField,
  Button,
  Select,
  MenuItem,
  FormControl,
  FormLabel,
  Divider,
} from "@mui/material";

import location from "@/public/assets/images/location.svg";
import watch from "@/public/assets/images/watch.svg";
import phone from "@/public/assets/images/phone.svg";
import message from "@/public/assets/images/msgSmall.svg";
import facebook from "@/public/assets/social-media-icons/facebook.svg";
import insta from "@/public/assets/social-media-icons/insta.svg";
import linkdin from "@/public/assets/social-media-icons/linkdin.svg";
import X from "@/public/assets/social-media-icons/X.svg";
import Image from "next/image";
import { FormData } from "@/utils/types";
import Container from "../container";

export default function ContactFormSection(): JSX.Element {
  const [formData, setFormData] = React.useState<FormData>({
    name: "",
    email: "",
    service: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
  };

  return (
    <Box
      sx={{
        background: "#fff",
      }}
    >
      <Container>
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "column",
            textAlign: "center",
          }}
        >
          <Typography
            variant="body1"
            sx={{
              fontSize: "20px",
              fontWeight: 600,
              marginTop: "100px",
              color: "#0A1928",
            }}
          >
            Have Questions?
          </Typography>
          <Typography
            variant="h1"
            sx={{
              fontSize: {xs: "24px", sm: "36px"},
              fontWeight: {xs: 500, sm: 700},
              lineHeight: "41px",
              background:
                "var(--Main-Color, linear-gradient(88deg, #DD2C00 -9.17%, #FF3F00 67.35%, #FA9D04 130.66%))",
              backgroundClip: "text",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            What Are You Looking For ? <br /> Contact us
          </Typography>
        </Box>
        <Grid
          container
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: "20px",
            background: "#fff",
            padding: "0 0 160px 0",
            marginTop: "-1px",
          }}
        >
          <Grid
            item
            sx={{
              display: "flex",
              alignItems: "start",
              flexDirection: "column",
              background: "#0B1D30",
              paddingInline: {xs: "1rem", sm: "2rem"},
              height: {sm: "700px", md: "760.371px"},
              marginTop: {xs: "2rem", sm: "2rem", md: "5rem"},
              mb: 3,
              marginLeft: { xs: "20px", sm: "50px", md: 0 },
              marginRight: { xs: "20px", sm: "50px", md: 0 },
              borderRadius: "10px",
              "& .MuiFormLabel-root": {
                color: "#FFFFFF",
              },
              "& .MuiInputBase-root": {
                borderRadius: "10px",
                border: "1px solid #333",
                borderColor: "#fff",
              },
              "& .MuiOutlinedInput-root": {
                "&.Mui-focused fieldset": {
                  borderColor: "#fff",
                },
              },
              "& label.Mui-focused": {
                color: "#F86910",
              },
              "& input": {
                color: "white",
              },
              "& .MuiInputBase-input": {
                color: "white",
              },
              "& .MuiSelect-icon": {
                color: "white", // Set your desired color for the icon
              },
            }}
            xs={12}
            sm={12}
            md={6.3}
          >
            <FormLabel
              sx={{
                fontSize: {xs: "26px", sm: "32px"},
                fontWeight: {xs: 500, sm: 700},
                lineHeight: {xs: "20.4px", sm: "38.4px"},
                color: "#fff",
                textTransform: "capitalize",
                marginTop: {xs: "1rem", sm: "3rem"},
              }}
            >
              {" "}
              Write A Message
            </FormLabel>
            <form
              style={{
                borderRadius: "8px",
                width: "100%",
                marginTop: "1.5rem",
              }}
              onSubmit={(e) => handleSubmit(e)}
            >
              <FormLabel
                sx={{
                  fontSize: "18px",
                  fontWeight: 500,
                  lineHeight: {xs: "20px", sm: "24px"},
                }}
              >
                {" "}
                Name
              </FormLabel>
              <TextField
                variant="outlined"
                fullWidth
                margin="normal"
                required
                onChange={(e) =>
                  setFormData({ ...formData, name: e.target.value })
                }
              />
              <FormLabel
                sx={{
                  fontSize: "18px",
                  fontWeight: 500,
                  lineHeight: "24px",
                }}
              >
                {" "}
                Email
              </FormLabel>
              <TextField
                variant="outlined"
                fullWidth
                margin="normal"
                required
                type="email"
                onChange={(e) =>
                  setFormData({ ...formData, email: e.target.value })
                }
              />

              <FormLabel
                sx={{
                  fontSize: "18px",
                  fontWeight: 500,
                  lineHeight: "24px",
                }}
              >
                {" "}
                Service
              </FormLabel>
              <FormControl
                variant="outlined"
                fullWidth
                margin="normal"
                required
              >
                <Select
                  label="Service"
                  labelId="service-label"
                  id="service"
                  value={formData.service}
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      service: e.target.value as string,
                    })
                  }
                >
                  <MenuItem value="service1">Service 1</MenuItem>
                  <MenuItem value="service2">Service 2</MenuItem>
                </Select>
              </FormControl>

              <FormLabel
                sx={{
                  fontSize: "18px",
                  fontWeight: 500,
                  lineHeight: "24px",
                }}
              >
                {" "}
                Leave us a message
              </FormLabel>

              <TextField
                variant="outlined"
                multiline
                rows={4}
                fullWidth
                margin="normal"
                required
                onChange={(e) =>
                  setFormData({ ...formData, message: e.target.value })
                }
              />
              <Button
                sx={{
                  mt: 2,
                  mb: { xs: 2, sm: 4 },
                  borderRadius: "5px",
                  width: { xs: "100%", sm: "167px" },
                  height: "48px",
                  fontSize: "18px",
                  fontWeight: 600,
                  background:
                    "linear-gradient(90deg, #F04B12 0%, #FB8843 100%)",
                }}
                type="submit"
                variant="contained"
              >
                Send Message
              </Button>
            </form>
          </Grid>
          <Grid
            item
            sx={{
              display: "flex",
              alignItems: "start",
              flexDirection: "column",
              background: "#0B1D30",
              paddingInline: { xs: "1rem", sm: "2rem" },
              marginTop: { xs: "1rem", sm: "2rem", md: "5rem" },
              mb: 3,
              height: { sm: "700px", md: "760.371px" },
              borderRadius: "10px",
              color: "#fff",
              marginLeft: { xs: "20px", sm: "50px", md: 0 },
              marginRight: { xs: "20px", sm: "50px", md: 0 },
            }}
            xs={12}
            sm={12}
            md={5.3}
          >
            <Typography
              sx={{
                fontSize: { xs: "26px", sm: "32px" },
                fontWeight: { xs: 500, sm: 600 },
                lineHeight: "38.4px",
                textTransform: "capitalize",
                marginTop: { xs: "1rem", sm: "3rem" },
              }}
            >
              {" "}
              Get in Touch
            </Typography>
            <Divider
              sx={{
                my: { xs: "1rem", sm: "1.5rem", md: "2.1rem" },
                width: "100%",
                strokeWidth: "0.5px",
                border: "1px #C8C8C8 solid",
              }}
            />

            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                marginLeft: "20px",
              }}
            >
              <Image src={location.src} width={18} height={24} alt="location" />
              <Box sx={{ marginLeft: "37px" }}>
                <Typography
                  variant="body1"
                  sx={{
                    fontSize: { xs: "18px", sm: "22px" },
                    fontWeight: { xs: 500, sm: 600 },
                  }}
                >
                  Location
                </Typography>
                <Typography
                  variant="body1"
                  sx={{
                    fontSize: { xs: "16px", sm: "18px" },
                    fontWeight: 400,
                  }}
                >
                  Al. Brucknera Aleksandra 63, Wrocław 51-410
                </Typography>
              </Box>
            </Box>
            <Divider
              sx={{
                my: { xs: "1rem", sm: "1.5rem", md: "2.1rem" },
                width: "100%",
                strokeWidth: "0.5px",
                border: "1px #C8C8C8 solid",
              }}
            />

            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                marginLeft: "20px",
              }}
            >
              <Image src={message.src} width={24} height={24} alt="location" />
              <Box sx={{ marginLeft: "37px" }}>
                <Typography
                  variant="body1"
                  sx={{
                    fontSize: { xs: "18px", sm: "22px" },
                    fontWeight: { xs: 500, sm: 600 },
                  }}
                >
                  Email Address
                </Typography>
                <Typography
                  variant="body1"
                  sx={{
                    fontSize: { xs: "16px", sm: "18px" },
                    fontWeight: 400,
                  }}
                >
                  Example@gmail.com
                </Typography>
              </Box>
            </Box>
            <Divider
              sx={{
                my: { xs: "1rem", sm: "1.5rem", md: "2.1rem" },
                width: "100%",
                strokeWidth: "0.5px",
                border: "1px #C8C8C8 solid",
              }}
            />

            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                marginLeft: "20px",
              }}
            >
              <Image src={phone.src} width={26} height={24} alt="location" />
              <Box sx={{ marginLeft: "37px" }}>
                <Typography
                  variant="body1"
                  sx={{
                    fontSize: { xs: "18px", sm: "22px" },
                    fontWeight: { xs: 500, sm: 600 },
                  }}
                >
                  Phone Number
                </Typography>
                <Typography
                  variant="body1"
                  sx={{
                    fontSize: { xs: "16px", sm: "18px" },
                    fontWeight: 400,
                  }}
                >
                  (302) 555-0107 (704) 555-0127
                </Typography>
              </Box>
            </Box>
            <Divider
              sx={{
                my: { xs: "1rem", sm: "1.5rem", md: "2.1rem" },
                width: "100%",
                strokeWidth: "0.5px",
                border: "1px #C8C8C8 solid",
              }}
            />

            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                marginLeft: "20px",
              }}
            >
              <Image src={watch.src} width={24} height={24} alt="location" />
              <Box sx={{ marginLeft: "37px" }}>
                <Typography
                  variant="body1"
                  sx={{
                    fontSize: { xs: "18px", sm: "22px" },
                    fontWeight: { xs: 500, sm: 600 },
                  }}
                >
                  Working Hours
                </Typography>
                <Typography
                  variant="body1"
                  sx={{
                    fontSize: { xs: "16px", sm: "18px" },
                    fontWeight: 400,
                  }}
                >
                  Mon-Fri: 09: 00-18: 00 Sat-Sun: Weekend
                </Typography>
              </Box>
            </Box>

            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                marginTop: { xs: "2rem", sm: "3.5rem" },
                width: "100%",
                gap: "27px",
                mb: 10,
              }}
            >
              <Image src={facebook.src} width={35} height={35} alt="facebook" />
              <Image src={insta.src} width={35} height={35} alt="instagram" />
              <Image src={linkdin.src} width={35} height={35} alt="linkedIn" />
              <Image src={X.src} width={35} height={35} alt="X" />
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
