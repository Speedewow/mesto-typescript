import { IValues } from '../types/interfaces';
import { config } from '../constants/constants';

const handleResponse = (res: any) => {
  if (res.ok) {
    return res.json();
  }
  return Promise.reject(`Ошибка ${res.status}: ${res.statusText}`);
};

const getUserInfo = () => {
  return fetch(`${config.link}/users/me`, {
    method: 'GET',
    headers: config.headers,
  }).then(handleResponse);
};

const getInitialCard = () => {
  return fetch(`${config.link}/cards`, {
    method: 'GET',
    headers: config.headers,
  }).then(handleResponse);
};

const setUserInfo = (formData: IValues) => {
  return fetch(`${config.link}/users/me`, {
    method: 'PATCH',
    headers: config.headers,
    body: JSON.stringify({
      name: `${formData.name}`,
      about: `${formData.about}`,
    }),
  }).then(handleResponse);
};

const createNewCard = (formData: IValues) => {
  return fetch(`${config.link}/cards`, {
    method: 'POST',
    headers: config.headers,
    body: JSON.stringify({
      name: `${formData.name}`,
      link: `${formData.link}`,
    }),
  }).then(handleResponse);
};

const createNewAvatar = (formData: IValues) => {
  return fetch(`${config.link}/users/me/avatar`, {
    method: 'PATCH',
    headers: config.headers,
    body: JSON.stringify({
      avatar: `${formData.link}`,
    }),
  }).then(handleResponse);
};

const deleteCard = (id: string) => {
  return fetch(`${config.link}/cards/${id}`, {
    method: 'DELETE',
    headers: config.headers,
    body: JSON.stringify({
      _id: `${id}`,
    }),
  }).then(handleResponse);
};

const changeLikeCardStatus = (id: string, like: boolean) => {
  return fetch(`${config.link}/cards/${id}/likes`, {
    method: like ? 'PUT' : 'DELETE',
    headers: config.headers,
    body: JSON.stringify({
      _id: `${id}`,
    }),
  }).then(handleResponse);
};

export {
  getUserInfo,
  getInitialCard,
  setUserInfo,
  createNewCard,
  createNewAvatar,
  deleteCard,
  changeLikeCardStatus,
};
