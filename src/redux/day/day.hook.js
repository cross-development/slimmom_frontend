//Redux Custom Hooks
import {
	getConnectedStore,
	getConnectedActionHook,
	getConnectedEmptyActionHook,
} from 'services/reduxServices';

const useDayInfo = getConnectedStore('day');
const useDayInfoAction = getConnectedActionHook();
const useDayInfoEmptyAction = getConnectedEmptyActionHook();

const dayHooks = { useDayInfo, useDayInfoAction, useDayInfoEmptyAction };

export default dayHooks;
