//Core
import { combineReducers } from 'redux';
import { createReducer } from '@reduxjs/toolkit';
//Redux
import userActions from './user.action';
import authActions from '../auth/auth.action';

const userInfo = createReducer(null, {
	[userActions.getCurrentUserSuccess]: (state, { payload }) => payload.user,
	[authActions.userSignInSuccess]: (state, { payload }) => payload.user,
	[authActions.userSighOutSuccess]: () => null,
});

const dayInfo = createReducer(null, {
	[userActions.getCurrentUserSuccess]: (state, { payload }) => payload.daySummary,
	[authActions.userSignInSuccess]: (state, { payload }) => payload.todaySummary,
	[userActions.getDayInfoSuccess]: (state, { payload }) => {
		if (!payload.id) return { ...payload };

		return {
			dayId: payload.id,
			eatenProducts: payload.eatenProducts,
			...payload.daySummary,
		};
	},
	[userActions.addProductSuccess]: (state, { payload }) => ({
		dayId: payload.day.id,
		eatenProducts: [...state.eatenProducts, payload.eatenProduct],
		...payload.daySummary,
	}),
	[userActions.removeProductSuccess]: (state, { payload }) => ({
		...state,
		eatenProducts: state.eatenProducts.filter(({ id }) => id !== payload.eatenProductId),
		...payload.newDaySummary,
	}),
});

const error = createReducer(null, {
	[userActions.getCurrentUserFailure]: (state, { payload }) => payload,
	[userActions.addProductFailure]: (state, { payload }) => payload,
	[userActions.removeProductFailure]: (state, { payload }) => payload,
	[userActions.getDayInfoFailure]: (state, { payload }) => payload,
	[userActions.unsetErrorMessage]: (state, { payload }) => null,
});

const loading = createReducer(false, {
	[userActions.getCurrentUserRequest]: () => true,
	[userActions.getCurrentUserSuccess]: () => false,
	[userActions.getCurrentUserFailure]: () => false,

	[userActions.addProductRequest]: () => true,
	[userActions.addProductSuccess]: () => false,
	[userActions.addProductFailure]: () => false,

	[userActions.removeProductRequest]: () => true,
	[userActions.removeProductSuccess]: () => false,
	[userActions.removeProductFailure]: () => false,

	[userActions.getDayInfoRequest]: () => true,
	[userActions.getDayInfoSuccess]: () => false,
	[userActions.getDayInfoFailure]: () => false,
});

export default combineReducers({ userInfo, dayInfo, error, loading });
