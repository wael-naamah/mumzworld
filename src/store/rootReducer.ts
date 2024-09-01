import { combineReducers } from '@reduxjs/toolkit';
import productsSlice from './slices/productsSlice';
import productSlice from './slices/productSlice';

const rootReducer = combineReducers({
  productsSlice,
  productSlice,
});

export default rootReducer;
