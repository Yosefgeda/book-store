/* eslint-disable */
import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import InputBook from './InputBook';
import BookList from './BookList';

const BooksLogic = () => {
    const [books, setBooks] = useState([]);

    const handleChange = (id) => {
        setTodos((prevState) => prevState.map((book) => {
          if (book.id === id) {
            return {
              ...book,
              completed: !book.completed,
            };
          }
          return book;
        }));
    };

    const delBook = (id) => {
      setBooks([
        ...books.filter((book) => book.id !== id),
      ]);
    };

    const addBookItem = (title, author) => {
      const newBook = {
        id: uuidv4(),
        title,
        author,
        completed: false,
      };
      setBooks([...books, newBook]);
    };

    return (
        <div>
            <InputBook addBookItem={addBookItem} />
            <BookList
                booksProps={books}
                setBooks={setBooks}
                handleChange={handleChange}
                delBook={delBook}
            />
            
        </div>
    )
}
export default BooksLogic