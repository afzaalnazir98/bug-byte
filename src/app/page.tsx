import * as React from 'react';
import Box from '@mui/material/Box';
import Unity from './unity/page';




export default function HomePage() {
  return (
    <Box  sx={{
      background: 'linear-gradient(111deg, rgba(70, 28, 2, 0.60) -0.08%, rgba(0, 0, 0, 0.97) 100%), linear-gradient(111deg, rgba(88, 35, 2, 0.60) -0.08%, rgba(0, 0, 0, 0.97) 100%)',
     
    }}>

<Unity/>



    </Box>
    
  );
}