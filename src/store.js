import { configureStore } from '@reduxjs/toolkit';
import goodsReducer from './features/GoodsSlice';
import detailReducer from './features/DetailSlice';

export default configureStore({
    reducer: {
        goods: goodsReducer,
        detail: detailReducer
    }
})