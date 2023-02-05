import { configureStore } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/query';

import authSliceReducer from './authSlice';
import notificationSliceReducer from './notificationSlice';

export const store = configureStore({
  reducer: {
    authStore: authSliceReducer,
    notificationStore: notificationSliceReducer,
  },
});

setupListeners(store.dispatch);

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
