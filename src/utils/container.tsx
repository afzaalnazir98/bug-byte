import {Box} from "@mui/material";

export default function Container({children}: {children: React.ReactNode}) {
  return (
    <Box
      sx={{
        maxWidth: "1250px",
        m: "auto",
      }}
    >
      {children}
    </Box>
  );
}
