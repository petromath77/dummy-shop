import { createSlice } from "@reduxjs/toolkit";

export const cartSlice = createSlice({
    name: 'cart',
    initialState: {
        cart: [],
    },
    reducers: {
        addCart: (state, action) => {
            const cartIndex = state.cart.findIndex( (item) => item.id === action.payload.id);

            if(cartIndex >= 0 ) {
                state.cart[cartIndex].cartQuantity += 1;
            } else {
                state.cart.push({...action.payload, cartQuantity: 1});
            }
        },
        increaseQuantity: (state, action) => {
            const cartIndex = state.cart.findIndex( (item) => item.id === action.payload.id);

            state.cart[cartIndex].cartQuantity += 1;
        },
        decreaseQuantity: (state, action) => {
            const cartIndex = state.cart.findIndex( (item) => item.id === action.payload.id);
            
            if(state.cart[cartIndex].cartQuantity > 1) {
                state.cart[cartIndex].cartQuantity -= 1;
            } else if(state.cart[cartIndex].cartQuantity === 1) {
                const leftItems = state.cart.filter( (item) => item.id !== action.payload.id);
                state.cart = leftItems;
            }
        },
        removeItem: (state, action) => {
                const leftItems = state.cart.filter( (item) => item.id !== action.payload.id);
                state.cart = leftItems;
        }
    },
})

export const { addCart, increaseQuantity, decreaseQuantity, removeItem } = cartSlice.actions

export default cartSlice.reducer