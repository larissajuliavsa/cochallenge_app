import supabase from '../config/client';

export const validateEmail = async (email: string) => {
  try {
    const { data: registerUser, error: userError } = await supabase
      .from('registerUser')
      .select('email')
      .eq('email', email);

    const { data: registerHost, error: hostError } = await supabase
      .from('registerHost')
      .select('email')
      .eq('email', email);

    if (userError || hostError) {
      console.error('Erro ao consultar o banco de dados:', userError || hostError);
      return false;
    }

    if (
      (registerUser && registerUser.length > 0) ||
      (registerHost && registerHost.length > 0)
    ) {
      console.log('O email existe no banco de dados.');
      return true;
    }

    console.log('O email não existe no banco de dados.');
    return false;
  } catch (error) {
    console.error('Erro ao consultar o banco de dados:', error);
    return false;
  }
};

export const validatePassword = async (password: string) => {
  try {
    const { data: registerUser, error: userError } = await supabase
      .from('registerUser')
      .select('password')
      .eq('password', password);

    const { data: registerHost, error: hostError } = await supabase
      .from('registerHost')
      .select('password')
      .eq('password', password);

    if (userError || hostError) {
      console.error('Erro ao consultar o banco de dados:', userError || hostError);
      return false;
    }

    if (
      (registerUser && registerUser.length > 0) ||
      (registerHost && registerHost.length > 0)
    ) {
      console.log('O password existe no banco de dados.');
      return true;
    }

    console.log('O password não existe no banco de dados.');
    return false;
  } catch (error) {
    console.error('Erro ao consultar o banco de dados:', error);
    return false;
  }
};
