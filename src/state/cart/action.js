import { ADD_TO_CART, DELETE_FROM_CART } from "../actionType";

export function addToCart({_id=1, image, name, price, description, units=1}) {
    return {
        type: ADD_TO_CART,
        cart: {_id, image, name, price, description, units}
    }
}
export function deleteFromCart(_id) {
    console.log(_id);
    return {
        type: DELETE_FROM_CART,
        _id: _id
    }
}
