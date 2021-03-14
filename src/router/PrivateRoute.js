//Core
import React from 'react';
import { Route, Redirect } from 'react-router-dom';
//Redux
import { useGetUser } from 'redux/auth/auth.hooks';

const PrivateRoute = ({ component: Component, ...routeProps }) => {
	const { user } = useGetUser();

	return (
		<Route
			{...routeProps}
			render={props => (user ? <Component {...props} /> : <Redirect to="/sign-in" />)}
		/>
	);
};

export default PrivateRoute;
