import React from "react";
import Container from "react-bootstrap/esm/Container";
import Row from "react-bootstrap/esm/Row";
import Col from "react-bootstrap/esm/Col";
import Nvbar from "../Navbarfile";
import canva13 from "../image/canva13.jpg";
import canva30 from "../image/canva30.jpg";
import canva31 from "../image/cavna31.jpg";
import canva32 from "../image/canva32.jpg";
import canva33 from "../image/canva33.jpg";
import canva35 from "../image/canva35.jpg";

function Machinry() {
  return (
    <div className=" overflow-hidden">
      <Nvbar />
      <Container fluid className="about-container overflow-hidden">
        <Row>
          <Col md={12}>
            <div
              className="story"
              style={{
                position: "relative",
                overflow: "hidden",
              }}
            >
              <img
                src={canva13}
                style={{ width: "100%", height: "70vh", objectFit: "cover" }}
                alt="Research"
              />
              <div
                style={{
                  position: "absolute",
                  top: "90%",
                  left: "50%",
                  transform: "translate(-50%, -50%)",
                  textAlign: "center",
                  color: "white",
                  fontSize: "40px",
                  textDecorationLine: "underline",
                }}
              ></div>
            </div>
          </Col>
        </Row>
      </Container>
      <Container
        className=" "
        style={{
          textAlign: "center",
          color: "black",
          marginTop: "5%",
          marginBottom: "15%",
        }}
      >
        <Row>
          <Col>
            <h1>
              <u> Our Machinery</u>
            </h1>
          </Col>
        </Row>
      </Container>
      <div className="product-container">
        <Container className=" mt-5 overflow-hidden d-flex align-items-center justify-content-center">
          <Row>
            <Col lg={5} md={5} className="line">
              <div className="img-1">
                <img
                  src={canva30}
                  alt="Application Lab"
                  style={{ width: "100%", height: "45vh" }}
                />
              </div>
            </Col>
            
            
           
            <Col lg={5} md={5} className=" offset-lg-2" >
              <h1 className="mb-5">Application Lab</h1>
              <p
                style={{
                  textAlign: "left",
                  color: "black",
                  
                }}
              >
                Using our application lab, we are able to quantitatively and
                qualitatively verify each and every product. This allows us to
                test the product in real-life applications before we present it
                to our client.
              </p>
            </Col>
          </Row>
        </Container>

        <Container className="mt-5 overflow-hidden d-flex align-items-center justify-content-center">
          <Row>
            <Col lg={5} md={5}>
              <h1 className="mb-5">Application Lab</h1>
              <p
                style={{
                  textAlign: "left",
                  color: "black",
                 
                }}
              >
                Using our application lab, we are able to quantitatively and
                qualitatively verify each and every product. This allows us to
                test the product in real-life applications before we present it
                to our client.
              </p>
            </Col>
           
          
            <Col lg={5} md={5} className="offset-lg-2">
              <div className="img-1">
                <img
                  src={canva31}
                  alt="Application Lab"
                  style={{ width: "100%", height: "45vh" }}
                />
              </div>
            </Col>
          </Row>
        </Container>

        <Container className="mt-5 overflow-hidden d-flex align-items-center justify-content-center">
          <Row>
            <Col lg={5} md={5}>
              <div className="img-1">
                <img
                  src={canva32}
                  alt="Application Lab"
                  style={{ width: "100%", height: "45vh" }}
                />
              </div>
            </Col>
            <Col lg={5} md={5} className="offset-lg-2" >
              <h1 className="mb-5">Application Lab</h1>
              <p
                style={{
                  textAlign: "left",
                  color: "black",
                 
                }}
              >
                Using our application lab, we are able to quantitatively and
                qualitatively verify each and every product. This allows us to
                test the product in real-life applications before we present it
                to our client.
              </p>
            </Col>
          </Row>
        </Container>
      </div>

      <div className="product-container" >
        <Container className="mt-5 overflow-hidden d-flex align-items-center justify-content-center">
          <Row>
            <Col lg={5} md={5}>
              <h1 className="mb-5">Application Lab</h1>
              <p
                style={{
                  textAlign: "left",
                  color: "black",
                  // padding: "10px",
                  // fontSize: "20px",
                  // fontFamily: "sans-serif",
                }}
              >
                Using our application lab, we are able to quantitatively and
                qualitatively verify each and every product. This allows us to
                test the product in real-life applications before we present it
                to our client.
              </p>
            </Col>
            <Col xs={12} md={5} className="offset-lg-2">
              <div className="img-1">
                <img
                  src={canva33}
                  alt="Application Lab"
                  style={{ width: "100%", height: "45vh" }}
                />
              </div>
            </Col>
          </Row>
        </Container>

        <Container className="mt-5 mb-5 overflow-hidden d-flex align-items-center justify-content-center">
          <Row>
            <Col lg={5} md={5}>
              <div className="img-1">
                <img
                  src={canva35}
                  alt="Application Lab"
                  style={{ width: "100%", height: "45vh" }}
                />
              </div>
            </Col>
            <Col lg={5} md={5} className="offset-lg-2">
              <h1 className="mb-5">Application Lab</h1>
              <p
                style={{
                  textAlign: "left",
                  color: "black",
                  // padding: "10px",
                  // fontSize: "20px",
                  // fontFamily: "sans-serif",
                }}
              >
                Using our application lab, we are able to quantitatively and
                qualitatively verify each and every product. This allows us to
                test the product in real-life applications before we present it
                to our client.
              </p>
            </Col>
          </Row>
        </Container>

        {/* <Container className="mt-5 overflow-hidden d-flex align-items-center justify-content-center">
        <Row>
        <Col xs={12} md={5}>
            <h1 className="mb-5">Application Lab</h1>
            <p
              style={{
                textAlign: "left",
                color: "black",
                fontSize: "20px",
                fontStyle: "oblique",
              }}
            >
              Using our application lab, we are able to quantitatively and
              qualitatively verify each and every product. This allows us to
              test the product in real-life applications before we present it to
              our client.
            </p>
          </Col>
          <Col xs={12} md={5}>
            <div className="img-1">
              <img
                src={research3}
                alt="Application Lab"
                style={{ width: "100%", height: "auto" }}
              />
            </div>
          </Col>
        
        </Row>
      </Container> */}
      </div>

      <div className="footer">
        <h2>Footer</h2>
      </div>
    </div>
  );
}

export default Machinry;
