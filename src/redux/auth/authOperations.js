import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

const $axios = axios.create({
  baseURL: 'http://localhost:3000/api',
});

export const signIn = createAsyncThunk('auth/signIn', async (user, thunkAPI) => {
  try {
    const { data } = await $axios.post('/auth/sign-in', user);
    console.log(data);
    return data;
  } catch (error) {
    return thunkAPI.rejectWithValue(error);
  }
});

export const signUp = createAsyncThunk('auth/signUp', async (user, thunkAPI) => {
  try {
    const { data } = await $axios.post('/auth/sign-up', user);
    console.log(data);
    return data;
  } catch (error) {
    return thunkAPI.rejectWithValue(error);
  }
});

export const signOut = createAsyncThunk('auth/signOut', async (_, thunkAPI) => {
  try {
    await $axios.post('/auth/sign-out');
  } catch (error) {
    return thunkAPI.rejectWithValue(error);
  }
});
