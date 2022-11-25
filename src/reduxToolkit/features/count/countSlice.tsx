import {createSlice} from '@reduxjs/toolkit';

interface CounterState {
  count: number;
}

const initialState: CounterState = {
  count: 0,
};

export const CountSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    increment: (state, action) => {
      state.count += action.payload;
    },
    decrement: state => {
      state.count -= 1;
    },
    incrementByAmount: (state, action) => {
      state.count += action.payload;
    },
  },
});

export const {increment, decrement, incrementByAmount} = CountSlice.actions;

export default CountSlice.reducer;
