import React from 'react'


 function Book() {
  return ( 
         




          <div class="container-fluid">
            
            <section class="book" id="book">
              <div class="container">
                <div class="main-text">
                 <h1><span>B</span>ook</h1>
             </div>
                <div class="row">
                 <div class="col-md-6 py-md-0">
                    <div class="card">        
                        <img src={`${process.env.PUBLIC_URL}/Images/img4.jpg`}/>
                     </div>
                   </div>
                    <div class="col-md-6 py-md-0">



                      
         <form >
      
        <input type="text"className="form-control"placeholder="Where To"name="whereTo"required/><br/>
      <input type="text"className="form-control"placeholder="How Many"name="howMany"required/><br/>
      <input type="date"className="form-control"placeholder="Arrivals"name="arrival"required/><br/>
      <input type="date"className="form-control"placeholder="Leaving"name="leaving"required/><br/>
      <textarea className="form-control"rows="5"name="details"placeholder="Enter your Name & Details"/><br/>
      <input type="submit"value="Book Now"className="submit"/>
    
    </form>
                  
                  
                  </div>
                 </div>
               </div>
        </section>
             </div>


  
  
  
    
  )

}

export default Book;
