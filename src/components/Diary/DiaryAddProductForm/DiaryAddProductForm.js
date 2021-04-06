//Core
import React from 'react';
import PropTypes from 'prop-types';
//Packages
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
//Utils
import { productSchema } from 'helpers/validationSchemas';
//Styles
import { Form, Label, Input, Message, BtnWrap, Button } from './DiaryAddProductForm.styles';

const DiaryAddProductForm = ({ onSubmit }) => {
	const { register, handleSubmit, errors } = useForm({
		resolver: yupResolver(productSchema),
	});

	return (
		<Form onSubmit={handleSubmit(onSubmit)}>
			<Label>
				<Input
					type="text"
					name="product"
					autoComplete="off"
					ref={register}
					placeholder="Введите название продукта"
				/>
				{<Message>{errors.product?.message}</Message>}
			</Label>

			<Label>
				<Input
					type="number"
					name="weight"
					ref={register({ setValueAs: v => Number(v) })}
					placeholder="Граммы"
				/>
				{<Message>{errors.weight?.message}</Message>}
			</Label>

			<BtnWrap>
				<Button type="submit" />
			</BtnWrap>
		</Form>
	);
};

DiaryAddProductForm.propTypes = {
	onSubmit: PropTypes.func.isRequired,
};

export default DiaryAddProductForm;
