/* eslint-disable */
import React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { addBook, addBookAsync } from "../redux/books/booksSlice";


const BookForm = () => {

    const [title, setTitle] = useState('');
    const [author, setAuthor] = useState('');
    const dispatch = useDispatch();
    

    // const handleChange = (e) => {
    //     setBook((book) => ({
    //         ...book,
    //         [e.target.name]: e.target.value
    //       }));
    // };

    const handleAddBook = (e) => {
        e.preventDefault();
        if(title && author){
        const book = {
        item_id: Math.floor(Math.random()*10000),
        title,
        author,
        category: 'Politics',
        };
        dispatch(addBookAsync(book))
        .then(() => {
            dispatch(addBook(book));
            setTitle('');
            setAuthor('');
        });}
    };
    

    return (
        <form onSubmit={handleAddBook}>
            <input 
                name='title'
                placeholder='Enter Book Title'
                type='text'  value={title}
                onChange={(e) => {setTitle(e.target.value)}}
            />
            <input 
                name='author'
                placeholder='Enter Author'
                type='text'  value={author}
                onChange={(e) => {setAuthor(e.target.value)}}
            />
            <button type="submit">Add Book</button>
        </form>
    )
}
export default BookForm

