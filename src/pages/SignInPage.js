//Core
import React from 'react';
//Components
import { SignIn } from 'components/Auth';
//Redux
import { useUserAction } from 'redux/auth/auth.hooks';
import authOperations from 'redux/auth/auth.operations';

const SignInPage = () => {
	const handleSignUp = useUserAction(authOperations.userSignIn);

	const handleSubmit = credentials => handleSignUp({ ...credentials });

	return (
		<div>
			<SignIn onSubmit={handleSubmit} />
		</div>
	);
};

export default SignInPage;
