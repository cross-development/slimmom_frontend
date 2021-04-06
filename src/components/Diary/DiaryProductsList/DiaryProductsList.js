//Core
import React, { useMemo } from 'react';
import PropTypes from 'prop-types';
//Components
import DiaryProductsListItem from './DiaryProductsListItem';
//Styles
import {} from './DiaryProductsList.styles';

const DiaryProductsList = ({ eatenProducts }) => {
	const eatenProductsList = useMemo(
		() =>
			eatenProducts &&
			eatenProducts.map(eatenProduct => (
				<DiaryProductsListItem key={eatenProduct.id} {...eatenProduct} />
			)),
		[eatenProducts],
	);

	return <div>{eatenProductsList}</div>;
};

DiaryProductsList.propTypes = {};

export default DiaryProductsList;
