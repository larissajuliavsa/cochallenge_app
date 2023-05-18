import supabase from './client';

export const createRegisterUser = async (host: any) => {
  try {
    const {
      name,
      birthDate,
      genre,
      sexualOrientation,
      email,
      password,
      location,
      finances,
      getToKnow,
      idBooking,
      isBooking,
    } = host;

    const { data, error } = await supabase
      .from('registerHost')
      .insert([
        name,
        birthDate,
        genre,
        sexualOrientation,
        email,
        password,
        location,
        finances,
        getToKnow,
        idBooking,
        isBooking,
      ]);

    if (error || null) throw error;
    console.log(data);
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
      birthDate,
      genre,
      sexualOrientation,
      location,
      email,
      password,
      rooms,
    } = host;
    const { data, error } = await supabase
      .from('registerHost')
      .insert([
        name,
        birthDate,
        genre,
        sexualOrientation,
        location,
        email,
        password,
        rooms,
      ]);

    if (error || null) throw error;
    console.log(data);
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
