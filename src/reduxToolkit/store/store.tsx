import {configureStore} from '@reduxjs/toolkit';
import CountSlice from '../features/count/countSlice';
import ThemeSlice from '../features/theme/themeSlice';

const store = configureStore({
  reducer: {
    counter: CountSlice,
    theme: ThemeSlice,
  },
});

export default store;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
