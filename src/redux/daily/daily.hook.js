//Redux Custom Hooks
import {
	getConnectedStore,
	getConnectedActionHook,
	getConnectedEmptyActionHook,
} from 'services/reduxServices';

const useDailyRate = getConnectedStore('daily');
const useDailyRateAction = getConnectedActionHook();
const useDailyRateEmptyAction = getConnectedEmptyActionHook();

const dailyHooks = { useDailyRate, useDailyRateAction, useDailyRateEmptyAction };

export default dailyHooks;
