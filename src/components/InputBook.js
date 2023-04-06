/* eslint-disable  */
import { useState } from 'react';

const InputBook = ({ addBookItem }) => {
  const [title, setTitle] = useState({
    bookTitle: '',
    author: ''
  });

  const handleChange = (e) => {
    setTitle((title) => ({
        ...title,
        [e.target.name]: e.target.value
      }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (title.bookTitle && title.author) {
      addBookItem(title.bookTitle, title.author);
      setTitle((prev) => ({
        ...prev,
        bookTitle: '',
        author: ''
      }));
    }
  };

  return (
    <form onSubmit={handleSubmit} className="form-container">
      <input
        name='bookTitle'
        className="input-text"
        type="text"
        placeholder="Add Book..."
        value={title.bookTitle}
        onChange={handleChange}
      />
      <input
        name='author' 
        type="text"
        placeholder="Add Author..."
        value={title.author}
        onChange={handleChange}
        />
      <button type="submit" className="input-submit">Submit</button>
    </form>
  );
};
export default InputBook;