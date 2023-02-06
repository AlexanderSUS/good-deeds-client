import { isAsyncThunkAction } from '@reduxjs/toolkit';

import {
  login, logout, refresh, register, verify,
} from './authSlice';
import {
  createGoodDeed, deleteDeed, getDeedById, getDeeds, updateDeed,
} from './deedsSlice';

export const isAuthAction = isAsyncThunkAction(
  register,
  login,
  verify,
  refresh,
  logout,
);

export const isNoNotificationAction = isAsyncThunkAction(
  getDeedById,
  getDeeds,
);

export const isInfoAction = isAsyncThunkAction(
  deleteDeed,
);

export const isSuccessAction = isAsyncThunkAction(
  createGoodDeed,
  updateDeed,
);
