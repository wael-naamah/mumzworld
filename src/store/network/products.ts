import { createAsyncThunk } from '@reduxjs/toolkit';
import { fetchApi } from './api';

export const fetchProducts = createAsyncThunk(
  'products/fetchProducts',
  async () => {
    const data = await fetchApi('/product-list-large');
    return data;
  },
);

export const fetchProduct = createAsyncThunk(
  'products/fetchProduct',
  async (productId: string) => {
    console.log('productId', productId);
    // TODO: use the productId to fetch the product details
    const data = await fetchApi('/product');
    return data;
  },
);
