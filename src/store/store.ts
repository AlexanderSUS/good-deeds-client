import { configureStore } from '@reduxjs/toolkit';

import authSliceReducer from './authSlice';
import deedsSliceReducer from './deedsSlice';
import notificationSliceReducer from './notificationSlice';

export const store = configureStore({
  reducer: {
    authStore: authSliceReducer,
    deedsStore: deedsSliceReducer,
    notificationStore: notificationSliceReducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
