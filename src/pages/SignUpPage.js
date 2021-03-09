//Core
import React from 'react';
//Components
import { SignUp } from 'components/Auth';

const SignUpPage = () => {
	const handleSubmit = ({ username, email, password }) => {
		console.log({ username, email, password });
	};

	return (
		<div>
			<SignUp onSubmit={handleSubmit} />
		</div>
	);
};

export default SignUpPage;
