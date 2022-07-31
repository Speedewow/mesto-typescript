import { FC } from 'react';
import { InputStyled, Error } from '../styled/Input.styled';
import { InputProps } from '../types/types';

export const Input : FC <InputProps> = ({ name, value, handleChange, validationMessage, ...props }) => (
  <> 
    <InputStyled
      {...props}
      color="#000000"
      margin="13px 0 0"
      name={name}
      value={value || ''}
      onChange={handleChange}
    />
    <Error name={name}>{validationMessage}</Error>
  </>
);
