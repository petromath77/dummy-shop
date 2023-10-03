import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const fetchJeweleryGoods = createAsyncThunk(
    'jewelery/fetchJeweleryGoods',
    async(_, {rejectWithValue}) => {
        try {
            const response = await fetch('https://fakestoreapi.com/products/category/jewelery');
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

export const jewelerySlice = createSlice({
    name: 'jewelery',
    initialState: {
        goods: [],
        status: null,
        error: null
    },
    reducers: {

    },
    extraReducers(builder) {
        builder
          .addCase(fetchJeweleryGoods.pending, (state) => {
            state.status = 'loading';
          })
          .addCase(fetchJeweleryGoods.fulfilled, (state, action) => {
            state.status = 'succeeded';
            state.goods = action.payload;
          })
          .addCase(fetchJeweleryGoods.rejected, setError)
    }
})

export default jewelerySlice.reducer