import * as React from 'react';
import Link from 'next/link';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import DashboardIcon from '@mui/icons-material/Dashboard';
import HomeIcon from '@mui/icons-material/Home';
import StarIcon from '@mui/icons-material/Star';
import ChecklistIcon from '@mui/icons-material/Checklist';
import ThemeRegistry from '@/components/ThemeRegistry/ThemeRegistry';

export const metadata = {
  title: 'Next.js App Router + Material UI v5',
  description: 'Next.js App Router + Material UI v5',
};

const LINKS = [
  { text: 'Home', href: '/', icon: HomeIcon },
  { text: 'Starred', href: '/starred', icon: StarIcon },
  { text: 'Tasks', href: '/tasks', icon: ChecklistIcon },
];

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <ThemeRegistry>
          {/* <AppBar position="fixed" sx={{ zIndex: 2000 }}>
            <Toolbar sx={{ backgroundColor: 'background.paper' }}>
              <DashboardIcon sx={{ color: '#444', mr: 2, transform: 'translateY(-2px)' }} />
              <Typography
                variant="h6"
                color="text.primary"
                sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }}
              >
                Next.js App Router
              </Typography>
              <Box sx={{ display: { xs: 'none', sm: 'flex' } }}>
              {LINKS.map(({ text, href, icon: Icon }) => (
                <ListItem key={href} disablePadding>
                  <ListItemButton component={Link} href={href}>
                    <ListItemIcon>
                      <Icon />
                    </ListItemIcon>
                    <ListItemText primary={text} sx={{
                      color: 'black'
                    }} />
                  </ListItemButton>
                </ListItem>
              ))}
          </Box>
            </Toolbar>
          </AppBar> */}
          <Box
            component="main"
            sx={{
              flexGrow: 1,
              bgcolor: 'background.default',
             
            }}
          >
            {children}
          </Box>
        </ThemeRegistry>
      </body>
    </html>
  );
}