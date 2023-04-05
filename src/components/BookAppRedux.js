/* eslint-disable */
import React from 'react';
import { useDispatch } from 'react-redux';
import { removeBook } from '../redux/books/booksSlice';

const Book = (props) => {
  const dispatch = useDispatch();
  const handleDelete = () => {
    dispatch(removeBook(props.item_id))
  }
  return (
    <li id={props.item_id}>
        Book Title : {props.title},  Author: {props.author}
        <button type="button" onClick={handleDelete}>
            Delete
        </button>
    </li>
  );
};

export default Book;
