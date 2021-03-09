//Core
import React from 'react';
import PropTypes from 'prop-types';
//Packages
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
//Styles
import { StyledH1, StyledSpan } from './SignIn.styles';
import { StylesForm, StyledLabel, StyledInput, StyledButton } from './SignIn.styles';

const schema = yup.object().shape({
	email: yup.string().email('Invalid email').required('Required'),
	password: yup.string().min(4, 'Too Short!').max(50, 'Too Long!').required('Required'),
});

const SignIn = ({ onSubmit }) => {
	const { register, handleSubmit, errors } = useForm({
		resolver: yupResolver(schema),
	});

	return (
		<StylesForm onSubmit={handleSubmit(onSubmit)}>
			<StyledH1>
				<StyledSpan>Sing in</StyledSpan>
			</StyledH1>

			<StyledLabel>
				Email
				<StyledInput type="email" name="email" autoComplete="off" ref={register} />
				{errors.email && <span>{errors.email.message}</span>}
			</StyledLabel>

			<StyledLabel>
				Password
				<StyledInput type="password" name="password" autoComplete="off" ref={register} />
				{errors.password && <span>{errors.password.message}</span>}
			</StyledLabel>

			<StyledButton type="submit">Log in</StyledButton>
		</StylesForm>
	);
};

SignIn.propTypes = {
	onSubmit: PropTypes.func.isRequired,
};

export default SignIn;
