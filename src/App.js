import { BrowserRouter as Routes, Route } from "react-router-dom"
import './App.css';
import Navbar from "./component/Navbar";
import Footer from "./component/Footer"
import Home from "./pages/Home";
import Project from "./pages/Project";
import Contact from "./pages/Contact";


function App() {
  return (    
    <div className="App">
      <Navbar/>
      <Routes>
        <Route exact path="/" element={<Home/>}>
          <Home/>
          </Route>  
        <Route exact path="/project" element={<Project/>}>
        <Project/>
        </Route> 
        <Route exact path="/contact" element={<Contact/>}>
          <Contact/>
        </Route>           
      </Routes>
      <Footer/>
    </div>
  );
}
export default App;
