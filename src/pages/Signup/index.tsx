import {
  Box,
  Button,
  Container,
  FormControlLabel,
  FormLabel,
  Radio,
  RadioGroup,
  Stack,
  TextField,
  Typography,
} from '@mui/material';
import { DatePicker } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DemoItem } from '@mui/x-date-pickers/internals/demo';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import dayjs from 'dayjs';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import logo from '../../assets/img/logoMain.png';
import { createRegisterHost, createRegisterUser } from '../../config/service';

export const SignUp = () => {
  const [name, setName] = useState('');
  const [lastname, setLastname] = useState('');
  const [birthDate, setBirthDate] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [userType, setUserType] = useState('user');
  const [submit, setSubmit] = useState({
    name: '',
    lastname: '',
    birthDate: '',
    email: '',
    password: '',
    userType: '',
    location: '',
    genre: '',
    sexualOrientation: '',
    isBooking: false,
  });
  const navigate = useNavigate();

  const handleName = (event: any) => {
    setName(event.target.value);
  };

  const handleLastname = (event: any) => {
    setLastname(event.target.value);
  };

  const formatDate = (value: string) => {
    const date = dayjs(value).format('DD/MM/YYYY');
    setBirthDate(date);
  };

  const validateEmail = (event: any) => {
    const emailRegex = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/;
    const isValidEmail = emailRegex.test(event.target.value);

    if (!isValidEmail) {
      console.error('Email inválido');
      return;
    }

    setEmail(event.target.value);
  };

  const validatePassword = (event: any) => {
    setPassword(event.target.value);
  };

  const handleUserType = (event: any) => {
    setUserType(event.target.value);
  };

  const handleSubmit = (event: any) => {
    event.preventDefault();

    if (email !== '' && password !== '') {
      console.log('entrar no app');
      navigate('/home');

      setSubmit({
        name,
        lastname,
        birthDate,
        email,
        password,
        userType,
        location: '',
        genre: '',
        sexualOrientation: '',
        isBooking: false,
      });
    }
  };

  useEffect(() => {
    let isMounted = true;

    const insertData = async () => {
      if (!isMounted || !submit) {
        return;
      }

      console.log('🚀 ~ submit:', submit);
      const { userType } = submit;

      console.log(`ir para ${userType}`);
      const data =
        userType === 'user'
          ? await createRegisterUser(submit)
          : await createRegisterHost(submit);
      console.log('🚀 ~ data:', data);
    };

    insertData();

    return () => {
      isMounted = false;
    };
  }, [submit]);

  return (
    <Box
      sx={{
        display: 'flex',
        height: '100vh',
        backgroundColor: '#E8E2E2',
        flexDirection: 'column',
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
          Cadastro
        </Typography>
        <Stack spacing={{ xs: 2, sm: 5 }} direction="row" useFlexGap flexWrap="wrap">
          <TextField required id="outlined-required" label="Nome" onChange={handleName} />
          <TextField
            required
            id="outlined-required"
            label="Sobrenome"
            onChange={handleLastname}
          />

          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DemoItem>
              <DatePicker
                label="Nascimento"
                onChange={(value: any) => formatDate(value.$d)}
                format="DD/MM/YYYY"
              />
            </DemoItem>
          </LocalizationProvider>
          <TextField
            required
            id="outlined-required"
            label="Email"
            onChange={validateEmail}
          />
          <TextField
            required
            id="outlined-required"
            type="password"
            label="Senha"
            onChange={validatePassword}
          />
          <div>
            <FormLabel id="demo-controlled-radio-buttons-group">
              Cadastrar como:
            </FormLabel>
            <RadioGroup
              aria-labelledby="demo-controlled-radio-buttons-group"
              name="controlled-radio-buttons-group"
              value={userType}
              onChange={handleUserType}
              defaultValue="user"
              row
            >
              <FormControlLabel value="user" control={<Radio />} label="User" />
              <FormControlLabel value="host" control={<Radio />} label="Host" />
            </RadioGroup>
          </div>
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
  );
};
