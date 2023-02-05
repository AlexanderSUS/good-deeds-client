import {
  createSlice, isFulfilled, isPending, isRejected,
} from '@reduxjs/toolkit';

type NotificationState = {
  isLoading: boolean;
};

const notificationInitialState: NotificationState = {
  isLoading: false,
};

const notificationSlice = createSlice({
  name: 'notification',
  initialState: notificationInitialState,
  reducers: { },
  extraReducers: (builder) => {
    builder.addMatcher(isPending, (state) => {
      state.isLoading = true;
    });

    builder.addMatcher(isRejected, (state) => {
      state.isLoading = false;
    });

    builder.addMatcher(isFulfilled, (state) => {
      state.isLoading = false;
    });
  },
});

export default notificationSlice.reducer;

export const notificationSelector = (state: {
  notificationStore: NotificationState }) => state.notificationStore;
