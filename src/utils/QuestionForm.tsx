"use client";

import * as React from "react";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import {makeStyles, useTheme} from "@material-ui/core/styles";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import {
  Box,
  TextField,
  Button,
  Select,
  MenuItem,
  FormControl,
  InputLabel,
  FormLabel,
} from "@mui/material";

import callSvg from "@/public/assets/call.svg";
import magBoxSvg from "@/public/assets/msg.svg";
import Image from "next/image";
import { Label } from "@mui/icons-material";

interface FormData {
  name: string;
  email: string;
  service: string;
  message: string;
}

const useStyles = makeStyles((theme) => ({
  hero_image: {
    width: "370px",
    [theme.breakpoints.down("sm")]: {
      width: "250px",
    },
  },
  centerTest: {
    marginTop: "5rem",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "start",
  },
  form: {
    borderRadius: "8px",
    width: "100%",
    ml: 8,
    marginTop: "1rem",
  },
}));

export default function QuestionForm(): JSX.Element {
  const classes = useStyles();
  const theme = useTheme();
  const matchesXS = useMediaQuery(theme.breakpoints.down("xs"));
  const [formData, setFormData] = React.useState<FormData>({
    name: "",
    email: "",
    service: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    console.log("Form Data:", formData);
    console.log("Contact Form submitted");
  };

  return (
    <Grid container maxWidth={"1250px"}>
      <Grid item className={classes.centerTest} sm={12} md={6}>
        <Typography
          variant="body1"
          sx={{
            color: "#F86910",
            textShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
            fontSize: "22px",
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
            fontSize: "42px",
            fontWeight: 700,
            lineHeight: "85%",
            letterSpacing: "0.84px",
            textTransform: "uppercase",
            mt: 3,
          }}
        >
          We'd Love To Hear {matchesXS ? "" : <br />} From You
        </Typography>
        <Typography
          variant="body1"
          sx={{
            fontSize: "18px",
            fontStyle: "normal",
            fontWeight: 400,
            lineHeight: "120%",
            mt: 5,
          }}
        >
          Please fill out the form and let us know about your concerns.We will{" "}
          {matchesXS ? "" : <br />}
          try our best to provide optimized solutions.
        </Typography>

        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            mt: 3,
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
            mt: 3,
          }}
        >
          <Image src={magBoxSvg.src} width={50} height={50} alt="inbox-image" />
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
          marginTop: {xs: "2rem", sm: "2rem", md: "5rem"},
          mb: 3,
          maxWidth: "450px",
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
        sm={12}
        md={6}
      >
        <form className={classes.form} onSubmit={(e) => handleSubmit(e)}>
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
            onChange={(e) => setFormData({...formData, email: e.target.value})}
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
            }}
            type="submit"
            variant="contained"
            fullWidth
          >
            Send
          </Button>
        </form>
      </Grid>
    </Grid>
  );
}
