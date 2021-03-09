//Core
import React from 'react';
//Components
import { SignIn } from 'components/Auth';

const SignInPage = () => {
	const handleSubmit = ({ email, password }) => {
		console.log({ email, password });
	};

	return (
		<div>
			<SignIn onSubmit={handleSubmit} />
		</div>
	);
};

export default SignInPage;
