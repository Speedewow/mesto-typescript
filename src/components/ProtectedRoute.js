import { Route, Redirect } from 'react-router-dom';

export const ProtectedRoute = ({ component: Component, ...props }) => (
	<Route>{() => (props.isLogin ? <Component {...props} /> : <Redirect to="/sing-in" />)}</Route>
);
