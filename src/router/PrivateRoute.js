//Core
import React from 'react';
import { Route, Redirect } from 'react-router-dom';
//Redux
import { authHooks } from 'redux/auth';

const PrivateRoute = ({ component: Component, ...routeProps }) => {
	const { user } = authHooks.useGetUser();

	return (
		<Route
			{...routeProps}
			render={props => (user ? <Component {...props} /> : <Redirect to="/" />)}
		/>
	);
};

export default PrivateRoute;
