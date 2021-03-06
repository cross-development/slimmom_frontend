//Core
import React, { Suspense, useEffect } from 'react';
import { Switch } from 'react-router-dom';
//Components
import Header from '../Header';
import { Layout, Loader } from '../Commons';
//Redux
import { userHooks, userOperations } from 'redux/user';
//Routes
import routes from 'router';
import PublicRoute from 'router/PublicRoute';
import PrivateRoute from 'router/PrivateRoute';

const App = () => {
	const getCurrentUser = userHooks.useUserEmptyAction(userOperations.getCurrentUser);

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
