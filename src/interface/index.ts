export interface IUser {
  id: string;
  name: string;
  birthDate: string;
  genre: string;
  sexualOrientation: string;
  email: string;
  password: string;
  location: string;
  finances: string;
  following: null | string;
  getToKnow: boolean;
  idBooking: string;
  isBooking: boolean;
}
