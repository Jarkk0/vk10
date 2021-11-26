import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import { Link as RouterLink } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import { Suspense } from 'react';


export default function Header() {
    const { t, i18n } = useTranslation();
    const changeLanguage = (lng) => {
      i18n.changeLanguage(lng);
    }

    return (
      <Suspense fallback= "perkele">
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
                
              <Button component={RouterLink} to="/" color="inherit">{t('Home')}</Button>
              <Button component={RouterLink} to="/about" color="inherit">{t('About')}</Button>
              <Button onClick={() => changeLanguage('en')} color="inherit">EN</Button>
              <Button onClick={() => changeLanguage('fi')} color="inherit">FI</Button>
            </Toolbar>
          </AppBar>
        </Box>
      </Suspense>  
      );
}

