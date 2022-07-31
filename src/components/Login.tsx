import { useState, FC } from 'react';
import { ILogin } from '../types/interfaces';
import { AuthStyled } from '../styled/Auth.styled';
import { SubmitAuthButton } from '../styled/Buttons.styled';
import { InputStyled } from '../styled/Input.styled';

type Props = {
onLogin: (values : ILogin) => void;
}

export const Login : FC<Props> = ({ onLogin }) => {
  const [values, setValues] = useState<ILogin>({ email: '', password: '' });

  const handleChange = (e : React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setValues({ ...values, [name]: value });
  };

  const handleSubmit = (e : React.FormEvent<HTMLFormElement>) => {
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
