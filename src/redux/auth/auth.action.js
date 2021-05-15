//Core
import { createAction } from '@reduxjs/toolkit';

const userSignUpRequest = createAction('auth/userSignUpRequest');
const userSignUpSuccess = createAction('auth/userSignUpSuccess');
const userSignUpFailure = createAction('auth/userSignUpFailure');

const userSignInRequest = createAction('auth/userSignInRequest');
const userSignInSuccess = createAction('auth/userSignInSuccess');
const userSignInFailure = createAction('auth/userSignInFailure');

const userSighOutRequest = createAction('auth/userSighOutRequest');
const userSighOutSuccess = createAction('auth/userSighOutSuccess');
const userSighOutFailure = createAction('auth/userSighOutFailure');

const unsetErrorMessage = createAction('auth/unsetErrorMessage');

const authActions = {
	userSignUpRequest,
	userSignUpSuccess,
	userSignUpFailure,

	userSignInRequest,
	userSignInSuccess,
	userSignInFailure,

	userSighOutRequest,
	userSighOutSuccess,
	userSighOutFailure,

	unsetErrorMessage,
};

export default authActions;
