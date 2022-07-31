import styled from 'styled-components';
import { colors } from './Colors';
import { InputProps } from '../types/types';

export const InputStyled = styled.input<InputProps>`
  margin: ${({ margin }) => margin};
  color: ${({ color }) => color};
  font-size: 14px;
  line-height: 1.214;
  padding: 0 0 10px 0;
  border: none;
  border-bottom: 2px solid ${colors.darkGray};
  outline: none;
  background-color: transparent;

  &:focus {
    border-bottom: 2px solid ${colors.gray};
  }
`;

export const Error = styled.span<InputProps>`
  margin-top: 5px;
  color: ${colors.red};
  font-size: 10px;
  height: 10px;
`;
