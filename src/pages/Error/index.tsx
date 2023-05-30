import { Box, Typography } from '@mui/material';

import error from '../../assets/img/errorImg.svg';

export const Error = () => {
  return (
    <Box
      sx={{
        display: 'flex',
        gap: '32px',
        backgroundColor: '#E8E2E2',
        height: '100vh',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <Typography variant="h4" display="block" gutterBottom>
        Acho que você <br /> se perdeu pelo caminho...
      </Typography>
      <Box>
        <img style={{ width: '224px' }} src={error} alt="logo" />
      </Box>
    </Box>
  );
};
