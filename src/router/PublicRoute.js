//Core
import React from 'react';
import { Route, Redirect } from 'react-router-dom';
//Redux
import { useGetUser } from 'redux/auth/auth.hooks';

const PublicRoute = ({ component: Component, ...routeProps }) => {
	const { user } = useGetUser();

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
