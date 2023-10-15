import { configureStore } from '@reduxjs/toolkit';
import goodsReducer from './features/GoodsSlice';
import detailReducer from './features/DetailSlice';
import cartReducer from './features/CartSlice';

export default configureStore({
    reducer: {
        goods: goodsReducer,
        detail: detailReducer,
        cart: cartReducer
    }
})