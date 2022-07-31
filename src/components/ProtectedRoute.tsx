import { FC } from 'react';
import { Route, Redirect } from 'react-router-dom';
import { MainProps } from '../types/types';

export const ProtectedRoute:FC<MainProps> = ({ component: Component , ...props }) => (
  <Route>{() => (props.isLogin ? <Component {...props} /> : <Redirect to="/sing-in" />)}</Route>
);
