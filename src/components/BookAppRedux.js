/* eslint-disable */
import React from 'react';
import { useDispatch } from 'react-redux';

import { deleteBookAsync } from '../redux/books/booksSlice';

const Book = ({book}) => {

  const dispatch = useDispatch();
  const handleDelete = () => {
    dispatch(deleteBookAsync(book.item_id))
  }

  return (
    <li id={book.item_id}>
        Book Title : {book.title},  Author: {book.author}
        <button type="button" onClick={handleDelete}>
            Delete
        </button>
    </li>
  );
};

export default Book;
