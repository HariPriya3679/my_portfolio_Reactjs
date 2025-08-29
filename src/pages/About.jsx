
import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import styles from '../pages/About.module.css';
import { motion } from 'framer-motion';

import { Link } from 'react-router-dom';
import { FaHome, FaUser, FaEnvelope, FaShoppingBag, FaEnvelopeOpen, FaComments } from 'react-icons/fa';
import { MdOutlineWbSunny } from "react-icons/md";
import classNames from 'classnames'; 
import { useState, } from 'react';


const hightlight={
    color: 'orange',
    fontSize:'40px'
}

const infoLabel= {
    color: '#aaa',
    backgroundColor:'black',

    
  }
  const cardbody={

  }
  const btnDownload= {
    backgroundColor: 'transparent',
    border: '2px solid orange',
    color:'orange'
  }
  
  const stats= {
    fontSize:'5rem',
    fontWeight:'bold',
    color:'orange',
    backgroundColor:'black'
  }
  const cardSt={
  background: 'linear-gradient(to right, yellow, black)', borderRadius: '15px'
  }
  const spanme={
    color:'white',
    padding:'10px'
  }
  const persinf={
    fontSize:'17px'
  }
  const cardBorder = {
    
    borderRadius: '12px',
    background: 'linear-gradient(to right, orange, black)',

    
  };



const About = () => {

    const [darkMode, setDarkMode] = useState(true);
  
    const toggleDarkMode = () => {
      setDarkMode(prev => !prev);
    };
  return (
    <motion.div
    initial={{ y: '-100vh', opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      exit={{ y: '100vh', opacity: 0 }}
      transition={{ duration: 0.8, ease: 'easeOut' }}
    
    className={`container-fluid py-5 ${darkMode ? styles.maindivDark :styles.mainDivLight}`}>
       
    <h2 className="text-center mb-5"><span style={ hightlight}>ABOUT</span><span style={ {...hightlight,...spanme}}>ME</span> </h2>
    <div className='container' style={{backgroundColor:'black'}}>
    <div className="row">
   
     
        <div className="col-md-3">
          <div className="row mb-2">
            <div className="col-4 info-label mt-3  "  style={{...infoLabel,...persinf}}>First Name:</div>
            <div className="col-8 mt-3 fw-bold"style={{...infoLabel,...persinf}}>haripriya</div>
          </div>
          <div className="row mb-2">
            <div className="col-4 info-label mt-3" style={{...infoLabel,...persinf}}>Age:</div>
            <div className="col-8 mt-3 fw-bold" style={{...infoLabel,...persinf}}>25 Years</div>
          </div>
          <div className="row mb-2">
            <div className="col-4 mt-3" style={{...infoLabel,...persinf}}>Freelance:</div>
            <div className="col-8 text-success mt-3 fw-bold" style={{...infoLabel,...persinf}}>Available</div>
          </div>
          <div className="row mb-2">
            <div className="col-4 info-label mt-3" style={{...infoLabel,...persinf}}>Ph:</div>
            <div className="col-8 mt-3 fw-bold" style={{...infoLabel,...persinf}}>907483679</div>
          </div>
          <div className="row mb-2">
            <div className="col-4 info-label mt-3" style={{...infoLabel,...persinf}}>Skype</div>
            <div className="col-8 mt-3 fw-bold" style={{...infoLabel,...persinf}}>hari@12</div>
          </div>
        </div>
        <div className="col-md-3">
          <div className="row mb-2">
            <div className="col-4 info-label mt-3" style={{...infoLabel,...persinf}}>Last Name:</div>
            <div className="col-8 mt-3 fw-bold"style={{...infoLabel,...persinf}}>kochath</div>
          </div>
          <div className="row mb-2">
            <div className="col-4 info-label mt-3" style={{...infoLabel,...persinf}}>Nationality:</div>
            <div className="col-8 mt-3 fw-bold"style={{...infoLabel,...persinf}}>indian</div>
          </div>
          <div className="row mb-2">
            <div className="col-4 info-label mt-3" style={{...infoLabel,...persinf}}>Address:</div>
            <div className="col-8 mt-3 fw-bold" style={{...infoLabel,...persinf}}>xtz</div>
          </div>
          <div className="row mb-2">
            <div className="col-4 info-label mt-3" style={{...infoLabel,...persinf}}>Email:</div>
            <div className="col-8 mt-3 fw-bold" style={{...infoLabel,...persinf}}>iam.harpriya.developer@gmail.com</div>
          </div>
          <div className="row mb-2">
            <div className="col-4 info-label mt-3" style={{...infoLabel,...persinf}}>Languages:</div>
            <div className="col-8 mt-3 fw-bold" style={{...infoLabel,...persinf}}> English</div>
          </div>
          <br></br>
          <button className="btn btn-lg btn-outline-warning  mt-3">Download cv<span className="badge"><i className="fa-solid fa-download" style={{color:'yellow'}}></i></span></button>
        </div>
      
      <div className="col-md-4 mt-3">
        <div className="row text-center">
          <div className="col-6 mb-4">
            <div className="card " style={cardBorder} >
            <div className="" style={stats}>12+</div>
            <div className="" style={infoLabel}>fresher</div>
            </div>
          </div>
          <div className="col-6 mb-4">
            <div className="card" style={cardBorder}>
            <div className="" style={stats}>7+</div>
            <div style={infoLabel}>Completed Projects</div>
            </div>
          </div>
          {/* <div className="col-6 mb-4 mt-5">
            <div className="card " style={cardBorder}>
            <div className="stats" style={stats}></div>
            <div style={infoLabel}>Happy Customers</div>
            </div>
          </div>
          <div className="col-6 mb-4 mt-5">
            <div className="card" style={cardBorder}>
            <div className="stats" style={stats}>53+</div>
            <div style={infoLabel}>Awards Won</div>
            </div>
          </div> */}
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
    </motion.div>
  

  
  )
}

export default About