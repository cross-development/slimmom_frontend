//Core
import { combineReducers } from 'redux';
import { createReducer } from '@reduxjs/toolkit';
//Redux
import productActions from './product.action';

const items = createReducer([], {
	[productActions.findProductsSuccess]: (state, { payload }) => payload,
	[productActions.clearProductList]: (state, { payload }) => [],
});

const error = createReducer(null, {
	[productActions.findProductsFailure]: (state, { payload }) => payload,
});

const loading = createReducer(false, {
	[productActions.findProductsRequest]: () => true,
	[productActions.findProductsSuccess]: () => false,
	[productActions.findProductsFailure]: () => false,
});

export default combineReducers({ items, loading, error });
