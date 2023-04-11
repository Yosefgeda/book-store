import React from 'react';
import { useDispatch } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSpinnerThird } from '@fortawesome/free-regular-svg-icons'
import { deleteBookAsync } from '../redux/books/booksSlice';
import '../styles/booklist.css';

const ima = require('../styles/spinner.png')

const Book = ({ book }) => {

  const dispatch = useDispatch();
  const handleDelete = () => {
    dispatch(deleteBookAsync(book.item_id))
  }

  return (
    <li className='book-list'>
      <div>
        <p>Action</p>
        <p><h2>Book Title : {book.title}</h2></p>  
        <p className='blue-font'>Author: {book.author}</p>
        <div className='edit'>
          <p>Comments</p>
          
            <button className='middle' type="button" onClick={handleDelete}>
                Remove
            </button>
            
          <p>Edit</p>
        </div>
      </div>

      <div className='prog-chap'>
        <div className='progress'>
          <img src={ima} alt='spinner' />
          <div className='progress-rep'>
            <h1>64% </h1><p>Completed</p>
          </div>
        </div>

        <div className='current-chapter'>
          <p className='curent-para'>CURRENT CHAPTER</p>
          <p>Chapter 17</p>
          <button className='update-btn' type='submit'>UPDATE PROGRESS</button>
        </div>
      </div>
      
    </li>
  );
};

export default Book;
