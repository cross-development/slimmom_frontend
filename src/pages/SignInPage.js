//Core
import React from 'react';
//Components
import { SignIn } from 'components/Auth';
//Redux
import { authHooks, authOperations } from 'redux/auth';

const SignInPage = () => {
	const handleSignUp = authHooks.useAuthAction(authOperations.userSignIn);

	const handleSubmit = credentials => handleSignUp({ ...credentials });

	return (
		<section>
			<SignIn onSubmit={handleSubmit} />
		</section>
	);
};

export default SignInPage;
