/* eslint-disable */
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {addBook, removeBook} from './booksSlice'
import BookForm from "../../components/BookFormRedux";


const BookView = () => {
    
    const bookListed = useSelector((state) => state.book)
    
    
    return (
          <>
          
          </>
           
        );
}

export default BookView