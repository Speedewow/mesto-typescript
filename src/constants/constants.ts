export const defaultInfo = {
  isOpen: false,
  isSuccess: false,
  text: '',
};

export const successInfo = {
  isOpen: true,
  text: 'Вы успешно зарегистрировались!',
  isSuccess: true,
};

export const failureInfo = {
  isOpen: true,
  text: 'Что-то пошло не так! Попробуйте еще раз.',
  isSuccess: false,
};

export const defaultCard = {
  cratedAt: '',
  link: '',
  name: '',
  _id: '',
  owner: {},
  likes: [],
  isOpen: false,
};

export const defaultUser = {
  name: '',
  about: '',
  avatar: '',
  cohort: '',
  _id: '',
};

export const config = {
  link: 'https://mesto.nomoreparties.co/v1/cohort-42',
  headers: {
    authorization: 'bb096a0b-7640-41d0-a2e7-bde23481c8f2',
    'Content-Type': 'application/json',
  },
};

export const authConfig = {
  link: 'https://auth.nomoreparties.co',
  headers: {
    'Content-Type': 'application/json',
  },
};
