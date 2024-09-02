import { combineReducers } from '@reduxjs/toolkit';
import productsSlice from './slices/productsSlice';
import productSlice from './slices/productSlice';
import localesSlice from './slices/localesSlice';

const rootReducer = combineReducers({
  productsSlice,
  productSlice,
  localesSlice,
});

export default rootReducer;
