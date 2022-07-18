import { authConfig } from './utils';

const handleResponse = res => {
	if (res.ok) {
		return res.json();
	}
	return Promise.reject(`Ошибка ${res.status}: ${res.statusText}`);
};

const getSingUp = formData => {
	return fetch(`${authConfig.link}/signup`, {
		method: 'POST',
		headers: authConfig.headers,
		body: JSON.stringify({
			email: `${formData.email}`,
			password: `${formData.password}`,
		}),
	}).then(handleResponse);
};

const getSingIn = formData => {
	return fetch(`${authConfig.link}/signin`, {
		method: 'POST',
		headers: authConfig.headers,
		body: JSON.stringify({
			email: `${formData.email}`,
			password: `${formData.password}`,
		}),
	}).then(handleResponse);
};

const getLoginData = token => {
	return fetch(`${authConfig.link}/users/me`, {
		method: 'GET',
		headers: { ...authConfig.headers, Authorization: `Bearer ${token}` },
	}).then(handleResponse);
};

export { getSingUp, getSingIn, getLoginData };
