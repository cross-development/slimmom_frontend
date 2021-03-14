//Core
import axios from 'axios';
//Redux
import dailyActions from './daily.action';

const guestDailyRate = guestCredentials => dispatch => {
	dispatch(dailyActions.guestDailyRequest());

	axios
		.post('/api/daily-rate/', guestCredentials)
		.then(({ data }) => dispatch(dailyActions.guestDailySuccess(data)))
		.catch(error => dispatch(dailyActions.guestDailyFailure(error)));
};

const userDailyRate = (userCredentials, userId) => dispatch => {
	dispatch(dailyActions.userDailyRequest());

	axios
		.post(`/api/daily-rate/${userId}`, userCredentials)
		.then(({ data }) => dispatch(dailyActions.userDailySuccess(data)))
		.catch(error => dispatch(dailyActions.userDailyFailure(error)));
};

const dailyOperations = { guestDailyRate, userDailyRate };

export default dailyOperations;
