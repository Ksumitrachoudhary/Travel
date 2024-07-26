import React from 'react'
import Carousel from 'react-bootstrap/Carousel';
import container from 'react-bootstrap/Container';
import Img1 from '../images/img6.jpg';
import Img2 from '../images/img7.jpg';
import Img3 from '../images/img8.jpg';


function Header() {
  return (
    <div className="container-fluid">

           <div className="carousel">
                 <div id="carouselExampleIndicators" className="carousel slide">
            <div className="carousel-indicators">
              <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
              <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
              <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
            </div>
            <div className="carousel-inner">
              <div className="carousel-item active">
                <img src={Img1} className="d-block w-100" alt=''/>
              </div>
              <div className="carousel-item"> 
                <img src={Img2} className="d-block w-100" alt=''/>
              </div>
              <div className="carousel-item">
                <img src={Img3} className="d-block w-100" alt=''/>
              </div>
            </div>
            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
              <span className="carousel-control-prev-icon" aria-hidden="true"></span>
              <span className="visually-hidden">Previous</span>
            </button>
            <button className ="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
              <span className ="carousel-control-next-icon" aria-hidden="true"></span>
              <span className ="visually-hidden">Next</span>
            </button>
          </div>
     </div>
          </div>


   
  )
}

export default Header;
