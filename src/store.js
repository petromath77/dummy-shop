import { configureStore } from '@reduxjs/toolkit';
import goodsReducer from './features/GoodsSlice';
import detailReducer from './features/DetailSlice';
import menGoodsReducer from './features/MenGoodsSlice';
import womenGoodsReducer from './features/WomenGoodsSlice';
import electronicsGoodsReducer from './features/ElectronicsSlice';
import jeweleryGoodsReducer from './features/JewelerySlice';
import cartReducer from './features/CartSlice';

export default configureStore({
    reducer: {
        goods: goodsReducer,
        mens: menGoodsReducer,
        womens: womenGoodsReducer,
        electronics: electronicsGoodsReducer,
        jewelery: jeweleryGoodsReducer,
        detail: detailReducer,
        cart: cartReducer
    }
})