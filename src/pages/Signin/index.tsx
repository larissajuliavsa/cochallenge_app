import { Box, Button, Container, Stack, TextField, Typography } from '@mui/material';
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

import logo from '../../assets/img/logoMain.png';
import { validateEmail, validatePassword } from '../../middlewares';

export const SignIn = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [submit, setSubmit] = useState({ email: null, password: null });
  const navigate = useNavigate();

  const handleEmail = async (event: any) => {
    setEmail(event.target.value);

    if (await validateEmail(event.target.value)) {
      setSubmit((prev) => ({ ...prev, email: event.target.value }));
    }
  };

  const handlePassword = async (event: any) => {
    setPassword(event.target.value);
    if (await validatePassword(event.target.value)) {
      setSubmit((prev) => ({ ...prev, password: event.target.value }));
    }
  };

  const handleSubmit = (event: any) => {
    event.preventDefault();

    if (!email && !password) {
      console.log('não entrar ainda');
    }
    if (submit.email !== null && submit.password !== null) {
      console.log('entrar no app');
      navigate('/home');
    }
  };

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        height: '100vh',
        backgroundColor: '#E8E2E2',
        alignItems: 'center',
        justifyContent: 'space-evenly',
      }}
    >
      <Box>
        <img style={{ width: '224px' }} src={logo} alt="logo" />
      </Box>
      <Box
        sx={{
          width: 500,
          padding: '64px 32px',
          borderRadius: '8px',
          boxShadow: 5,
          backgroundColor: '#FFFFFF',
        }}
      >
        <Typography
          variant="h4"
          align="center"
          sx={{ marginBottom: '64px', color: '#212121' }}
        >
          Login
        </Typography>
        <Box
          sx={{
            width: 300,
            margin: 'auto',
          }}
        >
          <Stack spacing={{ xs: 2, sm: 5 }} direction="column" useFlexGap flexWrap="wrap">
            <TextField
              required
              id="outlined-required"
              label="Email"
              onChange={handleEmail}
            />
            <TextField
              required
              id="outlined-required"
              type="password"
              label="Senha"
              onChange={handlePassword}
            />
            <Box
              sx={{
                width: '80%',
                margin: 'auto',
                display: 'flex',
                flexDirection: 'column',
                gap: '24px',
              }}
            >
              <Button
                sx={{ width: '200px', margin: 'auto' }}
                onClick={handleSubmit}
                variant="contained"
              >
                Entrar
              </Button>
              <Link style={{ width: '130px', margin: 'auto' }} to="/register">
                <Button
                  sx={{ width: '120px', margin: 'auto' }}
                  variant="outlined"
                  size="small"
                >
                  Criar conta
                </Button>
              </Link>
            </Box>
          </Stack>
        </Box>
      </Box>
    </Box>
  );
};
