//Core
import React from 'react';
import PropTypes from 'prop-types';
//Packages
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
//Styles
import { StyledH1, StyledSpan } from './SignUp.styles';
import { StyledForm, StyledLabel, StyledInput, StyledButton } from './SignUp.styles';

const schema = yup.object().shape({
	username: yup.string().min(4, 'Too Short!').max(50, 'Too Long!').required('Required'),
	email: yup.string().email('Invalid email').required('Required'),
	password: yup.string().min(4, 'Too Short!').max(50, 'Too Long!').required('Required'),
});

const SignUp = ({ onSubmit }) => {
	const { register, handleSubmit, errors } = useForm({
		resolver: yupResolver(schema),
	});

	return (
		<StyledForm onSubmit={handleSubmit(onSubmit)}>
			<StyledH1>
				<StyledSpan>Sign up</StyledSpan>
			</StyledH1>

			<StyledLabel>
				Full name
				<StyledInput required type="text" name="username" autoComplete="off" ref={register} />
				{errors.username && <span>{errors.username.message}</span>}
			</StyledLabel>

			<StyledLabel>
				Email
				<StyledInput required type="email" name="email" autoComplete="off" ref={register} />
				{errors.email && <span>{errors.email.message}</span>}
			</StyledLabel>

			<StyledLabel>
				Password
				<StyledInput required type="password" name="password" autoComplete="off" ref={register} />
				{errors.password && <span>{errors.password.message}</span>}
			</StyledLabel>

			<StyledButton type="submit">Sign up</StyledButton>
		</StyledForm>
	);
};

SignUp.propTypes = {
	onSubmit: PropTypes.func.isRequired,
};

export default SignUp;
