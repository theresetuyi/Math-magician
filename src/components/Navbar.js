import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => (
  <div className="top">
    <h1 className="title">Math magician</h1>
    <nav className="nav">
      <Link className="a" to="/">Home</Link>
      <hr />
      <Link className="a" to="/calculator">Calculator</Link>
      <hr />
      <Link className="a" to="/quote">Quote</Link>
    </nav>
  </div>
);

export default Navbar;
