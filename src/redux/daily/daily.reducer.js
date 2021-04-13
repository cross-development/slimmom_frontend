//Core
import { combineReducers } from 'redux';
import { createReducer } from '@reduxjs/toolkit';
//Redux
import dailyActions from './daily.action';

const dailyRateInfo = createReducer(null, {
	[dailyActions.guestDailySuccess]: (state, { payload }) => payload,
	[dailyActions.userDailySuccess]: (state, { payload }) => payload,
});

const error = createReducer(null, {
	[dailyActions.guestDailyFailure]: (state, { payload }) => payload,
	[dailyActions.userDailyFailure]: (state, { payload }) => payload,
});

const loading = createReducer(false, {
	[dailyActions.guestDailyRequest]: () => true,
	[dailyActions.guestDailySuccess]: () => false,
	[dailyActions.guestDailyFailure]: () => false,

	[dailyActions.userDailyRequest]: () => true,
	[dailyActions.userDailySuccess]: () => false,
	[dailyActions.userDailyFailure]: () => false,
});

export default combineReducers({ dailyRateInfo, loading, error });
