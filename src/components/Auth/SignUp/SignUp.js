//Core
import React from 'react';
import PropTypes from 'prop-types';
//Packages
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
//Utils
import { signUpSchema } from 'utils/validationSchemas';
//Styles
import { Heading, Form, Label, Input, BtnGroup, Button, SignUpLink } from './SignUp.styles';

const SignUp = ({ onSubmit }) => {
	const { register, handleSubmit, errors } = useForm({
		resolver: yupResolver(signUpSchema),
	});

	return (
		<Form onSubmit={handleSubmit(onSubmit)}>
			<Heading>Регистрация</Heading>

			<Label>
				<Input type="text" name="username" placeholder="Имя *" autoComplete="off" ref={register} />
				{errors.username && <span>{errors.username.message}</span>}
			</Label>

			<Label>
				<Input type="email" name="email" placeholder="Email *" autoComplete="off" ref={register} />
				{errors.email && <span>{errors.email.message}</span>}
			</Label>

			<Label>
				<Input type="password" name="password" placeholder="Пароль *" ref={register} />
				{errors.password && <span>{errors.password.message}</span>}
			</Label>

			<BtnGroup>
				<Button type="submit">Регистрация</Button>
				<SignUpLink to="/sign-in">Вход</SignUpLink>
			</BtnGroup>
		</Form>
	);
};

SignUp.propTypes = {
	onSubmit: PropTypes.func.isRequired,
};

export default SignUp;
