"use client";

import * as React from "react";
import {
  Box,
  TextField,
  Button,
  Select,
  MenuItem,
  FormControl,
  InputLabel,
} from "@mui/material";
import {FormData} from "@/utils/types";

export default function ContactForm() {
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
        minWidth: {xs: "100%", md: "687px"},
        minHeight: {xs: "100%", sm: "655px"},
        backgroundImage: `url(${"/assets/images/question-form-bg.png"})`,
        backgroundSize: "contain",
        backgroundRepeat: "no-repeat",
      }}
    >
      <Box
        sx={{
          marginLeft: "13%",
          marginTop: "22%",
          maxWidth: {xs: "66%", sm: "420px", lg: "450px"},
          height: "100%",
          backgroundColor: "#0B1D30",
          padding: {xs: "8px 15px", sm: "10px 20px", md: "20px 32px"},
          borderRadius: "8px",
          "& .MuiInputBase-root": {
            borderRadius: "10px",
            border: "1px solid white",
          },
          "& .mui-sm7gn3-MuiInputBase-root-MuiOutlinedInput-root": {
            padding: {
              xs: "8.5px 6px",
              sm: "14.5px 12px",
              md: "16.5px 14px",
            },
          },
          "& .MuiOutlinedInput-root": {
            "&.Mui-focused fieldset": {
              borderColor: "white",
              color: "white",
            },
          },
          "& .MuiInputBase-input": {
            color: "white",
            padding: {xs: "12.5px 10px", sm: ""},
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
            "& .input-field": {
              marginTop: {xs: "9px", sm: "16px"},
              marginBottom: {xs: "4px", sm: "8px"},
            },
          }}
          onSubmit={(e) => handleSubmit(e)}
        >
          <TextField
            className="input-field"
            label="Name"
            variant="outlined"
            fullWidth
            margin="normal"
            required
            onChange={(e) => setFormData({...formData, name: e.target.value})}
          />
          <TextField
            className="input-field"
            label="Email"
            variant="outlined"
            fullWidth
            margin="normal"
            required
            type="email"
            onChange={(e) => setFormData({...formData, email: e.target.value})}
          />
          <FormControl
            className="input-field"
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
            className="input-field"
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
              background:
                "linear-gradient(88deg, #DD2C00 -9.17%, #FF3F00 67.35%, #FA9D04 130.66%)",
              marginTop: {xs: "10px", sm: "15px"},
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
  );
}
