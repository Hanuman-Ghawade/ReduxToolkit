import {createSlice} from '@reduxjs/toolkit';
import {UsersData} from '../fakeData';

interface intitialType {
  value: {id: number; name: string; username: string}[];
}

const initialState: intitialType = {
  value: UsersData,
};

const userSlice = createSlice({
  name: 'Users',
  initialState,
  reducers: {
    addUsers: (state, action) => {
      state.value.push(action.payload);
    },
    deleteUser: (state, action) => {
      state.value = state.value.filter(user => user.id !== action.payload.id);
    },
    updatedUser: (state, action) => {
      state.value.map(user => {
        if (user.id === action.payload.id) {
          user.name = action.payload.name;
        }
      });
    },
  },
});

export const {addUsers, deleteUser, updatedUser} = userSlice.actions;
export default userSlice.reducer;
