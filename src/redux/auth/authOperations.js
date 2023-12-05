import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

const $axios = axios.create({
  baseURL: 'http://localhost:3000/api',
});

const token = {
  set(token) {
    $axios.defaults.headers.common.Authorization = `Bearer ${token}`;
  },
  unset() {
    $axios.defaults.headers.common.Authorization = '';
  },
};

export const signIn = createAsyncThunk('auth/signIn', async (user, thunkAPI) => {
  try {
    const { data } = await $axios.post('/auth/sign-in', user);
    token.set(data.token);
    return data;
  } catch (error) {
    return thunkAPI.rejectWithValue(error);
  }
});

export const signUp = createAsyncThunk('auth/signUp', async (user, thunkAPI) => {
  try {
    const { data } = await $axios.post('/auth/sign-up', user);
    if (data?.token) token.set(data.token);
    return data;
  } catch (error) {
    return thunkAPI.rejectWithValue(error);
  }
});

export const signOut = createAsyncThunk('auth/signOut', async (_, thunkAPI) => {
  try {
    await $axios.post('/auth/sign-out');
    token.unset();
  } catch (error) {
    return thunkAPI.rejectWithValue(error);
  }
});
