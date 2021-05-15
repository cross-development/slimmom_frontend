//Core
import React from 'react';
//Components
import { SignIn } from 'components/Auth';
import { Container } from 'components/Commons';
//Redux
import { authHooks, authOperations } from 'redux/auth';

const SignInPage = () => {
	const handleSignUp = authHooks.useAuthAction(authOperations.userSignIn);

	const handleSubmit = credentials => handleSignUp({ ...credentials });

	return (
		<section>
			<Container>
				<SignIn onSubmit={handleSubmit} />
			</Container>
		</section>
	);
};

export default SignInPage;
