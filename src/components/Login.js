import { useState } from 'react';
import { AuthStyled } from './styled/Auth.styled';
import { SubmitAuthButton } from './styled/Buttons.styled';
import { InputStyled } from './styled/Input.styled';

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
		<AuthStyled>
			<h1>Вход</h1>
			<form onSubmit={handleSubmit}>
				<InputStyled
					color="#ccc"
					margin="20px 0 0"
					type="email"
					placeholder="E-mail"
					autoComplete="off"
					name="email"
					value={values.email}
					onChange={handleChange}
				/>
				<InputStyled
					color="#ccc"
					margin="20px 0 0"
					type="password"
					placeholder="Пароль"
					autoComplete="off"
					name="password"
					value={values.password}
					onChange={handleChange}
				/>
				<SubmitAuthButton>Войти</SubmitAuthButton>
			</form>
		</AuthStyled>
	);
};
