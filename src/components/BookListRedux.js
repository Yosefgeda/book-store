/* eslint-disable */
import { useSelector, useDispatch } from "react-redux";
import { getBookAsync } from '../redux/books/booksSlice';
import { useEffect } from 'react';

import Book from './BookAppRedux' 

const BookItem = () => {

  const dispatch = useDispatch();
  const { book, loading, error, success } = useSelector((store) => store.book);

  useEffect(() => {
    dispatch(getBookAsync());
  }, [dispatch, success]);

  if (loading) return <h2>Loading...</h2>;
  if (error) return <h2>Error.. Please try again</h2>;
  

  
  return (
  
      <ul>
      {book.map((item) => (
        <Book key={item.item_id} book={item} />
      ))}
    </ul>
  
  );

}

export default BookItem;