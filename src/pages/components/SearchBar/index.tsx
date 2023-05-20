import { SearchOutlined } from '@mui/icons-material';
import { Box, Button } from '@mui/material';

import { SearchInput } from '../SearchInput';

export const SearchBar = () => {
  return (
    <Box>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'row',
          alignItems: 'center',
          //   gap: '16px',
        }}
      >
        <SearchInput />
        <Button>
          <SearchOutlined sx={{ color: '#C96144' }} />
        </Button>
      </Box>
      <Box>
        <Button sx={{ color: '#C96144' }}>Egito</Button>
        <Button sx={{ color: '#C96144' }}>Itália</Button>
        <Button sx={{ color: '#C96144' }}>Manaus</Button>
      </Box>
    </Box>
  );
};
