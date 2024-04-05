
import React, { useState, useEffect } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Carousel from 'react-bootstrap/Carousel';
import Apple from "./image/Apple.mp4";
import mainhomepage from './image/mainhomepage.mp4'
function Crosel() {
  const videoStyle = {
    width: "100%",
  };

  const overlayStyle = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    zIndex: 1,
    textAlign: "center",
    color: "white",
    backgroundColor:"rgba(0, 0, 0, 0.289)",
    width: '70%',
    borderRadius:"20px"
  };

  const iconStyle = {
    fontSize: "3rem",
    margin: "15px",
    color: "white",
    
  };

  // Counter state
  const [productsCount, setProductsCount] = useState(0);
  const [clientsCount, setClientsCount] = useState(0);
  const [yearsCount, setYearsCount] = useState(0);

  // Update counters on component mount
  useEffect(() => {
    // Simulating data fetching or calculations
    setTimeout(() => {
      setProductsCount(100);
      setClientsCount(500);
      setYearsCount(20);
    }, 1000);
  }, []);

  return (
    <div>
      <Container fluid className="slider-container">
        <Row>
          <Col>
            <video
              autoPlay
              loop
              muted
              className="fullscreen-video"
              style={videoStyle}
            >
              <source src={mainhomepage} type="video/mp4" />
            </video>
          </Col>
        </Row> 
        {/* Second div overlay */}
        <div style={overlayStyle}  >
          <Container  >
            <Row>
              <Col lg={6}  md={6}  className="crosel-media" >
                <h2 style={{paddingLeft:"-60%"}} >Our Vision</h2>
                <p style={{textAlign:"left"}} >
                  Your paragraph goes hereTo be the most trusted and
                  inspirational flavor, food ingredient and food processing
                  machinery distributor of Pakistan. Driven by our passion for.
                </p>
                <h2 style={{paddingLeft:"-60%"}} >Our Clientele</h2>
              </Col>
              {/* Products Icon */}
              <Col lg={2} md={2} className="crosel-media" >
                <div>
                  <i className="fa fa-cube" style={iconStyle}></i>
                  <div>{productsCount}</div>
                  <h5>Products</h5>
                </div>
              </Col>
              {/* Clients Icon */}
              <Col lg={2} md={2}  className="crosel-media" >
                <div>
                  <i className="fa fa-users" style={iconStyle}></i>
                  <div>{clientsCount}</div>
                  <h5>Clients</h5>
                </div>
              </Col>
              {/* Years Icon */}
              <Col lg={2} md={2} className="crosel-media" >
                <div>
                  <i className="fa fa-calendar" style={iconStyle}></i>
                  <div>{yearsCount}</div>
                  <h5>Years</h5>
                </div>
              </Col>
            </Row>
          </Container>      
        </div>
      </Container>
    </div>
  );
}

export default Crosel;

















 // const videoStyle = {
  //   width: "100%",
  // };

  // const overlayStyle = {
  //   position: "absolute",
  //   top: "40%",
  //   left: "40%",
  //   transform: "translate(-50%, -50%)",
  //   zIndex: 1,
  //   textAlign: "center",
  //   color: "white",
  // };

  // const iconStyle = {
  //   fontSize: "3rem",
  //   margin: "15px",
  //   color: "white",
  // };

  // // Counter state
  // const [productsCount, setProductsCount] = useState(0);
  // const [clientsCount, setClientsCount] = useState(0);
  // const [yearsCount, setYearsCount] = useState(0);

  // // Update counters on component mount
  // useEffect(() => {
  //   // Simulating data fetching or calculations
  //   setTimeout(() => {
  //     setProductsCount(150);
  //     setClientsCount(300);
  //     setYearsCount(10);
  //   }, 1000);
  // }, []);