/* eslint-disable */
import '../styles/bookItem.css'
const BookItem = ({ itemProp, delBook,}) => {
  return (
    <li>
        <div className='book-item'>   
            <span>
                <h1>Title: {itemProp.title}</h1> <h2>Author: {itemProp.author}</h2> 
            </span>
            <button onClick={() => delBook(itemProp.id)}>Delete</button>
        </div>
    </li>
      
    
  );
};

export default BookItem;
