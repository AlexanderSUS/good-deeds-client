import type { PayloadAction } from '@reduxjs/toolkit';
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { AxiosError } from 'axios';

import type { LoginInput } from '../forms/FormLogin';
import type { RegisterInput } from '../forms/FormRegistration';
import AuthService from '../services/AuthService';
import { AsyncThunkConfig, TypedAxiosErrorResponseData } from '../types/store';
import { User } from '../types/user';

type AuthState = {
  user: User | null;
};

const authInitialState: AuthState = {
  user: null,
};

export const register = createAsyncThunk<User, RegisterInput, AsyncThunkConfig>(
  'auth/register',
  async (registerInput, { rejectWithValue }) => {
    try {
      const res = await AuthService.register(registerInput);

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

export const login = createAsyncThunk<User, LoginInput, AsyncThunkConfig>(
  'auth/login',
  async (loginInput, { rejectWithValue }) => {
    try {
      const res = await AuthService.login(loginInput);

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

export const logout = createAsyncThunk<void, void, AsyncThunkConfig>(
  'auth/logout',
  async (_, { rejectWithValue }) => {
    try {
      const res = await AuthService.logout();

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

export const refresh = createAsyncThunk<User, void, AsyncThunkConfig>(
  'auth/refresh',
  async (_, { rejectWithValue }) => {
    try {
      const res = await AuthService.refresh();

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

export const verify = createAsyncThunk<User, void, AsyncThunkConfig>(
  'auth/verify',
  async (_, { rejectWithValue }) => {
    try {
      const res = await AuthService.verify();

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

const slice = createSlice({
  name: 'auth',
  initialState: authInitialState,
  reducers: {
    setUser: (state, { payload } : PayloadAction<User>) => {
      state.user = payload;
    },
    logOut: (state) => {
      state.user = null;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(login.fulfilled, (state, { payload }) => {
      state.user = payload;
    });

    builder.addCase(verify.fulfilled, (state, { payload }) => {
      state.user = payload;
    });

    builder.addCase(refresh.fulfilled, (state, { payload }) => {
      state.user = payload;
    });

    builder.addCase(logout.fulfilled, (state) => {
      state.user = null;
    });
  },
});

export const { setUser } = slice.actions;

export default slice.reducer;

export const authSelector = (state: { authStore: AuthState }) => state.authStore;
