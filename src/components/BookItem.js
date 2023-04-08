/* eslint-disable */
import { useSelector } from "react-redux";
import '../styles/bookItem.css'

const BookItem = () => {
  const bookListed = useSelector((state) => {
    const bookItm = state.book.map(item => {
      return item.title
    })
  })

    return (
      <li>
          <div className='book-item'>   
              <span>
                  <h1>Title: {bookListed}</h1>
                  <h2>Author: {itemProp.author}</h2> 
              </span>
              <button onClick={() => delBook(itemProp.id)}>Delete</button>
          </div>
      </li>
        
      
    );
  };
  

export default BookItem;
