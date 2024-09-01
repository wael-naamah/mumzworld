import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  value: 0,
};

const someSlice = createSlice({
  name: 'someSlice',
  initialState,
  reducers: {
    increment: (state) => {
      state.value += 1;
    },
    decrement: (state) => {
      state.value -= 1;
    },
  },
});

export const { increment, decrement } = someSlice.actions;
export default someSlice.reducer;
