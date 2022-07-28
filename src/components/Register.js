import { useState } from 'react';
import { Link } from 'react-router-dom';
import { AuthStyled } from './styled/Auth.styled';
import { SubmitAuthButton } from './styled/Buttons.styled';
import { InputStyled } from './styled/Input.styled';

export const Register = ({ onRegister }) => {
  const [values, setValues] = useState({ email: '', password: '' });

  const handleChange = event => {
    const { name, value } = event.target;
    setValues({ ...values, [name]: value });
  };

  const handleSubmit = e => {
    e.preventDefault();
    onRegister(values);
  };

  return (
    <AuthStyled>
      <h1>Регистрация</h1>
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
        <SubmitAuthButton>Зарегистрироваться</SubmitAuthButton>
        <p>
          Уже зарегистрированы?&nbsp;
          <Link to="/sing-in">Войти</Link>
        </p>
      </form>
    </AuthStyled>
  );
};
