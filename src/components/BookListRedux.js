import { useSelector, useDispatch } from "react-redux";
import { useEffect } from 'react';
import { getBookAsync } from '../redux/books/booksSlice';
import Book from './BookAppRedux'
import '../styles/listcontainer.css';

const BookItem = () => {
  const { book, loading, error, success } = useSelector((store) => store.book);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getBookAsync());
  }, [dispatch, success]);

  if (loading) return <h2>Loading...</h2>;
  if (error) return <h2>Error.. Please try again</h2>;
  
  return (
      <ul className="book-list-container">
        {book.map((item) => (
          <Book key={item.item_id} book={item} />
        ))}
      </ul>
  
  );

}

export default BookItem;
