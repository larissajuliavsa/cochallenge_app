import { Home, Map, UsbRounded } from '@mui/icons-material';
import GroupIcon from '@mui/icons-material/Group';
import PersonIcon from '@mui/icons-material/Person';
import PlaceIcon from '@mui/icons-material/Place';
import SettingsIcon from '@mui/icons-material/Settings';
import { Box, Button, IconButton } from '@mui/material';
import React from 'react';
export const Menu = () => {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        gap: '100px',
        height: '100vh',
        backgroundColor: '#FFFFFF',
        width: '100px',
        borderRadius: '0px 8px 8px 0px',
      }}
    >
      <IconButton>
        <Home sx={{ color: '#C96144' }} />
      </IconButton>
      <IconButton>
        <PlaceIcon sx={{ color: '#C96144' }} />
      </IconButton>
      <IconButton>
        <PersonIcon sx={{ color: '#C96144' }} />
      </IconButton>
      <IconButton>
        <GroupIcon sx={{ color: '#C96144' }} />
      </IconButton>
      <IconButton>
        <SettingsIcon sx={{ color: '#C96144' }} />
      </IconButton>
    </Box>
  );
};
