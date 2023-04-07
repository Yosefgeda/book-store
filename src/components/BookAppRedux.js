/* eslint-disable */
import React from 'react';
import { useDispatch } from 'react-redux';
import { deleteBookAsync } from '../redux/books/booksSlice';
import '../styles/booklist.css';

const Book = ({book}) => {

  const dispatch = useDispatch();
  const handleDelete = () => {
    dispatch(deleteBookAsync(book.item_id))
  }

  return (
    <li className='book-list'>
        Book Title : {book.title},  Author: {book.author}
        <button className='book-list' type="button" onClick={handleDelete}>
            Delete
        </button>
    </li>
  );
};

export default Book;
