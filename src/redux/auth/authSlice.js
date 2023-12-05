import { createSlice } from '@reduxjs/toolkit';
import persistReducer from 'redux-persist/es/persistReducer';
import storage from 'redux-persist/lib/storage';
import { signIn, signOut, signUp } from './authOperations';

export const authSlice = createSlice({
  name: 'auth',
  initialState: {
    userData: {},
    isLoggedIn: false,
    isLoading: false,
    error: null,
  },
  extraReducers: (builder) => {
    builder
      .addCase(signIn.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(signIn.rejected, (state, { payload }) => {
        state.isLoading = false;
        state.error = payload;
      })
      .addCase(signIn.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.error = null;
        state.userData = payload;
        isLoggedIn = true;
      })
      .addCase(signUp.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(signUp.rejected, (state, { payload }) => {
        state.isLoading = false;
        state.error = payload;
      })
      .addCase(signUp.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.error = null;
        state.userData = payload;
        isLoggedIn = true;
      })
      .addCase(signOut.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(signOut.rejected, (state, { payload }) => {
        state.isLoading = false;
        state.error = payload;
      })
      .addCase(signOut.fulfilled, (state) => {
        state.isLoading = false;
        state.error = null;
        state.userData = {};
        isLoggedIn = false;
      });
  },
});

export const authReducer = persistReducer(
  {
    key: 'auth',
    storage,
    // whitelist: ['token'],
  },
  authSlice.reducer
);
