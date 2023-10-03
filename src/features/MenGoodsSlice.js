import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const fetchMenGoods = createAsyncThunk(
    'mens/fetchMenGoods',
    async(_, {rejectWithValue}) => {
        try {
            const response = await fetch(`https://fakestoreapi.com/products/category/men's%20clothing`);
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

export const menGoodsSlice = createSlice({
    name: 'mens',
    initialState: {
        goods: [],
        status: null,
        error: null
    },
    reducers: {

    },
    extraReducers(builder) {
        builder
          .addCase(fetchMenGoods.pending, (state) => {
            state.status = 'loading';
          })
          .addCase(fetchMenGoods.fulfilled, (state, action) => {
            state.status = 'succeeded';
            state.goods = action.payload;
          })
          .addCase(fetchMenGoods.rejected, setError)
    }
})

export default menGoodsSlice.reducer