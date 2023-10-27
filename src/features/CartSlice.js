import { createSlice } from "@reduxjs/toolkit";

export const cartSlice = createSlice({
    name: 'cart',
    initialState: {
        carts: localStorage.getItem("carts")
                    ? JSON.parse(localStorage.getItem("carts"))
                    : [],
        totalQuantity: 0,
        totalAmount: 0
    },
    reducers: {
        addCart: (state, action) => {
            const cartIndex = state.carts.findIndex( (item) => item.id === action.payload.id);

            if(cartIndex >= 0 ) {
                state.carts[cartIndex].cartQuantity += 1;
            } else {
                state.carts.push({...action.payload, cartQuantity: 1});
            }
            localStorage.setItem("carts", JSON.stringify(state.carts));
        },
        increaseQuantity: (state, action) => {
            const cartIndex = state.carts.findIndex( (item) => item.id === action.payload.id);

            state.carts[cartIndex].cartQuantity += 1;
            localStorage.setItem("carts", JSON.stringify(state.carts));
        },
        decreaseQuantity: (state, action) => {
            const cartIndex = state.carts.findIndex( (item) => item.id === action.payload.id);
            
            if(state.carts[cartIndex].cartQuantity > 1) {
                state.carts[cartIndex].cartQuantity -= 1;
            } else if(state.carts[cartIndex].cartQuantity === 1) {
                const leftItems = state.carts.filter( (item) => item.id !== action.payload.id);
                state.carts = leftItems;
            }
            localStorage.setItem("carts", JSON.stringify(state.carts));
        },
        removeItem: (state, action) => {
                const leftItems = state.carts.filter( (item) => item.id !== action.payload.id);
                state.carts = leftItems;
                localStorage.setItem("carts", JSON.stringify(state.carts));
        },
        clearCart: (state, action) => {
            state.carts = [];
            localStorage.setItem("carts", JSON.stringify(state.carts));
        }
    },
})

export const { addCart, increaseQuantity, decreaseQuantity, removeItem, clearCart } = cartSlice.actions

export default cartSlice.reducer