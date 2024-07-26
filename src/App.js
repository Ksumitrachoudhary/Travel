import Navbar from "./Components/Navbar";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import About from "./Components/About";
import Book from "./Components/Book";
import Packages from "./Components/Packages";
import './App.css';
import Services from "./Components/Services";
import Gallary from "./Components/Gallary";


function App() {
  return ( 
          <>

  <Navbar />
  <Header />
  <Book /> 
  <Packages />
  <Services />
  <Gallary />
  <About  />
  <Footer />
  

  
  
  
          
          </>
   
  );
}

export default App;
