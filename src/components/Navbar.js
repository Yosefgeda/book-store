import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser } from '@fortawesome/free-solid-svg-icons'

import '../styles/navbar.css';

const Navbar = () => (
  <nav className="nav-bar">
    <ul className="nav-list">
      <li>
        <Link to="/"><h2 className="logo">Bookstore CMS</h2></Link>
      </li>
      <li className='book-nav'>
        <Link to="/">BOOKS</Link>
      </li>
      <li className='book-nav'>
        <Link to="/categories">CATEGORIES</Link>
      </li>
    </ul>
    <FontAwesomeIcon icon={faUser} className='user-nav' />
  </nav>
);

export default Navbar;
