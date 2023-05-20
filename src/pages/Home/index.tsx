import { Box, Typography } from '@mui/material';

import logo from '../../assets/img/logoMain.png';
import { Menu } from '../components/Menu';
import { Post } from '../components/Post';
import { SearchBar } from '../components/SearchBar';

export default function Home() {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'row',
        gap: '32px',
        backgroundColor: '#E8E2E2',
      }}
    >
      <Menu />
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          width: '100%',
          alignItems: 'center',
          gap: '100px',
        }}
      >
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
            width: '80%',
            justifyContent: 'space-between',
            paddingTop: '32px',
          }}
        >
          <Box>
            <img style={{ width: '224px' }} src={logo} alt="logo" />
          </Box>
          <SearchBar />
        </Box>
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'row',
            gap: '30px',
            maxWidth: '90%',
            flexWrap: 'wrap',
          }}
        >
          <Post location="Egito" tags="Vestimenta" />
          <Post location="Manaus" tags="Clima" />
          <Post location="Itália" tags="Segurança" />
          <Post location="Bahia" tags="Transporte" />
          <Post location="Japão" tags="Docs" />
        </Box>
      </Box>
    </Box>
  );
}
