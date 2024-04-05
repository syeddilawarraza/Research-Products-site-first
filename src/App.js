

import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './component/Home';
import About from './component/About';
import Choose from './component/Choose';
import Contact from './component/Contact';
import Product from './component/child/Product';
import Services from './component/child/Services';
import Machinry from './component/child/Machinry';

import ScrollButton from './components/ScrollButton'; 
// import { Content, Heading } from './components/Styles'; 
function App() {
  return (
  <>
    <Router> 
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/choose" element={<Choose />} />
        <Route path="/contact" element={<Contact/>} />
        <Route path="/product" element={<Product/>} />
        <Route path="/services" element={<Services/>} />
        <Route path='machinry' element={<Machinry/>} />
        {/* Add more routes for other pages */}

      </Routes>
    </Router>
    <ScrollButton /> 
  </>        

  );
}

export default App;

