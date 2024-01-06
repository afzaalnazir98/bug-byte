"use client";

import * as React from "react";
import {
  Typography,
  Box,
  TextField,
  Button,
  Select,
  MenuItem,
  FormControl,
  InputLabel,
} from "@mui/material";

import callSvg from "@/public/assets/images/call.svg";
import magBoxSvg from "@/public/assets/images/message.svg";
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
    <Box
      sx={{
        backgroundColor: "#F5F5F5",
        padding: "10rem 0px",
      }}
    >
      <Container>
        <Box
          sx={{
            display: "flex",
            flexDirection: { xs: "column", lg: "row" },
            justifyContent: { xs: "center", lg: "space-between" },
            alignItems: "center",
            gap: { xs: "10rem", lg: "0rem" },
          }}
        >
          <Box
            sx={{
              paddingLeft: { xs: "15px", md: "30px", lg: "60px" },
              alignSelf: "center",
            }}
          >
            <Box
              sx={{
                maxWidth: "380px",
              }}
            >
              <Typography
                sx={{
                  color: "#F03E18",
                  fontSize: "22px",
                  fontWeight: 400,
                  letterSpacing: "0.44px",
                  textTransform: "uppercase",
                  maxWidth: "380px",
                }}
              >
                Have Questions?
              </Typography>
              <Typography
                sx={{
                  color: "#05111C",
                  fontSize: "42px",
                  fontWeight: 700,
                  textTransform: "uppercase",
                  marginTop: "15px",
                }}
              >
                We'd Love To Hear From You
              </Typography>
            </Box>

            <Box
              sx={{
                marginTop: "44px",
              }}
            >
              <Typography
                sx={{
                  color: "#05111C",
                  fontSize: "18px",
                  fontWeight: 400,
                  lineHeight: "124%",
                  maxWidth: "540px",
                }}
              >
                Please fill out the form and let us know about your concerns.We
                will try our best to provide optimized solutions.
              </Typography>
              <Box
                sx={{
                  marginTop: "30px",
                }}
              >
                <Box
                  sx={{
                    display: "flex",
                    gap: "10px",
                    alignItems: "center",
                  }}
                >
                  <Image src={callSvg} alt="call-icon" width={50} height={50} />
                  <Typography
                    sx={{
                      color: "#06111C",
                      fontSize: "18px",
                      fontWeight: 600,
                    }}
                  >
                    +(2) 578 - 365 - 379
                  </Typography>
                </Box>
                <Box
                  sx={{
                    display: "flex",
                    gap: "10px",
                    alignItems: "center",
                    marginTop: "23px",
                  }}
                >
                  <Image
                    src={magBoxSvg}
                    alt="call-icon"
                    width={50}
                    height={50}
                  />
                  <Typography
                    sx={{
                      color: "#06111C",
                      fontSize: "18px",
                      fontWeight: 600,
                    }}
                  >
                    Hello@example.com
                  </Typography>
                </Box>
              </Box>
            </Box>
          </Box>

          <Box
            sx={{
              minWidth: { xs: "100%", md: "687px" },
              minHeight: { xs: "100%", sm: "655px" },
              backgroundImage: `url(${"/assets/images/question-form-bg.png"})`,
              backgroundSize: "contain",
              backgroundRepeat: "no-repeat",
            }}
          >
            <Box
              sx={{
                marginLeft: "13%",
                marginTop: "22%",
                maxWidth: { xs: "66%", sm: "420px", lg: "450px" },
                height: "100%",
                backgroundColor: "#0B1D30",
                padding: { xs: "8px 15px", sm: "10px 20px", md: "20px 32px" },
                borderRadius: "8px",
                "& .MuiInputBase-root": {
                  borderRadius: "10px",
                  border: "1px solid white",
                },
                "& .MuiOutlinedInput-root": {
                  "&.Mui-focused fieldset": {
                    borderColor: "white",
                    color: "white",
                  },
                },
                "& .MuiInputBase-input": {
                  color: "white",
                },
                "& .MuiInputLabel-root": {
                  color: "white",
                },
                "& label.Mui-focused": {
                  color: "white",
                },
              }}
            >
              <Box
                component={"form"}
                sx={{
                  display: "grid",
                  borderRadius: "8px",
                  paddingBottom: "10px",
                }}
                onSubmit={(e) => handleSubmit(e)}
              >
                <TextField
                  label="Name"
                  variant="outlined"
                  fullWidth
                  margin="normal"
                  required
                  onChange={(e) =>
                    setFormData({ ...formData, name: e.target.value })
                  }
                />
                <TextField
                  label="Email"
                  variant="outlined"
                  fullWidth
                  margin="normal"
                  required
                  type="email"
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                />
                <FormControl
                  variant="outlined"
                  fullWidth
                  margin="normal"
                  required
                >
                  <InputLabel id="service-label">Service</InputLabel>
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
                <TextField
                  label="Enter Message"
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
                    borderRadius: "10px",
                    background:
                      "linear-gradient(88deg, #DD2C00 -9.17%, #FF3F00 67.35%, #FA9D04 130.66%)",
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
            </Box>
          </Box>
        </Box>
      </Container>
    </Box>
  );
}
