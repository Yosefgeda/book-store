import { createSlice } from '@reduxjs/toolkit';

const initialState = [];

const CategoriesSlice = createSlice({
  name: 'categories',
  initialState,
  reducers: {
    status: (state) => {
      if (state === []) {
        return 'Under Construction';
      } return 'Under Construction';
    },
  },
});

export default CategoriesSlice;
export const { status } = CategoriesSlice.actions;
