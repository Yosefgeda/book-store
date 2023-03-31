/* eslint-disable */
import BookItem from './BookItem';

const BookList = (props) => {
  const {
    booksProps, setBooks, handleChange, delBook
  } = props;

  return (
    <ul>
      {booksProps.map((book) => (
        <BookItem
          key={book.id}
          itemProp={book}
          setBooks={setBooks}
          handleChange={handleChange}
          delBook={delBook}
        />
      ))}
    </ul>
  );
};
export default BookList;
