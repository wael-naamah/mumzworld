import { combineReducers } from '@reduxjs/toolkit';
import someSlice from './slices/someSlice';

const rootReducer = combineReducers({
  someSlice,
});

export default rootReducer;
