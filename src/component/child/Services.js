import React from "react";
import Container from "react-bootstrap/esm/Container";
import Row from "react-bootstrap/esm/Row";
import Col from "react-bootstrap/esm/Col";
import Nvbar from "../Navbarfile";
import canva11 from "../image/canva11.jpg";
import canva2 from "../image/canva2.jpg";
import cavna4 from "../image/canva4.jpg";
import cavna5 from "../image/canva5.jpg";
import cavna6 from "../image/canva6.jpg";
import canva8 from "../image/canva8.jpg";
import canva12 from "../image/canva12.jpg";

function Services() {
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
                src={canva11}
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
              >
                {/* <p>Our Services</p> */}
              </div>
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
                <u>Our Services</u>
              </h1>
            </Col>
          </Row>
        </Container>
      <div className="product-container">
        <Container className=" mt-5 overflow-hidden d-flex align-items-center justify-content-center">
          <Row>
            <Col lg={7} md={7}>
              <div className="img-1">
                <img
                  src={canva2}
                  alt="Application Lab"
                  style={{ width: "100%", height: "auto" }}
                />
              </div>
            </Col>
            <Col lg={5} md={5} >
              <h1 className="mb-5">Application Lab</h1>
              <p
                style={{
                  textAlign: "left",
                  color: "black",
                //   padding:"10px",
                // fontSize: "20px",
                // fontFamily:"sans-serif"
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
            <Col lg={5} md={5} >
              <h1 className="mb-5">Application Lab</h1>
              <p
                style={{
                  textAlign: "left",
                  color: "black",
                  // padding:"10px",
                  // fontSize: "20px",
                  // fontFamily:"sans-serif"
                }}
              >
                Using our application lab, we are able to quantitatively and
                qualitatively verify each and every product. This allows us to
                test the product in real-life applications before we present it
                to our client.
              </p>
            </Col>
            <Col lg={7} md={7}  >
              <div className="img-1">
                <img
                  src={cavna4}
                  alt="Application Lab"
                  style={{ width: "100%", height: "auto" }}
                />
              </div>
            </Col>
          </Row>
        </Container>

        <Container className="offset-md-1 mt-5 overflow-hidden d-flex align-items-center justify-content-center">
          <Row>
            <Col lg={7} md={7}>
              <div className="img-1">
                <img
                  src={cavna5}
                  alt="Application Lab"
                  style={{ width: "100%", height: "auto" }}
                />
              </div>
            </Col>
            <Col lg={5} md={5}>
              <h1 className="mb-5">Application Lab</h1>
              <p
                style={{
                  textAlign: "left",
                  color: "black",
                  // padding:"10px",
                  // fontSize: "20px",
                  // fontFamily:"sans-serif"
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

      <div className="product-container mb-5" >
        <Container className=" mt-5 overflow-hidden d-flex align-items-center justify-content-center">
          <Row>
            <Col lg={5} md={5}>
              <h1 className="mb-5">Application Lab</h1>
              <p
                style={{
                  textAlign: "left",
                  color: "black",
                  // padding:"10px",
                  // fontSize: "20px",
                  // fontFamily:"sans-serif"
                }}
              >
                Using our application lab, we are able to quantitatively and
                qualitatively verify each and every product. This allows us to
                test the product in real-life applications before we present it
                to our client.
              </p>
            </Col>
            <Col lg={7} md={7} >
              <div className="img-1">
                <img
                  src={cavna6}
                  alt="Application Lab"
                  style={{ width: "100%", height: "auto" }}
                />
              </div>
            </Col>
          </Row>
        </Container>

        <Container className=" mt-5 overflow-hidden d-flex align-items-center justify-content-center">
          <Row>
            <Col lg={7} md={7}>
              <div className="img-1">
                <img
                  src={canva8}
                  alt="Application Lab"
                  style={{ width: "100%", height: "60vh" }}
                />
              </div>
            </Col>
            <Col lg={5} md={5}>
              <h1 className="mb-5">Application Lab</h1>
              <p
                style={{
                  textAlign: "left",
                  color: "black",
                //   padding:"10px",
                // fontSize: "20px",
                // fontFamily:"sans-serif"
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

        <Container className="offset-md-1 mt-5 overflow-hidden d-flex align-items-center justify-content-center">
          <Row>
            <Col lg={5} md={5}>
              <h1 className="mb-5">Application Lab</h1>
              <p
                style={{
                  textAlign: "left",
                  color: "black",
                //   padding:"10px",
                // fontSize: "20px",
                // fontFamily:"sans-serif"
                }}
              >
                Using our application lab, we are able to quantitatively and
                qualitatively verify each and every product. This allows us to
                test the product in real-life applications before we present it
                to our client.
              </p>
            </Col>
            <Col lg={7} md={7} >
              <div className="img-1">
                <img
                  src={canva12}
                  alt="Application Lab"
                  style={{ width: "100%", height: "auto" }}
                />
              </div>
            </Col>
          </Row>
        </Container>
      </div>

      <div className="footer">
        <h2>Footer</h2>
      </div>
    </div>
  );
}

export default Services;
