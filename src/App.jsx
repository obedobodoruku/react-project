import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router";
import { Link } from 'react-router';
import About from './pages/About';
import Home from './pages/Home';
import Contact from './pages/Contact';




const Navbar = () => {
    return (
        <div className='top-0 sticky border-b-2 border-b-white backdrop-blur-2xl text-white p-4'>
          <nav className="flex items-center  justify-between">
              <div className='text-3xl font-bold '>APP</div>
              <ul className='flex gap-4'>
                  <li className='hover:underline'><Link to="/">Home</Link></li>
                  <li  className='hover:underline'><Link to="/about">About</Link></li>
                  <li  className='hover:underline'><Link to="/contact">Contact</Link></li>
              </ul>
          </nav>
            
        </div>
    );
};

const Footer = () => {
    return (
      <div className='flex flex-col items-center justify-center'>
        <footer>
          <span className="text-white text-center text-[0.8rem]">By Obed Obodoruku © 2025</span>
        </footer>
      </div>
    )
}

const App = () => {
  return (
    <div>
      
      <BrowserRouter>
        <Navbar />
        
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="contact" element={<Contact />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
};

export default App;