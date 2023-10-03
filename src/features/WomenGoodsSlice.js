import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const fetchWomenGoods = createAsyncThunk(
    'womens/fetchWomenGoods',
    async(_, {rejectWithValue}) => {
        try {
            const response = await fetch(`https://fakestoreapi.com/products/category/women's%20clothing`);
            const data = response.json();

            return data;
            
        } catch (error) {
           return rejectWithValue(error.message); 
        }
    }
)

const setError = (state, action) => {
    state.status = 'rejected';
    state.error = action.error
}

export const womenGoodsSlice = createSlice({
    name: 'womens',
    initialState: {
        goods: [],
        status: null,
        error: null
    },
    reducers: {

    },
    extraReducers(builder) {
        builder
          .addCase(fetchWomenGoods.pending, (state) => {
            state.status = 'loading';
          })
          .addCase(fetchWomenGoods.fulfilled, (state, action) => {
            state.status = 'succeeded';
            state.goods = action.payload;
          })
          .addCase(fetchWomenGoods.rejected, setError)
    }
})

export default womenGoodsSlice.reducer