//Core
import { createAction } from '@reduxjs/toolkit';

const findProductsRequest = createAction('product/findProductsRequest');
const findProductsSuccess = createAction('product/findProductsSuccess');
const findProductsFailure = createAction('product/findProductsFailure');

const productActions = {
	findProductsRequest,
	findProductsSuccess,
	findProductsFailure,
};

export default productActions;
