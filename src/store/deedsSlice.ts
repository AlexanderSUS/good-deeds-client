/* eslint-disable no-underscore-dangle */
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { AxiosError } from 'axios';

import { unauthenticatedException } from '../constants/common';
import type { CreateDeedInput } from '../forms/FormCreateGoodDeed/FormCreateGoodDeed';
import DeedsService from '../services/DeedsService';
import { GoodDeed, GoodDeedUpdateData } from '../types/deed';
import { AsyncThunkConfig, AsyncThunkWithMeta, TypedAxiosErrorResponseData } from '../types/store';

type DeedsState = {
  deeds: GoodDeed[];
  deed: GoodDeed | null;
};

const initialState: DeedsState = {
  deeds: [],
  deed: null,
};

export const createGoodDeed = createAsyncThunk<GoodDeed, CreateDeedInput, AsyncThunkConfig>(
  'deeds/create',
  async (deedInput, { getState, rejectWithValue }) => {
    const { user } = getState().authStore;

    if (!user) {
      return rejectWithValue(unauthenticatedException);
    }

    try {
      const res = await DeedsService.create(user._id, deedInput);

      return res.data;
    } catch (err) {
      const error = err as AxiosError;

      if (!error.response) {
        throw err;
      }

      return rejectWithValue(error.response.data as TypedAxiosErrorResponseData);
    }
  },
);

export const getDeeds = createAsyncThunk<GoodDeed[], void, AsyncThunkConfig>(
  'deeds/getAll',
  async (_, { getState, rejectWithValue }) => {
    const { user } = getState().authStore;

    if (!user) {
      return rejectWithValue(unauthenticatedException);
    }

    try {
      const res = await DeedsService.getAll(user._id);

      return res.data;
    } catch (err) {
      const error = err as AxiosError;

      if (!error.response) {
        throw err;
      }

      return rejectWithValue(error.response.data as TypedAxiosErrorResponseData);
    }
  },
);

export const getDeedById = createAsyncThunk<GoodDeed, string, AsyncThunkConfig>(
  'deeds/getById',
  async (deedId, { getState, rejectWithValue }) => {
    const { user } = getState().authStore;

    if (!user) {
      return rejectWithValue(unauthenticatedException);
    }

    try {
      const res = await DeedsService.getById(user._id, deedId);

      return res.data;
    } catch (err) {
      const error = err as AxiosError;

      if (!error.response) {
        throw err;
      }

      return rejectWithValue(error.response.data as TypedAxiosErrorResponseData);
    }
  },
);

export const updateDeed = createAsyncThunk<GoodDeed, GoodDeedUpdateData, AsyncThunkConfig>(
  'deeds/update',
  async ({ _id, ...updateData }, { getState, rejectWithValue }) => {
    const { user } = getState().authStore;

    if (!user) {
      return rejectWithValue(unauthenticatedException);
    }

    try {
      const res = await DeedsService.update(user._id, _id, updateData);

      return res.data;
    } catch (err) {
      const error = err as AxiosError;

      if (!error.response) {
        throw err;
      }

      return rejectWithValue(error.response.data as TypedAxiosErrorResponseData);
    }
  },
);

export const deleteDeed = createAsyncThunk<undefined, string, AsyncThunkWithMeta>(
  'deeds/delete',
  async (deedId, { getState, rejectWithValue, fulfillWithValue }) => {
    const { user } = getState().authStore;

    if (!user) {
      return rejectWithValue(unauthenticatedException);
    }

    try {
      await DeedsService.delete(user._id, deedId);

      return fulfillWithValue(undefined, [deedId]);
    } catch (err) {
      const error = err as AxiosError;

      if (!error.response) {
        throw err;
      }

      return rejectWithValue(error.response.data as TypedAxiosErrorResponseData);
    }
  },
);

const deedsSlice = createSlice({
  name: 'deeds',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(createGoodDeed.fulfilled, (state, { payload }) => {
      state.deeds = [payload, ...state.deeds];
    });

    builder.addCase(getDeeds.fulfilled, (state, { payload }) => {
      state.deeds = payload;
    });

    builder.addCase(getDeedById.fulfilled, (state, { payload }) => {
      state.deed = payload;
    });

    builder.addCase(updateDeed.fulfilled, (state, { payload }) => {
      state.deeds = [...state.deeds.filter(({ _id }) => _id !== payload._id), payload];
    });

    builder.addCase(deleteDeed.fulfilled, (state, { meta }) => {
      state.deeds = [...state.deeds.filter(({ _id }) => _id !== meta[0])];
    });
  },
});

export default deedsSlice.reducer;

export const deedsSelector = (state: { deedsStore: DeedsState }) => state.deedsStore;
