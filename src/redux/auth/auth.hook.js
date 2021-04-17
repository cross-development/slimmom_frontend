//Redux Custom Hooks
import {
	getConnectedStore,
	getConnectedActionHook,
	getConnectedEmptyActionHook,
} from 'services/reduxServices';

const useGetAuth = getConnectedStore('auth');
const useAuthAction = getConnectedActionHook();
const useAuthEmptyAction = getConnectedEmptyActionHook();

const authHooks = { useGetAuth, useAuthAction, useAuthEmptyAction };

export default authHooks;
