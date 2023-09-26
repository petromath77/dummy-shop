import { configureStore } from '@reduxjs/toolkit';
import goodsReducer from './features/GoodsSlice';

export default configureStore({
    reducer: {
        goods: goodsReducer
    }
})