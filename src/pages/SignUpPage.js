//Core
import React from 'react';
//Components
import { SignUp } from 'components/Auth';
//Redux
import { authHooks } from 'redux/auth';
import { authOperations } from 'redux/auth';

const SignUpPage = () => {
	const handleSignUp = authHooks.useUserAction(authOperations.userSignUp);

	const handleSubmit = credentials => handleSignUp({ ...credentials });

	return (
		<section>
			<SignUp onSubmit={handleSubmit} />
		</section>
	);
};

export default SignUpPage;
