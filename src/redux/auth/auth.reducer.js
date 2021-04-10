//Core
import { combineReducers } from 'redux';
import { createReducer } from '@reduxjs/toolkit';
//Redux
import authActions from './auth.action';

const user = createReducer(null, {
	[authActions.getCurrentUserSuccess]: (state, { payload }) => payload,
	[authActions.userSignUpSuccess]: (state, { payload }) => payload.user,
	[authActions.userSignInSuccess]: (state, { payload }) => payload.user,
	[authActions.userSighOutSuccess]: () => null,
});

const todaySummary = createReducer(null, {
	[authActions.userSignInSuccess]: (state, { payload }) => payload.todaySummary,
});

const token = createReducer(null, {
	[authActions.userSignUpSuccess]: (state, { payload }) => payload.token,
	[authActions.userSignInSuccess]: (state, { payload }) => payload.token,
	[authActions.userSighOutSuccess]: () => null,
});

const error = createReducer(null, {
	[authActions.getCurrentUserFailure]: (state, { payload }) => payload,
	[authActions.userSignUpFailure]: (state, { payload }) => payload,
	[authActions.userSignInFailure]: (state, { payload }) => payload,
	[authActions.userSighOutFailure]: (state, { payload }) => payload,
	[authActions.unsetErrorMessage]: (state, { payload }) => null,
});

const loading = createReducer(false, {
	[authActions.getCurrentUserRequest]: () => true,
	[authActions.getCurrentUserSuccess]: () => false,
	[authActions.getCurrentUserFailure]: () => false,

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

export default combineReducers({ user, todaySummary, token, error, loading });
