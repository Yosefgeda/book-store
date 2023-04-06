/* eslint-disable */
import { useSelector } from "react-redux";
import Book from './BookAppRedux' 

const BookItem = () => {
  const bookListed = useSelector((state) => state.book);
  return (
    
      <ul>
        {bookListed.map((book) => (
          <Book
            key={book.item_id}
            item_id={book.item_id}
            title={book.title}
            author={book.author}
            category={book.category}
          />
        ))}
      </ul>
  )
}

export default BookItem;