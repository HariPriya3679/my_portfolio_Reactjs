// src/components/Navbar.js
import React from 'react';
import { Link } from 'react-router-dom';
import { FaHome, FaUser, FaEnvelope, FaShoppingBag, FaEnvelopeOpen, FaComments } from 'react-icons/fa';
import About from '../pages/About';

const Navbar = () => {
  return (
    <div className="col-md-4 d-flex flex-column align-items-center flex-end" style={{ backgroundColor: 'black' }}>
      <nav className="nav flex-column align-items-center ms-auto mt-5 me-3 ">
        <Link to="/" className="btn btn-outline-warning rounded-pill my-2 mb-5">
          <FaHome size={30} style={{ color: 'white' }} />
        </Link>
        <Link to="/about" className="btn btn-outline-warning rounded-pill my-2 mb-5">
          <FaUser size={30} style={{ color: 'white' }} />
        </Link>
        <Link to="/portfolio" className="btn btn-outline-warning rounded-pill my-2 mb-5">
          <FaShoppingBag size={30} style={{ color: 'white' }} />
        </Link>
        <Link to="\contact" className="btn btn-outline-warning rounded-pill my-2 mb-5">
          <FaEnvelopeOpen size={30} style={{ color: 'white' }} />
        </Link>
        <Link to="\blog" className="btn btn-outline-warning rounded-pill my-2 mb-5">
          <FaComments size={30} style={{ color: 'white' }} />
        </Link>
      </nav>
    </div>
  );
};

export default Navbar;
