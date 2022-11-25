import {configureStore} from '@reduxjs/toolkit';
import galaryReducer from '../gallary/gallarySlice';

const store = configureStore({
  reducer: {
    gallary: galaryReducer,
  },
});

export default store;
export type RootState = ReturnType<typeof store.getState>;
