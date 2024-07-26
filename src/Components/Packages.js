import React from 'react'


 function Packages() {
  return (
            <div>

                  <section className="packages" id="packages">
                      <div className="container">
                         <div className="main-text">
                            <h1><span>P</span>ackages</h1>
                      </div>
                <div className="row">
                  <div className="col-sm-4 py-md-0">
                     <div className="card h-100">
                     <img src={`${process.env.PUBLIC_URL}/Images/img6.jpg`} className="img-size" />

                         <div className="card-body">
                            <h3>London</h3>
                              <p>you can visit us.</p>
                            <div className="star">
                            <i className="fa-solid fa-star checked"></i>
                            <i className="fa-solid fa-star checked"></i>
                            <i className="fa-solid fa-star checked"></i>
                            <i className="fa-solid fa-star"></i>
                            <i className="fa-solid fa-star"></i>
                       </div>
                       <h6>Price: <strong>$500</strong></h6>
                       <a href="#book">Book Now</a>
                 </div>
             </div>
         </div>

        <div className="col-md-4 py-md-0">
            <div className="card h-100">
                <img src={`${process.env.PUBLIC_URL}/Images/img8.jpg`} className="img-size"/>
                <div className="card-body">
                    <h3>Italy</h3>
                    <p>you can visit us.</p>
                    <div className="star">
                        <i className="fa-solid fa-star checked"></i>
                        <i className="fa-solid fa-star checked"></i>
                        <i className="fa-solid fa-star checked"></i>
                        <i className="fa-solid fa-star"></i>
                        <i className="fa-solid fa-star"></i>

                    </div>
                    <h6>Price: <strong>$500</strong></h6>
                    <a href="#book">Book Now</a>
                </div>

            </div>
             </div>   
            <div className="col-md-4 py-md-0">
                <div className="card h-100">
                    <img src={`${process.env.PUBLIC_URL}/Images/img7.jpg`} className="img-size"/>
                    <div className="card-body"> 
                        <h3>Oman</h3>
                        <p>you can visit us.</p>
                        <div className="star">
                            <i className="fa-solid fa-star checked"></i>
                            <i className="fa-solid fa-star checked"></i>
                            <i className="fa-solid fa-star checked"></i>
                            <i className="fa-solid fa-star"></i>
                            <i className="fa-solid fa-star"></i>

                        </div>
                        <h6>Price: <strong>$500</strong></h6>
                        <a href="#book">Book Now</a>
                    </div>

                </div>
                </div>
                <div className="col-md-4 py-md-0">
                    <div className="card h-100">
                        <img src={`${process.env.PUBLIC_URL}/Images/img11.jpg`} className="img-size"/>
                        <div className="card-body">
                            <h3>Russia</h3>
                            <p>you can visit us.</p>
                            <div className="star">
                                <i className="fa-solid fa-star checked"></i>
                                <i className="fa-solid fa-star checked"></i>
                                <i className="fa-solid fa-star checked"></i>
                                <i className="fa-solid fa-star"></i>
                                <i className="fa-solid fa-star"></i>

                            </div>
                            <h6>Price: $500</h6>
                            <a href="#book">Book Now</a>
                        </div>

                    </div>
                    </div>
                    <div className="col-md-4 py-md-0">
                        <div className="card h-100">
                            <img src={`${process.env.PUBLIC_URL}/Images/img10.jpg`} className="img-size"/>
                            <div className="card-body">
                                <h3>Peru</h3>
                                <p>you can visit us.</p>
                                <div className="star">
                                    <i className="fa-solid fa-star checked"></i>
                                    <i className="fa-solid fa-star checked"></i>
                                    <i className="fa-solid fa-star checked"></i>
                                    <i className="fa-solid fa-star"></i>
                                    <i className="fa-solid fa-star"></i>

                                </div>
                                <h6>Price: <strong>$500</strong></h6>
                                <a href="#book">Book Now</a>
                            </div>

                        </div>
                    </div>

                        <div className="col-md-4 py-md-0">
                            <div className="card h-100">
                                <img src={`${process.env.PUBLIC_URL}/Images/img9.jpg`} className="img-size"/>
                                <div className="card-body"> 
                                    <h3>Switzerland</h3>
                                    <p>you can visit us.</p>
                                    <div className="star">
                                        <i className="fa-solid fa-star checked"></i>
                                        <i className="fa-solid fa-star checked"></i>
                                        <i className="fa-solid fa-star checked"></i>
                                        <i className="fa-solid fa-star"></i>
                                        <i className="fa-solid fa-star"></i>

                                    </div>
                                    <h6>Price: <strong>$500</strong></h6>
                                    <a href="#book">Book Now</a>
                                </div>
                            </div>

                </div>
           </div>
       </div>
                 </section>

    </div>
   
  )
}

export default Packages;












