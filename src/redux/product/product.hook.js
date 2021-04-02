//Redux Custom Hooks
import {
	getConnectedStore,
	getConnectedActionHook,
	getConnectedEmptyActionHook,
} from 'services/reduxServices';

const useProductsState = getConnectedStore('product');
const useFindProductsAction = getConnectedActionHook();
const useFindProductsEmptyAction = getConnectedEmptyActionHook();

const productHooks = { useProductsState, useFindProductsAction, useFindProductsEmptyAction };

export default productHooks;
