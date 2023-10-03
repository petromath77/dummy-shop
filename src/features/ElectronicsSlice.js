import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const fetchElectronicsGoods = createAsyncThunk(
    'electronics/fetchElectronicsGoods',
    async(_, {rejectWithValue}) => {
        try {
            const response = await fetch('https://fakestoreapi.com/products/category/electronics');
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

export const electronicsSlice = createSlice({
    name: 'electronics',
    initialState: {
        goods: [],
        status: null,
        error: null
    },
    reducers: {

    },
    extraReducers(builder) {
        builder
          .addCase(fetchElectronicsGoods.pending, (state) => {
            state.status = 'loading';
          })
          .addCase(fetchElectronicsGoods.fulfilled, (state, action) => {
            state.status = 'succeeded';
            state.goods = action.payload;
          })
          .addCase(fetchElectronicsGoods.rejected, setError)
    }
})

export default electronicsSlice.reducer