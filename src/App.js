/* eslint-disable */
import BookForm from './components/BookFormRedux';
import BookItem from './components/BookListRedux';
import Navbar from './components/Navbar'

function App () {
  return (
    <div>
      <Navbar />
      <BookItem />
      <BookForm />
    </div>
  )
};

export default App;