/* eslint-disable */
import { createSlice } from '@reduxjs/toolkit';
import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from 'axios';
const reciver = 'https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/ZEAeqeXuXcX9bQfaMnAJ/books'

export const getBookAsync = createAsyncThunk('book/gethBooks', async () => {
  try {
    const response = await axios.get(reciver);
    return response.data;
  } catch (error) {
    return error;
  }
});

export const deleteBookAsync = createAsyncThunk('book/deleteBook', async (id) => {
  try {
    const response = await axios.delete(`https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/ZEAeqeXuXcX9bQfaMnAJ/books/${id}`,
    {method:'DELETE'});
    return response;
  } catch (error) {
    return error;
  }
});

export const addBookAsync = createAsyncThunk('book/addBook', async (book) => {
  try {
    const response = await axios.post(reciver, book);
    return response.data;
  } catch (error) {
    return error;
  }
});

const initialState = {
  loading: false,
  book: [],
  error: '',
  success: false
}


const BookSlice = createSlice({
  name: 'book',
  initialState,
  reducers: {
    addBook: (state, {payload}) => {
      state.book.push({
        item_id: payload.item_id,
        title: payload.title,
        author: payload.author,
        category: payload.category,
      });
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getBookAsync.pending, (state) =>({
      ...state,
      loading: true,
    }));
    builder.addCase(getBookAsync.fulfilled, (state, action) => {
      const newBook = [];
      Object.keys(action.payload).forEach((book) => newBook.push({
        item_id: book,
        title: action.payload[book][0].title,
        author: action.payload[book][0].author,
      }));
      return ({
        ...state,
        books: newBook,
        loading: false,
      });
    })
    builder.addCase( getBookAsync.rejected , (state, action) => ({
      ...state,
      loading: false,
      error: true,
    }));
    builder.addCase(deleteBookAsync.pending, (state) => ({
      ...state,
      success: false,
    }));
    builder.addCase(deleteBookAsync.fulfilled, (state) =>  ({
      ...state,
      success: true,
    }));
    builder.addCase( deleteBookAsync.rejected , (state, action) => ({
      ...state,
      success: false,
    }));
    builder.addCase(addBookAsync.pending, (state) => ({
      ...state,
      error: false,
    }));
    builder.addCase(addBookAsync.fulfilled, (state) => ({
      ...state,
      error: false,
    }));
    builder.addCase( addBookAsync.rejected , (state) => ({
      ...state,
      error: true,
    }));
  } 
});


export default BookSlice.reducer;
export const { addBook, removeBook } = BookSlice.actions;
