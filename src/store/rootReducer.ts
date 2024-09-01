import { combineReducers } from '@reduxjs/toolkit';
import productsSlice from './slices/productsSlice';

const rootReducer = combineReducers({
  productsSlice,
});

export default rootReducer;
