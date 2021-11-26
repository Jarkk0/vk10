import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import { Link as RouterLink } from 'react-router-dom'

export default function Header() {
    return (
        <Box sx={{ flexGrow: 1 }}>
          <AppBar position="static">
            <Toolbar>
              <IconButton
                size="large"
                edge="start"
                color="inherit"
                aria-label="menu"
                sx={{ mr: 2 }}
              
              ></IconButton>
                
              <Button component={RouterLink} to="/" color="inherit">Home</Button>
              <Button component={RouterLink} to="/about" color="inherit">About</Button>
            </Toolbar>
          </AppBar>
        </Box>
      );
}
