//Core
import axios from 'axios';
//Redux
import userActions from './user.action';
//Services
import authService from 'services/authService';

const getCurrentUser = () => (dispatch, getState) => {
	const state = getState();
	const { token: existToken } = state.auth;

	if (!existToken) return;

	authService.set(existToken);

	dispatch(userActions.getCurrentUserRequest());

	axios
		.get('/api/users/current')
		.then(({ data }) => dispatch(userActions.getCurrentUserSuccess(data)))
		.catch(error => dispatch(userActions.getCurrentUserFailure(error)));
};

const getDayInfo = ({ date }) => dispatch => {
	dispatch(userActions.getDayInfoRequest());

	axios
		.post('/api/day/info', { date: date.toLocaleDateString('us-US') })
		.then(({ data }) => dispatch(userActions.getDayInfoSuccess(data)))
		.catch(error => dispatch(userActions.getDayInfoFailure(error)));
};

const addDayProduct = product => dispatch => {
	dispatch(userActions.addProductRequest());

	axios
		.post('/api/day/add', product)
		.then(({ data }) => dispatch(userActions.addProductSuccess(data)))
		.catch(error => dispatch(userActions.addProductFailure(error)));
};

const removeDayProduct = product => dispatch => {
	dispatch(userActions.removeProductRequest());

	axios
		.post('/api/day/delete', product)
		.then(({ data }) => dispatch(userActions.removeProductSuccess(data)))
		.catch(error => dispatch(userActions.removeProductFailure(error)));
};

const authOperations = {
	getCurrentUser,
	getDayInfo,
	addDayProduct,
	removeDayProduct,
};

export default authOperations;
