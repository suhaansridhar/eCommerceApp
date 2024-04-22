import { ADD_TO_CART, REMOVE_FROM_CART, UPDATE_QUANTITY } from "./ItemsActions";

const initialState = [];

const itemsReducer = (state = initialState, action) => {
    switch(action.type){
        case ADD_TO_CART:
            return [...state, ]

        case REMOVE_FROM_CART:
            return state.filter()
        
        default: 
            return state
    }
}

export default itemsReducer;