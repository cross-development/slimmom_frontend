//Core
import { combineReducers } from 'redux';
import { createReducer } from '@reduxjs/toolkit';
//Redux
import authActions from './auth.action';

const token = createReducer(null, {
	[authActions.userSignInSuccess]: (state, { payload }) => payload.token,
	[authActions.userSighOutSuccess]: () => null,
});

const error = createReducer(null, {
	[authActions.userSignUpFailure]: (state, { payload }) => payload,
	[authActions.userSignInFailure]: (state, { payload }) => payload,
	[authActions.userSighOutFailure]: (state, { payload }) => payload,
	[authActions.unsetErrorMessage]: (state, { payload }) => null,
});

const loading = createReducer(false, {
	[authActions.userSignUpRequest]: () => true,
	[authActions.userSignUpSuccess]: () => false,
	[authActions.userSignUpFailure]: () => false,

	[authActions.userSignInRequest]: () => true,
	[authActions.userSignInSuccess]: () => false,
	[authActions.userSignInFailure]: () => false,

	[authActions.userSighOutRequest]: () => true,
	[authActions.userSighOutSuccess]: () => false,
	[authActions.userSighOutFailure]: () => false,
});

export default combineReducers({ token, error, loading });
