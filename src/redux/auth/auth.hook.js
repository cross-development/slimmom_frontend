//Redux Custom Hooks
import {
	getConnectedStore,
	getConnectedActionHook,
	getConnectedEmptyActionHook,
} from 'services/reduxServices';

const useGetUser = getConnectedStore('auth');
const useUserAction = getConnectedActionHook();
const useUserEmptyAction = getConnectedEmptyActionHook();

const authHooks = { useGetUser, useUserAction, useUserEmptyAction };

export default authHooks;
