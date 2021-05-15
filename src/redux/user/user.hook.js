//Redux Custom Hooks
import {
	getConnectedStore,
	getConnectedActionHook,
	getConnectedEmptyActionHook,
} from 'services/reduxServices';

const useGetUser = getConnectedStore('user');
const useUserAction = getConnectedActionHook();
const useUserEmptyAction = getConnectedEmptyActionHook();

const userHooks = { useGetUser, useUserAction, useUserEmptyAction };

export default userHooks;
