import { ADD_TO_CART, REMOVE_FROM_CART, UPDATE_QUANTITY } from "./ItemsActions";

export function addToCart(item){
    return{
        type: ADD_TO_CART,
        payload: item
    }
}

export function removeFromCart(id){
    return{
        type: REMOVE_FROM_CART,
        payload: id
    }
}

export function updateQuantity(change){
    return{
        type: UPDATE_QUANTITY,
        payload: change
    }
}