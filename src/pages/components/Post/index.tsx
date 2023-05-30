import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import MapsUgcOutlinedIcon from '@mui/icons-material/MapsUgcOutlined';
import { Box, Button, IconButton, Typography } from '@mui/material';

import placeholder from '../../../assets/img/placeholderImg.svg';

export const Post = (props: any) => {
  const { location, tags } = props;
  return (
    <Box
      sx={{
        backgroundColor: '#FFFDF9',
        width: '320px',
        borderRadius: '8px',
        height: '270px',
        display: 'flex',
        flexDirection: 'column',
        padding: '32px',
        justifyContent: 'center',
        gap: '10px',
      }}
    >
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'row',
          alignItems: 'center',
          gap: '24px',
          justifyContent: 'flex-start',
        }}
      >
        <AccountCircleIcon sx={{ color: '#D9B1B1' }} />
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'flex-end',
          }}
        >
          <Typography variant="subtitle2" align="center">
            Título do post
          </Typography>
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'row',
              width: '100px',
            }}
          >
            <Button size="small">
              <Typography
                variant="caption"
                sx={{ color: '#C96144' }}
                display="block"
                gutterBottom
              >
                {location}
              </Typography>
            </Button>
            <Button size="small">
              <Typography
                variant="caption"
                display="block"
                sx={{ color: '#C96144' }}
                gutterBottom
              >
                {tags}
              </Typography>
            </Button>
          </Box>
        </Box>
      </Box>
      <Box style={{ display: 'flex', flexDirection: 'row', gap: '16px' }}>
        <img style={{ width: '110px' }} src={placeholder} alt="placeholder" />
        <img style={{ width: '110px' }} src={placeholder} alt="placeholder" />
      </Box>
      <Box sx={{ width: '250px' }}>
        <Typography variant="caption" display="block" gutterBottom>
          quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
          consequat
        </Typography>
      </Box>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'row',
          alignItems: 'center',
          gap: '16px',
        }}
      >
        <IconButton size="small" color="primary">
          <FavoriteBorderIcon sx={{ color: '#D9B1B1' }} />
        </IconButton>
        <IconButton size="small" color="primary">
          <MapsUgcOutlinedIcon sx={{ color: '#D9B1B1' }} />
        </IconButton>
      </Box>
    </Box>
  );
};
