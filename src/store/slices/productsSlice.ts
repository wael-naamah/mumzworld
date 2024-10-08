import { createSlice } from '@reduxjs/toolkit';
import { fetchProducts } from '../network';
import { ProductListResponse } from '@/src/types/apiTypes';

interface initialState {
  data: ProductListResponse | null;
  status: string;
  error: string | null;
}

const initialState: initialState = {
  data: null,
  status: 'idle',
  error: null,
};

const productsSlice = createSlice({
  name: 'products',
  initialState: initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchProducts.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchProducts.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.data = action.payload;
      })
      .addCase(fetchProducts.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message || 'Something went wrong';
      });
  },
});

export default productsSlice.reducer;
