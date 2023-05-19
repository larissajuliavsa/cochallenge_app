import supabase from './client';

export const createRegisterUser = async (host: any) => {
  try {
    const {
      name,
      lastname,
      birthDate,
      email,
      password,
      userType,
      location,
      genre,
      sexualOrientation,
      isBooking,
    } = host;

    const { data, error } = await supabase.from('registerUser').insert([
      {
        name,
        lastname,
        birthDate,
        email,
        password,
        userType,
        location,
        genre,
        sexualOrientation,
        isBooking,
      },
    ]);

    if (error || null) throw error;
  } catch (error) {
    console.log(error);
  }
};

export const getRegisterUser = async () => {
  try {
    const { data: registerUser, error } = await supabase.from('registerUser').select('*');

    if (error || null) throw error;
    return registerUser;
  } catch (error) {
    console.log(error);
    return null;
  }
};

export const createRegisterHost = async (host: any) => {
  try {
    const {
      name,
      lastname,
      birthDate,
      email,
      password,
      userType,
      location,
      genre,
      sexualOrientation,
    } = host;
    const { data, error } = await supabase.from('registerHost').insert([
      {
        name,
        lastname,
        birthDate,
        email,
        password,
        userType,
        location,
        genre,
        sexualOrientation,
      },
    ]);

    if (error || null) throw error;
  } catch (error) {
    console.log(error);
  }
};

export const getRegisterHost = async () => {
  try {
    const { data: registerHost, error } = await supabase.from('registerHost').select('*');

    if (error || null) throw error;
    return registerHost;
  } catch (error) {
    console.log(error);
  }
};
