//Redux Custom Hooks
import {
	getConnectedStore,
	getConnectedActionHook,
	getConnectedEmptyActionHook,
} from 'services/reduxServices';

const useDayRate = getConnectedStore('day');
const useDayRateAction = getConnectedActionHook();
const useDayRateEmptyAction = getConnectedEmptyActionHook();

const dayHooks = { useDayRate, useDayRateAction, useDayRateEmptyAction };

export default dayHooks;
