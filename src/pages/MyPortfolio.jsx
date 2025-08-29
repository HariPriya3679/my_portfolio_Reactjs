
import React from 'react'
import styles from './MyPortfolio.module.css';



function MyPortfolio() {
    return (
        <div className={`container-fluid  ${styles.maincontain}`}>
            <div className='container'>
                <h1 className={`text-white text-center p-5`}>MY<span className='text-warning'> PORTFOLIO</span></h1>
                <ul className="nav justify-content-center">
                    <li className="nav-item text-white">
                      
                    <a className={`nav-link text-white ${styles.linkhove}`}href="#">Active</a>
                        
                    </li>
                    <li className="nav-item ">
                        <a className={`nav-link text-white ${styles.linkhove}`} href="#">All</a>
                    </li>
                    <li className="nav-item ">
                        <a className="nav-link text-white" href="#">LOGO</a>
                    </li>
                    <li className="nav-item ">
                        <a className="nav-link text-white" href="#">VIDEO</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link  text-white" href="#">GRAPHIC DESIGN</a>
                    </li>
                    <li className="nav-item ">
                        <a className="nav-link text-white" href="#">MOCKUP</a>
                    </li>
                </ul>

                <div className="container-fluid ms-5">
                    <div className="row">
                        <div className={`col-4 ${styles.card}`} >
                            <div className={styles.cardInner}>
                                <div className={styles.cardFront} >
                            <img src="toDoo.jpg" className={`text-white ${styles.img}`}>
                            </img>
                            </div>
                            <div className={styles.cardBack}>To Do App</div>
                            </div>
                           
                        </div>
                        <div className={`col-4 ${styles.card}`} >
                            <div className={styles.cardInner}>
                                <div className={styles.cardFront} >
                            <img src="dogIMg.png" className={`text-white ${styles.img}`}>
                            </img>
                            </div>
                            <div className={styles.cardBack}>E-Commerce</div>
                            </div>
                           
                        </div>
                        <div className={`col-4 ${styles.card}`} >
                            <div className={styles.cardInner}>
                                <div className={styles.cardFront} >
                            <img src="plate.jpg" className={`text-white ${styles.img}`}>
                            </img>
                            </div>
                            <div className={styles.cardBack}>Nutritionist Template</div>
                            </div>
                           
                        </div>
                       
                    </div>
                </div>
                <div className={`container-fluid ms-5 ${styles.slideLeft}`}>
                    <div className="row">
                    <div className={`col-4 ${styles.card}`} >
                            <div className={styles.cardInner}>
                                <div className={styles.cardFront} >
                            <img src="calculator.jpg" className={`text-white ${styles.img}`}>
                            </img>
                            </div>
                            <div className={styles.cardBack}>my Calculator</div>
                            </div>
                           
                        </div>
                        <div className={`col-4 ${styles.card}`} >
                            <div className={styles.cardInner}>
                                <div className={styles.cardFront} >
                            <img src="cat.jpg" className={`text-white ${styles.img}`}>
                            </img>
                            </div>
                            <div className={styles.cardBack}>this is text on back</div>
                            </div>
                           
                        </div>
                        <div className={`col-4 ${styles.card}`} >
                            <div className={styles.cardInner}>
                                <div className={styles.cardFront} >
                            <img src="cat.jpg" className={`text-white ${styles.img}`}>
                            </img>
                            </div>
                            <div className={styles.cardBack}>this is text on back</div>
                            </div>
                           
                        </div>
                    </div>
                </div>
                <div className={`container-fluid ms-5 ${styles.slideRight}`}>
                    <div className="row">
                    <div className={`col-4 ${styles.card}`} >
                            <div className={styles.cardInner}>
                                <div className={styles.cardFront} >
                            <img src="cat.jpg" className={`text-white ${styles.img}`}>
                            </img>
                            </div>
                            <div className={styles.cardBack}>this is text on back</div>
                            </div>
                           
                        </div>
                        <div className={`col-4 ${styles.card}`} >
                            <div className={styles.cardInner}>
                                <div className={styles.cardFront} >
                            <img src="cat.jpg" className={`text-white ${styles.img}`}>
                            </img>
                            </div>
                            <div className={styles.cardBack}>this is text on back</div>
                            </div>
                           
                        </div>
                        <div className={`col-4 ${styles.card}`} >
                            <div className={styles.cardInner}>
                                <div className={styles.cardFront} >
                            <img src="cat.jpg" className={`text-white ${styles.img}`}>
                            </img>
                            </div>
                            <div className={styles.cardBack}>this is text on back</div>
                            </div>
                           
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
}

export default MyPortfolio