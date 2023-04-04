/* eslint-disable */
import React from "react";
import { useSelector } from "react-redux";

const BookView = () => {
    const bookListed = useSelector((state) => state.book)
    // console.log(bookListed)
    
    const bookItm = bookListed.map(item => {
        return <li key={item.item_id}>{item.title}, {item.author} <button>Delete</button></li>        
      });

        return (
          <ul>
          {bookItm}
          </ul>
        );
}

export default BookView