import { ILogin } from '../types/interfaces';
import { authConfig } from '../constants/constants';

const handleResponse = (res: any) => {
  if (res.ok) {
    return res.json();
  }
  return Promise.reject(`Ошибка ${res.status}: ${res.statusText}`);
};

const getSingUp = (formData: ILogin) => {
  return fetch(`${authConfig.link}/signup`, {
    method: 'POST',
    headers: authConfig.headers,
    body: JSON.stringify({
      email: `${formData.email}`,
      password: `${formData.password}`,
    }),
  }).then(handleResponse);
};

const getSingIn = (formData: ILogin) => {
  return fetch(`${authConfig.link}/signin`, {
    method: 'POST',
    headers: authConfig.headers,
    body: JSON.stringify({
      email: `${formData.email}`,
      password: `${formData.password}`,
    }),
  }).then(handleResponse);
};

const getLoginData = (token: string) => {
  return fetch(`${authConfig.link}/users/me`, {
    method: 'GET',
    headers: { ...authConfig.headers, Authorization: `Bearer ${token}` },
  }).then(handleResponse);
};

export { getSingUp, getSingIn, getLoginData };
