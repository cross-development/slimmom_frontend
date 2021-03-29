//Core
import { createAction } from '@reduxjs/toolkit';

const addProductRequest = createAction('day/addProductRequest');
const addProductSuccess = createAction('day/addProductSuccess');
const addProductFailure = createAction('day/addProductFailure');

const removeProductRequest = createAction('day/removeProductRequest');
const removeProductSuccess = createAction('day/removeProductSuccess');
const removeProductFailure = createAction('day/removeProductFailure');

const getDayInfoRequest = createAction('day/getDayInfoRequest');
const getDayInfoSuccess = createAction('day/getDayInfoSuccess');
const getDayInfoFailure = createAction('day/getDayInfoFailure');

const dayActions = {
	addProductRequest,
	addProductSuccess,
	addProductFailure,

	removeProductRequest,
	removeProductSuccess,
	removeProductFailure,

	getDayInfoRequest,
	getDayInfoSuccess,
	getDayInfoFailure,
};

export default dayActions;
