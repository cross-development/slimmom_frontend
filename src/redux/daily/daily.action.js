//Core
import { createAction } from '@reduxjs/toolkit';

const guestDailyRequest = createAction('daily/guestDailyRequest');
const guestDailySuccess = createAction('daily/guestDailySuccess');
const guestDailyFailure = createAction('daily/guestDailyFailure');

const userDailyRequest = createAction('daily/userDailyRequest');
const userDailySuccess = createAction('daily/userDailySuccess');
const userDailyFailure = createAction('daily/userDailyFailure');

const dailyActions = {
	guestDailyRequest,
	guestDailySuccess,
	guestDailyFailure,

	userDailyRequest,
	userDailySuccess,
	userDailyFailure,
};

export default dailyActions;
