//Core
import axios from 'axios';
//Redux
import productActions from './product.action';

const findProducts = ({ query }) => dispatch => {
	dispatch(productActions.findProductsRequest());

	axios
		.get(`/api/product?search=${query}`)
		.then(({ data }) => dispatch(productActions.findProductsSuccess(data)))
		.catch(error => dispatch(productActions.findProductsFailure(error)));
};

const clearProductList = () => dispatch => dispatch(productActions.clearProductList());

const productOperations = { findProducts, clearProductList };

export default productOperations;
