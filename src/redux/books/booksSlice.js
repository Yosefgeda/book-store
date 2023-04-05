/* eslint-disable */
import { createSlice } from '@reduxjs/toolkit';


const initialState = [
  {
    "item_id": "item1",
    "title": "The Great Gatsby",
    "author": "John Smith",
    "category": "Fiction"
  },
  {
    "item_id": "item2",
    "title": "Anna Karenina",
    "author": "Leo Tolstoy",
    "category": "Fiction"
  },
  {
    "item_id": "item3",
    "title": "The Selfish Gene",
    "author": "Richard Dawkins",
    "category": "Nonfiction"
  }
];

const BookSlice = createSlice({
  name: 'book',
  initialState,
  reducers: {
    addBook: (state, action) => {
       state.push(action.payload)
    },
    removeBook: (state, action) => {
      const itemId = action.payload;
      state.filter((item) => item.item_id !== itemId);
      
    },
  },
});

export default BookSlice.reducer;
export const { addBook, removeBook } = BookSlice.actions;
