import { DEFAULT_LANGUAGE } from '@/src/locales/i18n';
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  currentLang: DEFAULT_LANGUAGE,
};

const someSlice = createSlice({
  name: 'localesSlice',
  initialState,
  reducers: {
    setCurrentLanguage: (state, action) => {
      state.currentLang = action.payload;
    },
  },
});

export const { setCurrentLanguage } = someSlice.actions;
export default someSlice.reducer;
