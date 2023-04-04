import { createSlice  } from '@reduxjs/toolkit'

const initialState = [];

const BookSlice = createSlice({
    name: 'book',
    initialState,
    reducers: {
        addBook: (state, action) => {
            state.push(action.payload)
        },
        removeBook: (state, action) => {
            state.filter(action.payload);
        }
    }
})

export default BookSlice;
export const { addBook, removeBook }  = BookSlice.actions;