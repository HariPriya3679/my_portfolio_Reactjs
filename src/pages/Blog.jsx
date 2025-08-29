
import React from 'react'
import styles from './Blog.module.css';


const Blog = () => {
  return (
    <div className={`container-fluid ${styles.maincont}`}>
        <div className="container">
            <h1 className='text-white text-center p-5'>MY <span className="text-warning">BLOG</span></h1>
            <div className={`container ${styles.cardCont}`}>
                <div className="row">
                    <div className="col-sm-4">
                    <div className={`card ${styles.card}`}>
                        <img src="high-angle-book-coffee-cup-arrangement.jpg" className={`card-img-top border border-bottom border-warning ${styles.cardImg}`} alt="..."></img>
                        <h4 class="card-title">Card title</h4>
                        <div className="card-body">
                            <p className="card-text"> text text text </p>
                        </div>
                        </div>
                    </div>
                    <div className="col-sm-4">
                    <div className={`card ${styles.card}`}>
                        <img src="high-angle-book-coffee-cup-arrangement.jpg" className={`card-img-top border border-bottom border-warning ${styles.cardImg}`} alt="..."></img>
                        <h4 class="card-title">blog 1</h4>
                        <div className="card-body">
                            <p className="card-text"> blog 1 text</p>
                        </div>
                        </div>
                    </div>
                    <div className="col-sm-4">
                    <div className={`card ${styles.card}`}>
                        <img src="high-angle-book-coffee-cup-arrangement.jpg" className={`card-img-top border border-bottom border-warning ${styles.cardImg}`} alt="..."></img>
                        <h4 class="card-title">blog 2</h4>
                        <div className="card-body">
                            <p className="card-text">blog 2 text</p>
                        </div>
                        </div>
                    </div>
                 
                  

                </div>
                <div className="row mt-5">
                    <div className="col-sm-4">
                    <div className={`card  ${styles.card}`}>
                        <img src="high-angle-book-coffee-cup-arrangement.jpg" className={`card-img-top border border-bottom border-warning ${styles.cardImg}`} alt="..."></img>
                        <h4 class="card-title">blog 3</h4>
                        <div className="card-body">
                            <p className="card-text">blog 3 text </p>
                        </div>
                        </div>
                    </div>
                    <div className="col-sm-4">
                    <div className={`card ${styles.card}`}>
                        <img src="high-angle-book-coffee-cup-arrangement.jpg" className={`card-img-top border border-bottom border-warning ${styles.cardImg}`} alt="..."></img>
                        <h4 class="card-title">blog 4</h4>
                        <div className="card-body">
                            <p className="card-text">blog 4 text</p>
                        </div>
                        </div>
                    </div>
                    <div className="col-sm-4">
                    <div className={`card ${styles.card}`}>
                        <img src="high-angle-book-coffee-cup-arrangement.jpg" className={`card-img-top border border-bottom border-warning ${styles.cardImg}`} alt="..."></img>
                        <h4 class="card-title">blog 5</h4>
                        <div className="card-body">
                            <p className="card-text">blog 3 text</p>
                        </div>
                        </div>
                    </div>
                 
                  

                </div>

            </div>
        </div>





    </div>
  )
}

export default Blog