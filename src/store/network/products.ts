import { createAsyncThunk } from '@reduxjs/toolkit';
import { fetchApi } from './api';

export const fetchProducts = createAsyncThunk('products/fetchProducts', async () => {
  const data = await fetchApi('/product-list-large');
  return data;
});
