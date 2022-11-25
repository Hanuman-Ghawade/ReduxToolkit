import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';
import axios from 'axios';
import {useSelector} from 'react-redux';

export const getPhotos = createAsyncThunk(
  'photos/getPhotos',
  async getState => {
    try {
      const response = await axios.get(
        'https://picsum.photos/v2/list?page=3&limit=15',
      );
      const data = response.data;
      return data;
    } catch (error) {
      console.log('Data Fetching failed');
    }
  },
);

interface initialStateType {
  photos: any[];
  isLoading: boolean;
}

const initialState: initialStateType = {
  photos: [],
  isLoading: false,
};

const gallarySlice = createSlice({
  name: 'gallary',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder.addCase(getPhotos.pending, state => {
      state.isLoading = true;
    });
    builder.addCase(getPhotos.fulfilled, (state, action) => {
      state.isLoading = false;
      state.photos = action.payload;
    });
    builder.addCase(getPhotos.rejected, state => {
      state.isLoading = false;
    });
  },
});
export default gallarySlice.reducer;
