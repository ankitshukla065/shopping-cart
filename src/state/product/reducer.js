import { FETCH_PRODUCTS } from "../actionType";
import * as productApi from '../../lib/product/api';

const initialState = {
    products: []
}; 
 
export default (state = initialState, action) => {
    switch(action.type){
        case FETCH_PRODUCTS:
            var productList = productApi.fetchAll();
            return {
                ...state,
                products: productList,
            };

            
        default:
            return state;
    }
}