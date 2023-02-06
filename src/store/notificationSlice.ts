import {
  createSlice, isFulfilled, isPending, isRejected,
} from '@reduxjs/toolkit';

import { isAuthAction } from './utils';

type NotificationState = {
  isLoading: boolean;
};

const initialState: NotificationState = {
  isLoading: false,
};

const notificationSlice = createSlice({
  name: 'notification',
  initialState,
  reducers: { },
  extraReducers: (builder) => {
    builder.addMatcher(isPending, (state, action) => {
      if (isAuthAction(action)) {
        state.isLoading = true;
      }
    });

    builder.addMatcher(isRejected, (state, action) => {
      if (isAuthAction(action)) {
        state.isLoading = false;
      }
    });

    builder.addMatcher(isFulfilled, (state, action) => {
      if (isAuthAction(action)) {
        state.isLoading = false;
      }
    });
  },
});

export default notificationSlice.reducer;

export const notificationSelector = (state: {
  notificationStore: NotificationState }) => state.notificationStore;
