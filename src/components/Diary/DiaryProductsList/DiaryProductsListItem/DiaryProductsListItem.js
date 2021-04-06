//Core
import React from 'react';
import PropTypes from 'prop-types';
//Styles
import { ListItem, Title, Weight, Kcal, RemoveBtn } from './DiaryProductsListItem.styles';

const DiaryProductsListItem = ({ id, title, weight, kcal, onRemoveProduct }) => (
	<ListItem>
		<Title>{title}</Title>

		<Weight>{weight}</Weight>

		<Kcal>{kcal}</Kcal>

		<RemoveBtn type="button" id={id} onClick={onRemoveProduct} />
	</ListItem>
);

DiaryProductsListItem.propTypes = {
	id: PropTypes.string.isRequired,
	title: PropTypes.string.isRequired,
	weight: PropTypes.number.isRequired,
	kcal: PropTypes.number.isRequired,
	onRemoveProduct: PropTypes.func.isRequired,
};

export default DiaryProductsListItem;
