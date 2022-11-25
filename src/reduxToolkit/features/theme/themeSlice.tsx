import {createSlice} from '@reduxjs/toolkit';

interface CounterState {
  color: string;
}

const initialState: CounterState = {
  color: 'red',
};

export const ThemeSlice = createSlice({
  name: 'theme',
  initialState,
  reducers: {
    changeFontColor: (state, action) => {
      state.color = action.payload;
    },
  },
});

export const {changeFontColor} = ThemeSlice.actions;

export default ThemeSlice.reducer;
