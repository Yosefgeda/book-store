/* eslint-disable */
import React from "react";
import { useDispatch } from "react-redux";
import { addBook } from '../redux/books/booksSlice'


const BookForm = () => {
    const [book, setBook] = React.useState({
        'title': '',
        'author': '',  
    })

    const dispatch = useDispatch();

    const handleChange = (e) => {
        setBook((book) => ({
            ...book,
            [e.target.name]: e.target.value
          }));
    };

    const handleAddBook = (e) => {
        e.preventDefault();
        if (book.title && book.author) {
            dispatch(addBook({
                'item_id': Math.floor(Math.random()*10000),
                'title': book.title,
                'author': book.author,
                'category':'Politics'
              }));
            setBook({
                'title': '',
                'author': '',
            });
        }
    };

    return (
        <form onSubmit={handleAddBook}>
            <input 
                name='title'
                placeholder='Enter Book Title'
                type='text'  value={book.title}
                onChange={handleChange}
            />
            <input 
                name='author'
                placeholder='Enter Author'
                type='text'  value={book.author}
                onChange={handleChange}
            />
            <button type="submit">Add Book</button>
        </form>
    )
}
export default BookForm