//Core
import axios from 'axios';
//Redux
import authActions from './auth.action';
//Services
import authService from 'services/authService';

//Axios defaults config
axios.defaults.baseURL = `https://slimmom-dvs-backend.herokuapp.com`;

const userSignUp = ({ username, email, password }) => dispatch => {
	dispatch(authActions.userSignUpRequest());

	axios
		.post('/api/auth/sign-up', { username, email, password })
		.then(() => dispatch(authActions.userSignUpSuccess()))
		.catch(error => dispatch(authActions.userSignUpFailure(error)));
};

const userSignIn = ({ email, password }) => dispatch => {
	dispatch(authActions.userSignInRequest());

	axios
		.post('/api/auth/sign-in', { email, password })
		.then(({ data }) => {
			authService.set(data.token);
			dispatch(authActions.userSignInSuccess(data));
		})
		.catch(error => dispatch(authActions.userSignInFailure(error)));
};

const userSighOut = () => dispatch => {
	dispatch(authActions.userSighOutRequest());

	axios
		.delete('/api/auth/sign-out')
		.then(() => {
			authService.unset();
			dispatch(authActions.userSighOutSuccess());
		})
		.catch(error => dispatch(authActions.userSighOutFailure(error)));
};

const authOperations = {
	userSignUp,
	userSignIn,
	userSighOut,
};

export default authOperations;
