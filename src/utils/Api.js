import { config } from './utils';
class Api {
	constructor(config) {
		this.link = config.link;
		this.headers = config.headers;
	}

	_handleResponse = res => {
		if (res.ok) {
			return res.json();
		}
		return Promise.reject('Ошибка');
	};

	getUserInfo() {
		return fetch(`${this.link}/users/me`, {
			method: 'GET',
			headers: this.headers,
		}).then(this._handleResponse);
	}

	getInitialCard() {
		return fetch(`${this.link}/cards`, {
			method: 'GET',
			headers: this.headers,
		}).then(this._handleResponse);
	}

	setUserInfo(formData) {
		return fetch(`${this.link}/users/me`, {
			method: 'PATCH',
			headers: this.headers,
			body: JSON.stringify({
				name: `${formData.name}`,
				about: `${formData.about}`,
			}),
		}).then(this._handleResponse);
	}

	createNewCard(formData) {
		return fetch(`${this.link}/cards`, {
			method: 'POST',
			headers: this.headers,
			body: JSON.stringify({
				name: `${formData.name}`,
				link: `${formData.link}`,
			}),
		}).then(this._handleResponse);
	}

	createNewAvatar(url) {
		return fetch(`${this.link}/users/me/avatar`, {
			method: 'PATCH',
			headers: this.headers,
			body: JSON.stringify({
				avatar: `${url.link}`,
			}),
		}).then(this._handleResponse);
	}

	deleteCard(id) {
		return fetch(`${this.link}/cards/${id}`, {
			method: 'DELETE',
			headers: this.headers,
			body: JSON.stringify({
				_id: `${id}`,
			}),
		}).then(this._handleResponse);
	}

	changeLikeCardStatus(id, like) {
		return fetch(`${this.link}/cards/${id}/likes`, {
			method: like ? 'PUT' : 'DELETE',
			headers: this.headers,
			body: JSON.stringify({
				_id: `${id}`,
			}),
		}).then(this._handleResponse);
	}
}

export const api = new Api(config);
