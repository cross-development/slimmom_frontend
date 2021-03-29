//Core
import axios from 'axios';
//Redux
import dayActions from './day.action';

const addDayProduct = product => dispatch => {
	dispatch(dayActions.addProductRequest());

	axios
		.post('/api/day/add', product)
		.then(({ data }) => dispatch(dayActions.addProductSuccess(data)))
		.catch(error => dispatch(dayActions.addProductFailure(error)));
};

const removeDayProduct = product => dispatch => {
	dispatch(dayActions.removeProductRequest());

	axios
		.post('/api/day/delete', product)
		.then(({ data }) => dispatch(dayActions.removeProductSuccess(data)))
		.catch(error => dispatch(dayActions.removeProductFailure(error)));
};

const getDayInfo = date => dispatch => {
	dispatch(dayActions.getDayInfoRequest());

	axios
		.post('/api/day/info', date)
		.then(({ data }) => dispatch(dayActions.getDayInfoSuccess(data)))
		.catch(error => dispatch(dayActions.getDayInfoFailure(error)));
};

const dayOperations = { addDayProduct, removeDayProduct, getDayInfo };

export default dayOperations;
