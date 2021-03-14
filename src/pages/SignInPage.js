//Core
import React from 'react';
//Components
import { SignIn } from 'components/Auth';
//Redux
import { authHooks } from 'redux/auth';
import { authOperations } from 'redux/auth';

const SignInPage = () => {
	const handleSignUp = authHooks.useUserAction(authOperations.userSignIn);

	const handleSubmit = credentials => handleSignUp({ ...credentials });

	return (
		<section>
			<SignIn onSubmit={handleSubmit} />
		</section>
	);
};

export default SignInPage;
