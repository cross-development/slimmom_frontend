//Core
import { combineReducers } from 'redux';
import { createReducer } from '@reduxjs/toolkit';
//Redux
import dayActions from './day.action';

const dayInfo = createReducer(null, {
	[dayActions.getDayInfoSuccess]: (state, { payload }) => payload,
});

const daySummary = createReducer(null, {
	[dayActions.addProductSuccess]: (state, { payload }) => payload,
});

const error = createReducer(null, {
	[dayActions.addProductFailure]: (state, { payload }) => payload,
	[dayActions.removeProductFailure]: (state, { payload }) => payload,
	[dayActions.getDayInfoFailure]: (state, { payload }) => payload,
});

const loading = createReducer(false, {
	[dayActions.addProductRequest]: () => true,
	[dayActions.addProductSuccess]: () => false,
	[dayActions.addProductFailure]: () => false,

	[dayActions.removeProductRequest]: () => true,
	[dayActions.removeProductSuccess]: () => false,
	[dayActions.removeProductFailure]: () => false,

	[dayActions.getDayInfoRequest]: () => true,
	[dayActions.getDayInfoSuccess]: () => false,
	[dayActions.getDayInfoFailure]: () => false,
});

export default combineReducers({ dayInfo, daySummary, loading, error });
