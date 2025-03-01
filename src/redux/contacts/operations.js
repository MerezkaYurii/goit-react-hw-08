import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { api } from '../auth/operations';

// axios.defaults.baseURL = 'https://67b6d23407ba6e590841e826.mockapi.io';
// https://connections-api.goit.global/
// export const mapimockapi = axios.create({
//   baseURL: 'https://67b6d23407ba6e590841e826.mockapi.io',
// });

export const fetchData = createAsyncThunk(
  'contacts/fetchAll',
  async (_, thunkAPI) => {
    try {
      const { data } = await api.get('/contacts');
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const deleteContact = createAsyncThunk(
  'contacts/deleteContact',
  async (id, thunkAPI) => {
    try {
      await api.delete(`/contacts/${id}`);
      return id;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const addContact = createAsyncThunk(
  'contacts/addContact',
  async (body, thunkAPI) => {
    try {
      const { data } = await api.post(`/contacts`, body);
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
