import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';
import axios from 'axios';

export const signUpUser = createAsyncThunk('signUpUser', async body => {
  try {
    const response = await axios.post('', {name, email, password});
    const data = response.data;
    return await data;
  } catch (error) {
    console.log('Data Fetching failed');
  }
});

interface initialStateType {
  msg: string;
  user: string;
  token: string;
  loading: boolean;
  error: string;
}

const initialState: initialStateType = {
  msg: '',
  user: '',
  token: '',
  loading: false,
  error: '',
};

const authSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder.addCase(signUpUser.pending, state => {
      state.loading = true;
    });
    builder.addCase(signUpUser.fulfilled, (state, action) => {
      state.error = action.payload;
      state.msg = action.payload;
    });
    builder.addCase(signUpUser.rejected, state => {
      state.loading = true;
    });
  },
});

export default authSlice.reducer;
