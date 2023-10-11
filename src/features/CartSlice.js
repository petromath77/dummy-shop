import { createSlice } from "@reduxjs/toolkit";

export const cartSlice = createSlice({
    name: 'cart',
    initialState: {
        cart: [],
    },
    reducers: {
        addCart: (state, action) => {
            const cartIndex = state.cart.findIndex( item => item.id === action.payload.id);

            if(cartIndex >= 0 ) {
                state.cart[cartIndex].cartQuantity += 1;
            } else {
                state.cart.push({...action.payload, cartQuantity: 1});
            }
        },
    },
})

export const { addCart } = cartSlice.actions

export default cartSlice.reducer