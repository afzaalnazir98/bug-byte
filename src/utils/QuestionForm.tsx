"use client";

import * as React from "react";
import {
  Typography,
  Grid,
  Box,
  TextField,
  Button,
  Select,
  MenuItem,
  FormControl,
  InputLabel,
} from "@mui/material";

import callSvg from "@/public/assets/images/call.svg";
import magBoxSvg from "@/public/assets/images/msg.svg";
import Image from "next/image";
import Container from "../components/container";

interface FormData {
  name: string;
  email: string;
  service: string;
  message: string;
}

export default function QuestionFormComponent() {
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
    <Container>
      <Grid container sx={{gap: {sm: "90px"}}}>
        <Grid
          item
          sx={{
            marginTop: "5rem",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "start",
          }}
          xs={12}
          sm={5}
          md={6}
        >
          <Typography
            variant="body1"
            sx={{
              color: "#F86910",
              textShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
              fontSize: {xs: "18px", md: "22px"},
              fontWeight: 400,
              letterSpacing: "0.44px",
              textTransform: "uppercase",
            }}
          >
            Have Questions?
          </Typography>
          <Typography
            variant="h1"
            sx={{
              fontSize: {xs: "34px", md: "42px"},
              fontWeight: {xs: 500, md: 700},
              lineHeight: "1.2",
              letterSpacing: "0.84px",
              textTransform: "uppercase",
              color: "white",
              mt: {xs: 1, md: 3},
            }}
          >
            We&apos;d Love To Hear From You
          </Typography>
          <Typography
            variant="body1"
            sx={{
              fontSize: "18px",
              fontStyle: "normal",
              fontWeight: 400,
              lineHeight: "120%",
              color: "white",
              mt: {xs: 2, md: 5},
            }}
          >
            Please fill out the form and let us know about your concerns.We will{" "}
            try our best to provide optimized solutions.
          </Typography>

          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              color: "white",
              mt: {xs: 2, md: 3},
            }}
          >
            <Image src={callSvg.src} width={50} height={50} alt="inbox-image" />
            <Typography
              sx={{
                fontSize: "18px",
                fontWeight: 600,
                ml: 2,
              }}
            >
              +(2) 578 - 365 - 379
            </Typography>
          </Box>
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              mt: {xs: 1, md: 3},
              color: "white",
            }}
          >
            <Image
              src={magBoxSvg.src}
              width={50}
              height={50}
              alt="inbox-image"
            />
            <Typography
              sx={{
                ml: 2,
                fontSize: "18px",
                fontWeight: 600,
              }}
            >
              Hello@example.com
            </Typography>
          </Box>
        </Grid>

        <Grid
          item
          sx={{
            backgroundColor: "white",
            paddingInline: "2rem",
            marginTop: {xs: "2rem", md: "5rem"},
            mb: 3,
            marginLeft: {sm: "auto"},
            height: "520px",
            borderRadius: "8px",
            "& .MuiInputBase-root": {
              borderRadius: "10px",
              border: "1px solid #333",
            },
            "& .MuiOutlinedInput-root": {
              "&.Mui-focused fieldset": {
                borderColor: "#F86910",
              },
            },
            "& label.Mui-focused": {
              color: "#F86910",
            },
          }}
          xs={12}
          sm={5}
          md={4.5}
        >
          <Box
            component={"form"}
            sx={{
              borderRadius: "8px",
              width: "100%",
              marginTop: "1rem",
            }}
            onSubmit={(e) => handleSubmit(e)}
          >
            <TextField
              label="Name"
              variant="outlined"
              fullWidth
              margin="normal"
              required
              onChange={(e) => setFormData({...formData, name: e.target.value})}
            />
            <TextField
              label="Email"
              variant="outlined"
              fullWidth
              margin="normal"
              required
              type="email"
              onChange={(e) =>
                setFormData({...formData, email: e.target.value})
              }
            />
            <FormControl variant="outlined" fullWidth margin="normal" required>
              <InputLabel id="service-label">Service</InputLabel>
              <Select
                label="Service"
                labelId="service-label"
                id="service"
                value={formData.service}
                onChange={(e) =>
                  setFormData({...formData, service: e.target.value as string})
                }
              >
                <MenuItem value="service1">Service 1</MenuItem>
                <MenuItem value="service2">Service 2</MenuItem>
              </Select>
            </FormControl>
            <TextField
              label="Enter Message"
              variant="outlined"
              multiline
              rows={4}
              fullWidth
              margin="normal"
              required
              onChange={(e) =>
                setFormData({...formData, message: e.target.value})
              }
            />
            <Button
              sx={{
                borderRadius: "10px",
                background: "#F86910",
                mt: 2,
                height: "50.955px",
                fontSize: "18px",
                fontWeight: 600,
                "&:hover": {
                  backgroundColor: "#F86910",
                },
              }}
              type="submit"
              variant="contained"
              fullWidth
            >
              Send
            </Button>
          </Box>
        </Grid>
      </Grid>
    </Container>
  );
}
