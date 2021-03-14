//Core
import React from 'react';
import { Route, Redirect } from 'react-router-dom';
//Redux
import { authHooks } from 'redux/auth';

const PublicRoute = ({ component: Component, ...routeProps }) => {
	const { user } = authHooks.useGetUser();

	return (
		<Route
			{...routeProps}
			render={props =>
				user && routeProps.restricted ? <Redirect to="/" /> : <Component {...props} />
			}
		/>
	);
};

export default PublicRoute;
