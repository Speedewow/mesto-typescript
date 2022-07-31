export interface IValues {
  name?: string;
  link?: string;
  about?: string;
}

export interface ILogin {
  email: string;
  password: string;
}

export interface IErrors {
  name?: string;
  link?: string;
  about?: string;
}

export interface IValidity {
  name?: boolean;
  link?: boolean;
  about?: boolean;
}

export interface IUser {
  name?: string;
  about?: string;
  avatar?: string;
  cohort?: string;
  _id?: string;
}

export interface ICard {
  cratedAt: string;
  link: string;
  name: string;
  _id: string;
  owner: IUser;
  likes: IUser[];
}

export interface ISelect extends ICard {
  isOpen: boolean;
}

export interface IInfo {
  isOpen: boolean;
  isSuccess: boolean;
  text: string;
}

export interface IResponse {
  email?: string;
  _id?: string;
  token?: string;
  data?: any;
}
