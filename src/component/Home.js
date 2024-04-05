
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './style.css';
import About from './About';
import Crosel from './Crosel';
import Navbarfile from './Navbarfile';
import Vision from './Vision';
function Home() {
  return (
    <>
      <div>
        <Navbarfile />
      </div>
      <div>
       
        <Crosel />
      </div>
     
      <div>
       
        <Vision />
      </div>
     
    </>
  );
}

export default Home;
