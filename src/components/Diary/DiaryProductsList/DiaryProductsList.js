//Core
import React from 'react';
import PropTypes from 'prop-types';
//Components
import DiaryProductsListItem from './DiaryProductsListItem';
//Styles
import { ProductWrap } from './DiaryProductsList.styles';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import slideTransition from 'styles/transitions/slide.module.css';

const DiaryProductsList = ({ eatenProducts, onRemoveProduct }) => (
	<ProductWrap>
		<TransitionGroup component="ul">
			{eatenProducts.map(eatenProduct => (
				<CSSTransition key={eatenProduct.id} timeout={250} classNames={slideTransition}>
					<DiaryProductsListItem {...eatenProduct} onRemoveProduct={onRemoveProduct} />
				</CSSTransition>
			))}
		</TransitionGroup>
	</ProductWrap>
);

DiaryProductsList.propTypes = {
	onRemoveProduct: PropTypes.func.isRequired,
};

export default DiaryProductsList;
