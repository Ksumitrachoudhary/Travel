import React from 'react'

function Gallary() {
  return (
    
    
    <section className="gallary" id="gallary">
    <div className="container">
        <div className="main-text">
            <h1><span>G</span>allary</h1>
        </div>
        
        
            <div className="row" style={{marginTop: "30px"}}>
              
                <div className="col-md-4 py-3 py-md-0">
                <div className="card">
                <img src="./Images/img2.jpg" height="230px"/>

                </div>
            </div>
       
       
            <div className="col-md-4 py-3 py-md-0">
                 <div className="card">
                <img src="./Images/img3.jpg" height="230px"/>
              </div>
          </div>
               
                 
                     <div className="col-md-4 py-3 py-md-0">
                        <div className="card">
                         <img src="./Images//img4.jpg" height="230px"/>
                       </div>
                    </div>
        
       </div>
   
   
   
   
   {/* <!-- // SECOND ROW ////////////// SECOND ROW --> */}
   
   
   
   <div className="row" style={{marginTop: "30px"}}>
    
    
              <div className="col-md-4 py-3 py-md-0">
                <div className="card">
                   <img src="./Images/img5.jpg" height="230px"/>
              </div>
          </div>



               <div className="col-md-4 py-3 py-md-0">
                  <div className="card">
                  <img src="./Images/img6.jpg" height="230px"/>
              </div>
            </div>
       
       
               <div className="col-md-4 py-3 py-md-0">
                  <div className="card">
                  <img src="./Images/img7.jpg" height="230px"/>
              </div>
          </div>
</div>


    </div>
</section>
  )
}
export default Gallary;
