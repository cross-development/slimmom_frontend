//Core
import React from 'react';
import { useHistory } from 'react-router-dom';
//Components
import { SignUp } from 'components/Auth';
//Redux
import { authHooks, authOperations } from 'redux/auth';

const SignUpPage = () => {
	const history = useHistory();

	const handleSignUp = authHooks.useAuthAction(authOperations.userSignUp);

	const handleSubmit = credentials => {
		handleSignUp({ ...credentials });

		history.replace('/sign-in');
	};

	return (
		<section>
			<SignUp onSubmit={handleSubmit} />
		</section>
	);
};

export default SignUpPage;
