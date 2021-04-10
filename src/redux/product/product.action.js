//Core
import { createAction } from '@reduxjs/toolkit';

const findProductsRequest = createAction('product/findProductsRequest');
const findProductsSuccess = createAction('product/findProductsSuccess');
const findProductsFailure = createAction('product/findProductsFailure');

const clearProductList = createAction('product/clearProductList');

const productActions = {
	findProductsRequest,
	findProductsSuccess,
	findProductsFailure,

	clearProductList,
};

export default productActions;
