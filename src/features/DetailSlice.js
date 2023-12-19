import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const fetchDetail = createAsyncThunk(
    'detail/fetchDetail',
    async(id, {rejectWithValue}) => {
        try {
            const response = await fetch(`https://fakestoreapi.com/products/${id}`);
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

export const detailSlice = createSlice({
    name: 'detail',
    initialState: {
        product: {},
        status: null,
        error: null
    },
    reducers: {

    },
    extraReducers(builder) {
        builder
          .addCase(fetchDetail.pending, (state) => {
            state.status = 'loading';
          })
          .addCase(fetchDetail.fulfilled, (state, action) => {
            state.status = 'succeeded';
            state.product = action.payload;
          })
          .addCase(fetchDetail.rejected, setError)
    }
})

export default detailSlice.reducer