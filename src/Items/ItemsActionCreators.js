import { ADD_TO_CART, REMOVE_FROM_CART, UPDATE_QUANTITY } from "./ItemsActions";

export function addToCart(){
    return{
        type: ADD_TO_CART
    }
}

export function removeFromCart(){
    return{
        type: REMOVE_FROM_CART
    }
}

export function updateQuantity(){
    return{
        type: UPDATE_QUANTITY
    }
}