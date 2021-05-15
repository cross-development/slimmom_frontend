//Core
import React from 'react';
import { useHistory } from 'react-router-dom';
//Components
import { SignUp } from 'components/Auth';
import { Container } from 'components/Commons';
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
			<Container>
				<SignUp onSubmit={handleSubmit} />
			</Container>
		</section>
	);
};

export default SignUpPage;
