import { ADD_TO_CART, REMOVE_FROM_CART, UPDATE_QUANTITY } from "./ItemsActions";

const initialState = [];

const itemsReducer = (state = initialState, action) => {
    switch(action.type){
        case ADD_TO_CART:
            return [...state, action.payload]

        case REMOVE_FROM_CART:
            return state.filter(item => item.id !== payload)
        
        default: 
            return state
    }
}

export default itemsReducer;