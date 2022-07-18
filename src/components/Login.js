import { useState } from 'react';
export const Login = ({ onLogin }) => {
	const [values, setValues] = useState({ email: '', password: '' });

	const handleChange = event => {
		const { name, value } = event.target;
		setValues({ ...values, [name]: value });
	};

	const handleSubmit = e => {
		e.preventDefault();
		onLogin(values);
	};

	return (
		<section className="auth">
			<h1 className="auth__title">Вход</h1>
			<form className="auth__form" onSubmit={handleSubmit}>
				<input
					className="auth__input"
					type="email"
					placeholder="E-mail"
					autoComplete="off"
					name="email"
					value={values.email}
					onChange={handleChange}
				/>
				<input
					className="auth__input"
					type="password"
					placeholder="Пароль"
					autoComplete="off"
					name="password"
					value={values.password}
					onChange={handleChange}
				/>
				<button className="auth__submit-button" type="submit">
					Войти
				</button>
			</form>
		</section>
	);
};