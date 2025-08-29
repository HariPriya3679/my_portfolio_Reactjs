
import React, { useState } from 'react'
import { LiaAddressCard } from "react-icons/lia";
import { CiMail } from "react-icons/ci";
import { IoIosCall } from "react-icons/io";
import styles from './Contacts.module.css';
import { RiFacebookCircleLine } from "react-icons/ri";
import { CiTwitter } from "react-icons/ci";
import { CiYoutube } from "react-icons/ci";
import { PiTelegramLogo } from "react-icons/pi";

const Contacts = () => {
  const [name,setName] = useState("")
  //EMAIL
  //SUBJECT
  //DESC

  const sendEnquiry = () => {


    //FETCH
    //http://localhost:8080/api/newEnquiry -> 
  }
  return (
    <div className={`Conatiner-fluid text-white ${styles.maincont}`}>
        <div className='container'>
        <h1 className='p-5'> GET IN <span classname="text-warning">TOUCH</span></h1>
        </div>
        <div className='container'>
            <div className="row">
                <div className="col-sm-6">
                    <h2>Reach Me Out</h2>
                    <p> Feel free to get in touch with me</p><br></br>
                    discussing new projects.
                   <div className="container-fluid">
                    <div className="row">
                        <div className="col-sm-1">
                    <LiaAddressCard  size={50} className=' text-warning me-3 mt-3'/>
                    </div>
                        <div className="col ms-5 mt-3">
                            address<br></br>
                            this is my address
                        </div>
                        <div className="row">
                        <div className="col-sm-1">
                            <CiMail  size={50} className=' text-warning me-3 mt-3'/>
                        </div>
                        <div className='col ms-5 mt-3'>

                            email<br></br>
                            mymail@gmail.com
                        </div>
                        </div>
                        <div className="row">
                            <div className="col-sm-1">
                            <IoIosCall size={50}  className=' text-warning me-3 mt-3'/>
                            </div>
                            <div className="col ms-5 mt-3">
                                call<br></br> call me
                            </div>
                        </div>
                    </div>
                </div>
                </div>
            
            <div className="col-sm-6">
                <div className="row">
                   <div className='col-sm-6'>
                    <input class="form-control text-white mt-3" type="text" placeholder="your name"></input>
                    </div>
                    <div className='col-sm-6'>
                <input class="form-control mt-3" type="text" placeholder="your email"></input>
                </div>  
                </div>
                <div className="row mt-2">
                    <div className="col-sm-12">
                    <input class="form-control text-white mt-3" type="text" placeholder="your subject"></input>
                    </div>
                </div>
                <div className="row mt-2">
                    <div className="col-sm-12">
                    <textarea class="form-control mt-3" id="your description" rows="7" placeholder='description'></textarea>
                    </div>
                </div>
                <div className="row">
                    <div className="col ">
                    
                    <button type="button" onClick={sendEnquiry} class="btn btn-outline-warning mt-3">SEND MESSAGE<span className='badge'><PiTelegramLogo /></span></button>
                    </div>
                </div>
            </div>
        </div>

</div>

       <div className="container ms-5">
       <div className="container">

        <div className="row p-5">
            <div className="col sm-4">
            <RiFacebookCircleLine  size={40} className={`me-3 ${styles.bottomicon}`}/>
            <CiTwitter  size={40} className={`me-3 ${styles.bottomicon}`}/>
            <CiYoutube size={40} className={`me-3 ${styles.bottomicon}`} />

            </div>
            </div>
        </div>

       </div>

        </div>

   
  )
}

export default Contacts