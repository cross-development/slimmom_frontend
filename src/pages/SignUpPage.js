//Core
import React from 'react';
//Components
import { SignUp } from 'components/Auth';
//Redux
import { useUserAction } from 'redux/auth/auth.hooks';
import authOperations from 'redux/auth/auth.operations';

const SignUpPage = () => {
	const handleSignUp = useUserAction(authOperations.userSignUp);

	const handleSubmit = credentials => handleSignUp({ ...credentials });

	return (
		<div>
			<SignUp onSubmit={handleSubmit} />
		</div>
	);
};

export default SignUpPage;
