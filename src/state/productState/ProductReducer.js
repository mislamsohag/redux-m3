import { actionTypes } from "./actionTypes";

export const initialaState = {
    loading: false,
    products: [],
    error: false,
    cart: [],
    // Aita kora Baki Ace
    wishLisht: [],
};

export const productReducer = (state, action) => {
    switch (action.type) {
        case actionTypes.FETCHING_START:
            return {
                ...state,
                loading: true,
                error: false,
            };
        case actionTypes.FETCHING_SUCCESS:
            return {
                ...state,
                loading: false,
                products: action.payload,
                error: false,
            };
        case actionTypes.FETCHING_ERROR:
            return {
                ...state,
                loading: false,
                error: true,
            };
        case actionTypes.ADD_TO_CART:
            return {
                ...state,
                cart: [...state.cart, action.payload],
            };

        // Aita kora baki ace
        case actionTypes.REMOVE_FROM_CART:
            return {
                ...state,
                wishLisht: [...state.wishLisht, action.payload],
            };

        default:
            return state;
    }
};