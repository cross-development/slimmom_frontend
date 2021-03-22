//Core
import React from 'react';
import PropTypes from 'prop-types';
//Packages
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
//Utils
import { signInSchema } from 'helpers/validationSchemas';
//Styles
import { Heading, Form, Label, Input, BtnGroup, Button, SignUpLink } from './SignIn.styles';

const SignIn = ({ onSubmit }) => {
	const { register, handleSubmit, errors } = useForm({
		resolver: yupResolver(signInSchema),
	});

	return (
		<Form onSubmit={handleSubmit(onSubmit)}>
			<Heading>Вход</Heading>

			<Label>
				<Input type="email" name="email" autoComplete="off" ref={register} placeholder="Email *" />
				{errors.email && <span>{errors.email.message}</span>}
			</Label>

			<Label>
				<Input type="password" name="password" ref={register} placeholder="Пароль *" />
				{errors.password && <span>{errors.password.message}</span>}
			</Label>

			<BtnGroup>
				<Button type="submit">Вход</Button>
				<SignUpLink to="/sign-up">Регистрация</SignUpLink>
			</BtnGroup>
		</Form>
	);
};

SignIn.propTypes = {
	onSubmit: PropTypes.func.isRequired,
};

export default SignIn;
