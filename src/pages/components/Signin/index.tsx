import { Box, Button, Container, Stack, TextField, Typography } from '@mui/material';
import { useState } from 'react';

import { validateEmail, validatePassword } from '../../../middlewares';

export const SignIn = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [submit, setSubmit] = useState({ email: null, password: null });

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
    }
  };

  return (
    <Container
      sx={{
        display: 'flex',
        height: '100vh',
      }}
    >
      <Box
        sx={{
          width: 500,
          margin: 'auto',
          padding: '64px 32px',
          borderRadius: '8px',
          boxShadow: 5,
          backgroundColor: '#FFFFFF',
        }}
      >
        <Typography variant="h4" align="center" sx={{ marginBottom: '64px' }}>
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
            <Box sx={{ width: '80%', margin: 'auto' }}>
              <Stack spacing={{ xs: 4, sm: 8 }} direction="column" useFlexGap>
                <Button
                  sx={{ width: '200px', margin: 'auto' }}
                  onClick={handleSubmit}
                  variant="contained"
                >
                  Cadastrar
                </Button>
              </Stack>
            </Box>
          </Stack>
        </Box>
      </Box>
    </Container>
  );
};
