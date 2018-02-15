import { ADD_TO_CART, DELETE_FROM_CART } from "../actionType";
 
export default function cartReducer(state=[], action) {
    switch(action.type){
        case ADD_TO_CART:   
            var existingIndex = findProductIndex(state, action.cart._id);
            if (existingIndex !== -1) {
                alert("Item Already present in Cart!!!");
            }
            else{
                return state.concat(action.cart);
            }
            return state;

         case DELETE_FROM_CART:
            let indexToDel = findProductIndex(state, action._id);
        return [...state.slice(0, indexToDel), ...state.slice(indexToDel+1)];
            
        default:
            return state;
    }

    function findProductIndex(products, id) {
        return products.findIndex((p) => p._id === id)
    }
}