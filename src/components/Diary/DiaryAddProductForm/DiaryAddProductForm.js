//Core
import React, { useState } from 'react';
import PropTypes from 'prop-types';
//Packages
import debounce from 'lodash.debounce';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
//Redux
import { productHooks, productOperations } from 'redux/product';
//Utils
import { productSchema } from 'helpers/validationSchemas';
//Styles
import { FormWrap, Form, GoBackBtn } from './DiaryAddProductForm.styles';
import { Label, Input, Message, BtnWrap, Button } from './DiaryAddProductForm.styles';
import { ProductListWrap, ProductList, ProductItem } from './DiaryAddProductForm.styles';

const DiaryAddProductForm = ({ isOpen, onSubmit, onCloseModal }) => {
	const { register, handleSubmit, setValue, errors } = useForm({
		resolver: yupResolver(productSchema),
	});

	const { items } = productHooks.useProductState();

	const [product, setProduct] = useState(null);

	const clearProductList = productHooks.useProductEmptyAction(productOperations.clearProductList);

	const handleSelectProduct = product => {
		setValue('product', product.title.ru);
		setProduct(product);
		clearProductList();
	};

	const searchProduct = productHooks.useProductAction(productOperations.findProducts);

	const debouncedSearch = debounce(query => query.length > 2 && searchProduct({ query }), 400);
	const handleChangeProduct = ({ target: { value } }) => debouncedSearch(value);

	const handleFormSubmit = () => onSubmit({ productId: product.id, weight: product.weight });

	return (
		<FormWrap isOpen={isOpen}>
			<GoBackBtn type="button" onClick={onCloseModal} />

			<Form onSubmit={handleSubmit(handleFormSubmit)}>
				<Label>
					<Input
						type="text"
						name="product"
						autoComplete="off"
						ref={register}
						onChange={handleChangeProduct}
						placeholder="Введите название продукта"
					/>
					{<Message>{errors.product?.message}</Message>}
				</Label>

				<ProductListWrap>
					<ProductList>
						{!!items.length &&
							items.map(product => (
								<ProductItem key={product.id} onClick={() => handleSelectProduct(product)}>
									{product.title.ru}
								</ProductItem>
							))}
					</ProductList>
				</ProductListWrap>

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
		</FormWrap>
	);
};

DiaryAddProductForm.propTypes = {
	onSubmit: PropTypes.func.isRequired,
	isOpen: PropTypes.bool.isRequired,
};

export default DiaryAddProductForm;
