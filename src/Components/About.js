import React from 'react'
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Img from  '../images/img11.jpg';





 function About() {
  return (<>
  <section className="about" id="about"> 
                
                <div className="container"> 
                
                    <div className="main-text"> 
                    <h1>About<span>Us</span></h1> 
                </div> 
                
                
                <div className="row" style={{marginTop: "50px"}}> 

                              <div className="col-md-6 py-3 py-md-0"> 
                              <div className="card">
                              <img src={Img} alt='About Us'/>
                        </div>
                      </div>
                      <div className="col-md-6 py-3 py-md-0">
                         <h2>How Our Travel Agency Work</h2>
                        <p>we will serve you best experience</p>
                        <button id="about-btn">Read More.......</button>
                     </div>
                    </div>
                  </div>
              </section>
  
  </>
);
}
export default About;



