import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const fetchAllGoods = createAsyncThunk(
    'goods/fetchAllGoods',
    async(_, {rejectWithValue}) => {
        try {
            const response = await fetch('https://fakestoreapi.com/products');
            const data = response.json();

            return data;
            
        } catch (error) {
           return rejectWithValue(error.message); 
        }
    }
)

const setError = (state, action) => {
    state.status = 'rejected';
    state.error = action.payload;
}

export const goodsSlice = createSlice({
    name: 'goods',
    initialState: {
        goods: [],
        status: null,
        error: null
    },
    reducers: {

    },
    extraReducers(builder) {
        builder
          .addCase(fetchAllGoods.pending, (state) => {
            state.status = 'loading';
          })
          .addCase(fetchAllGoods.fulfilled, (state, action) => {
            state.status = 'succeeded';
            state.goods = action.payload;
          })
          .addCase(fetchAllGoods.rejected, setError)
    }
})

export default goodsSlice.reducer