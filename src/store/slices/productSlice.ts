import { createSlice } from '@reduxjs/toolkit';
import { fetchProduct } from '../network';
import { ProductResponse } from '@/src/types/apiTypes';

interface initialState {
  data: ProductResponse | null;
  status: string;
  error: string | null;
}

const initialState: initialState = {
  data: null,
  status: 'idle',
  error: null,
};

const productsSlice = createSlice({
  name: 'productDetails',
  initialState: initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchProduct.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchProduct.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.data = action.payload;
      })
      .addCase(fetchProduct.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message || 'Something went wrong';
      });
  },
});

export default productsSlice.reducer;
