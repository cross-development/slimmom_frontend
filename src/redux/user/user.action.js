//Core
import { createAction } from '@reduxjs/toolkit';

const getCurrentUserRequest = createAction('user/getCurrentUserRequest');
const getCurrentUserSuccess = createAction('user/getCurrentUserSuccess');
const getCurrentUserFailure = createAction('user/getCurrentUserFailure');

const addProductRequest = createAction('user/addProductRequest');
const addProductSuccess = createAction('user/addProductSuccess');
const addProductFailure = createAction('user/addProductFailure');

const removeProductRequest = createAction('user/removeProductRequest');
const removeProductSuccess = createAction('user/removeProductSuccess');
const removeProductFailure = createAction('user/removeProductFailure');

const getDayInfoRequest = createAction('user/getDayInfoRequest');
const getDayInfoSuccess = createAction('user/getDayInfoSuccess');
const getDayInfoFailure = createAction('user/getDayInfoFailure');

const unsetErrorMessage = createAction('user/unsetErrorMessage');

const userActions = {
	getCurrentUserRequest,
	getCurrentUserSuccess,
	getCurrentUserFailure,

	addProductRequest,
	addProductSuccess,
	addProductFailure,

	removeProductRequest,
	removeProductSuccess,
	removeProductFailure,

	getDayInfoRequest,
	getDayInfoSuccess,
	getDayInfoFailure,

	unsetErrorMessage,
};

export default userActions;
