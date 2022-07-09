import { config } from './utils';

const handleResponse = res => {
	if (res.ok) {
		return res.json();
	}
	return Promise.reject('Ошибка');
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

const setUserInfo = formData => {
	return fetch(`${config.link}/users/me`, {
		method: 'PATCH',
		headers: config.headers,
		body: JSON.stringify({
			name: `${formData.name}`,
			about: `${formData.about}`,
		}),
	}).then(handleResponse);
};

const createNewCard = formData => {
	return fetch(`${config.link}/cards`, {
		method: 'POST',
		headers: config.headers,
		body: JSON.stringify({
			name: `${formData.name}`,
			link: `${formData.link}`,
		}),
	}).then(handleResponse);
};

const createNewAvatar = url => {
	return fetch(`${config.link}/users/me/avatar`, {
		method: 'PATCH',
		headers: config.headers,
		body: JSON.stringify({
			avatar: `${url.link}`,
		}),
	}).then(handleResponse);
};

const deleteCard = id => {
	return fetch(`${config.link}/cards/${id}`, {
		method: 'DELETE',
		headers: config.headers,
		body: JSON.stringify({
			_id: `${id}`,
		}),
	}).then(handleResponse);
};

const changeLikeCardStatus = (id, like) => {
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
