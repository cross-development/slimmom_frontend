//Redux Custom Hooks
import {
	getConnectedStore,
	getConnectedActionHook,
	getConnectedEmptyActionHook,
} from 'services/reduxServices';

const useGetUser = getConnectedStore('auth');
const useUserAction = getConnectedActionHook();
const useUserEmptyAction = getConnectedEmptyActionHook();

export { useGetUser, useUserAction, useUserEmptyAction };
