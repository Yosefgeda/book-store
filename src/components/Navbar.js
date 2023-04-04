import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/navbar.css';

const Navbar = () => (
  <nav className="nav-bar">
    <li>
      <Link to="/"><h2 className="logo">Bookstore CMS</h2></Link>
    </li>
    <ul className="nav-list">
      <li>
        <Link to="/">BOOKS</Link>
      </li>
      <li>
        <Link to="/categories">CATEGORIES</Link>
      </li>
    </ul>
  </nav>
);

export default Navbar;
