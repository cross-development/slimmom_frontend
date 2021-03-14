//Core
import React, { Suspense, useEffect } from 'react';
import { Switch } from 'react-router-dom';
//Components
import Header from '../Header';
import { Layout, Loader } from '../Commons';
//Redux
import { useUserEmptyAction } from 'redux/auth/auth.hooks';
import { authOperations } from 'redux/auth';
//Routes
import routes from 'router';
import PublicRoute from 'router/PublicRoute';
import PrivateRoute from 'router/PrivateRoute';

const App = () => {
	const getCurrentUser = useUserEmptyAction(authOperations.getCurrentUser);

	useEffect(() => getCurrentUser(), [getCurrentUser]);

	return (
		<>
			<Header />

			<Layout>
				<Suspense fallback={<Loader onLoad={true} />}>
					<Switch>
						{routes.map(route =>
							route.private ? (
								<PrivateRoute key={route.path} {...route} />
							) : (
								<PublicRoute key={route.path} {...route} />
							),
						)}
					</Switch>
				</Suspense>
			</Layout>
		</>
	);
};

export default App;

// const getCurrentUser = useUserEmptyAction(authOperations.getCurrentUser);

// useEffect(() => getCurrentUser(), [getCurrentUser]);
