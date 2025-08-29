// src/pages/HomePage.js
import React from 'react';
import { FaDownload } from 'react-icons/fa';
import Navbar from '../components/Navbar';
import { Link } from 'react-router-dom';
import { FaHome, FaUser, FaEnvelope, FaShoppingBag, FaEnvelopeOpen, FaComments } from 'react-icons/fa';
import { MdOutlineWbSunny } from "react-icons/md";
import { useState } from 'react';
import styles from './HomePage.module.css';

import classNames from 'classnames'; 




const HomePage = () => {
  const [darkMode, setDarkMode] = useState(true);

  const toggleDarkMode = () => {
    setDarkMode(prev => !prev);
  };
  return (
    <div className={`container-fluid ${styles.container} ${darkMode ? styles.dark : ''}`}>
    {/* <div className="col-md-8 d-flex flex-column justify-content-center p-4"> */}
      
      <div className="row">
        <div className="col-sm-4 d-flex justify-content-center align-items-center ">
          <img
            src="/dark-style-valentines-day-celebration (1).jpg"
            className="img-fluid rounded-circle"
            alt="Profile"
            style={{
              height: '400px',
              width: '400px',
              zIndex: 2,
              position: 'absolute',
              marginRight: '100px',
              marginTop:'200px',
              marginLeft:'100px'
            }}
          />
        </div>
        <div className="col-sm-6 d-flex flex-column ps-4 text-center">
          <h1 style={{ marginLeft: '100px',
                      marginTop:'200px',

           }}><span class="text-warning">HI... I am Hari</span></h1>
          <p style={{ marginLeft: '80px' }}>
          I’m a Java developer focused on creating reliable and efficient backend systems
          </p>
          <div className="d-flex justify-content-center mt-5">
            <button className="btn btn-outline-warning rounded-pill px-3 py-1">
              Download CV
              <span className="ms-2">
                <FaDownload size={16} style={{ color: 'white' }} />
              </span>
            </button>
          </div>
        </div>
        <div className={classNames("col-sm-2 d-flex flex-column align-items-center", styles.sidebar, {
                  [styles.darkSidebar]: darkMode
                      })}>

                    <nav className="nav flex-column align-items-center ms-auto mt-2 me-3 ">
                    <MdOutlineWbSunny size={30} onClick={toggleDarkMode} />

                      <Link to="/" className="btn btn-outline-warning rounded-pill my-2 mb-5 mt-4">
                        <FaHome size={30} style={{ color: darkMode ? 'white' : 'black' }} />
                      </Link>
                      <Link to="/about" className="btn btn-outline-warning rounded-pill my-2 mb-5">
                        <FaUser size={30} style={{ color: darkMode ? 'white' : 'black' }} />
                      </Link>
                      <Link to="/portfolio" className="btn btn-outline-warning rounded-pill my-2 mb-5">
                        <FaShoppingBag size={30} style={{ color: darkMode ? 'white' : 'black' }} />
                      </Link>
                      <Link to="/contact" className="btn btn-outline-warning rounded-pill my-2 mb-5">
                        <FaEnvelopeOpen size={30} style={{ color: darkMode ? 'white' : 'black' }} />
                      </Link>
                      <Link to="/blog" className="btn btn-outline-warning rounded-pill my-2 mb-5">
                        <FaComments size={30} style={{ color: darkMode ? 'white' : 'black' }} />
                      </Link>
                    </nav>
                  </div>
      </div>
    </div>
   
  
  );
};

export default HomePage;


