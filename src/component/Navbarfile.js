// import React from 'react';
// import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';
// import { Link } from 'react-router-dom';
// import download from './image/download.png';
// import './style.css';

// function Nvbar() {
//   return (
//     <div>
//       <Navbar collapseOnSelect expand="lg" className="nvbr">
//         <Container>
//           <Navbar.Brand href="#home">
//             <img src={download} width="300px" style={{ marginLeft: "-10%" }} alt="Logo" />
//           </Navbar.Brand>
//           <Navbar.Toggle aria-controls="responsive-navbar-nav" />
//           <Navbar.Collapse id="responsive-navbar-nav">
//             <Nav className="me-auto">
//               <Nav.Link as={Link} to="/#" className="heading">
//                 Our Vision
//               </Nav.Link>
//               <Nav.Link as={Link} to="/about" className="heading">
//                 About us
//               </Nav.Link>
//               <Nav.Link as={Link} to="/why-choose-us" className="heading">
//                 Why Choose Us?
//               </Nav.Link>
//               <NavDropdown title="Product and Services" id="collapsible-nav-dropdown" className="heading">
//                 <NavDropdown.Item as={Link} to="/action-1" className="heading2">
//                   Action 1
//                 </NavDropdown.Item>
//                 <NavDropdown.Item as={Link} to="/action-2" className="heading2">
//                   Action 2
//                 </NavDropdown.Item>
//                 <NavDropdown.Item as={Link} to="/action-3" className="heading2">
//                   Action 3
//                 </NavDropdown.Item>
//                 <NavDropdown.Divider />
//                 <NavDropdown.Item as={Link} to="/separated-link" className="heading2">
//                   Separated link
//                 </NavDropdown.Item>
//               </NavDropdown>
//               <Nav.Link as={Link} to="/contact-us" className="heading">
//                 Contact Us
//               </Nav.Link>
//             </Nav>
//           </Navbar.Collapse>
//         </Container>
//       </Navbar>
//     </div>
//   );
// }

// export default Nvbar;

import React from "react";
import { Container, Nav, Navbar, NavDropdown } from "react-bootstrap";
import { Link } from "react-router-dom";
import download from "./image/download.png";
import "./style.css";

function Nvbar() {
  
  return (
    <div  >
      <Navbar collapseOnSelect expand="lg" className="nvbr">
        <Container >
          <Navbar.Brand href="#" >
            <img
              src={download}
              width="300px"
              style={{ marginLeft: "-10%" }}
              alt="Logo"
            />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link as={Link} to="/#" className="heading">
                Our Vision
              </Nav.Link>
              <Nav.Link as={Link} to="/about" className="heading">
                About us
              </Nav.Link>
              <Nav.Link as={Link} to="/choose" className="heading">
                Why Choose Us?
              </Nav.Link>
              <NavDropdown
                title="Product and Services"
                id="collapsible-nav-dropdown"
                className="heading"
              >
                <NavDropdown.Item as={Link} to="/product" className="heading2">
                  Product
                </NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/Services" className="heading2">
                  Services
                </NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/Machinry" className="heading2">
                  Our Machinery
                </NavDropdown.Item>
              </NavDropdown>
              <Nav.Link as={Link} to="/contact" className="heading">
                Contact Us
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
}

export default Nvbar;
