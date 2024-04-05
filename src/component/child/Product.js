import React from "react";
import Container from "react-bootstrap/esm/Container";
import Row from "react-bootstrap/esm/Row";
import Col from "react-bootstrap/esm/Col";
import Nvbar from "../Navbarfile";
import canva13 from "../image/canva13.jpg";
import canva15 from "../image/canva15.jpg";
import canva16 from "../image/cavna16.jpg";
import canva17 from "../image/canva17.jpg";
import canva18 from "../image/cavna18.jpg";
import canva19 from "../image/cavna19.jpg";
import canva20 from "../image/cavna20.jpg";
import canva21 from "../image/cavna21.jpg";
import canva24 from "../image/cavna24.jpg";
import canva23 from "../image/cavna23.jpg";
import productmain from "../image/productmain.jpg";
function Product() {
  return (
    <>
      <Nvbar />
      <div className="about-container overflow-hidden">
        <Container fluid>
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
                  src={productmain}
                  style={{ width: "100%", height: "50vh", objectFit: "cover" }}
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
                <u>Our Product</u>
              </h1>
            </Col>
          </Row>
        </Container>
        <div className="product-container" >
          <Container className=" mt-5 overflow-hidden d-flex align-items-center justify-content-center">
            <Row>
              <Col lg={6} md={6}>
                <div className="img-1">
                  <img
                    src={canva15}
                    alt="Application Lab"
                    style={{ width: "100%", height: "70vh" }}
                  />
                </div>
              </Col>
              <Col lg={6} md={6} className="mt-5">
                <h1 className="mb-5">Application Lab</h1>
                <p
                  style={{
                    textAlign: "left",
                    color: "black",
                    
                  }}
                >
                  Using our application lab, we are able to quantitatively and
                  qualitatively verify each and every product. This allows us to
                  test the product in real-life applications before we present
                  it to our client.
                </p>
              </Col>
            </Row>
          </Container>

          <Container className=" mt-5 overflow-hidden d-flex align-items-center justify-content-center">
            <Row>
              <Col lg={6} md={6}>
                <h1 className="mb-5">Application Lab</h1>
                <p
                  style={{
                    textAlign: "left",
                    color: "black",
                    
                  }}
                >
                  Using our application lab, we are able to quantitatively and
                  qualitatively verify each and every product. This allows us to
                  test the product in real-life applications before we present
                  it to our client.
                </p>
              </Col>
              <Col lg={6} md={6}  >
                <div className="img-1">
                  <img
                    src={canva16}
                    alt="Application Lab"
                    style={{ width: "100%", height: "70vh" }}
                  />
                </div>
              </Col>
            </Row>
          </Container>

          <Container className=" mt-5 overflow-hidden d-flex align-items-center justify-content-center">
            <Row>
              <Col lg={6} md={6} >
                <div className="img-1">
                  <img
                    src={canva17}
                    alt="Application Lab"
                    style={{ width: "100%", height: "70vh" }}
                  />
                </div>
              </Col>
              <Col lg={6} md={6}>
                <h1 className="mb-5">Application Lab</h1>
                <p
                  style={{
                    textAlign: "left",
                    color: "black",
                   
                  }}
                >
                  Using our application lab, we are able to quantitatively and
                  qualitatively verify each and every product. This allows us to
                  test the product in real-life applications before we present
                  it to our client.
                </p>
              </Col>
            </Row>
          </Container>
        </div>

        <div className="product-container" >
          <Container className=" mt-5 overflow-hidden d-flex align-items-center justify-content-center">
            <Row>
              <Col lg={6} md={6} >
                <h1 className="mb-5">Application Lab</h1>
                <p
                  style={{
                    textAlign: "left",
                    color: "black",
                   
                  }}
                >
                  Using our application lab, we are able to quantitatively and
                  qualitatively verify each and every product. This allows us to
                  test the product in real-life applications before we present
                  it to our client.
                </p>
              </Col>
              <Col lg={6} md={6}>
                <div className="img-1">
                  <img
                    src={canva18}
                    alt="Application Lab"
                    style={{ width: "100%", height: "70vh" }}
                  />
                </div>
              </Col>
            </Row>
          </Container>

          <Container className=" mt-5 overflow-hidden d-flex align-items-center justify-content-center">
            <Row>
              <Col lg={6} md={6}  >
                <div className="img-1">
                  <img
                    src={canva19}
                    alt="Application Lab"
                    style={{ width: "100%", height: "70vh" }}
                  />
                </div>
              </Col>
              <Col lg={6} md={6}>
                <h1 className="mb-5">Application Lab</h1>
                <p
                  style={{
                    textAlign: "left",
                    color: "black",
                  
                  }}
                >
                  Using our application lab, we are able to quantitatively and
                  qualitatively verify each and every product. This allows us to
                  test the product in real-life applications before we present
                  it to our client.
                </p>
              </Col>
            </Row>
          </Container>

          <Container className=" mt-5 overflow-hidden d-flex align-items-center justify-content-center">
            <Row>
              <Col lg={6} md={6}>
                <h1 className="mb-5">Application Lab</h1>
                <p
                  style={{
                    textAlign: "left",
                    color: "black",
                    
                  }}
                >
                  Using our application lab, we are able to quantitatively and
                  qualitatively verify each and every product. This allows us to
                  test the product in real-life applications before we present
                  it to our client.
                </p>
              </Col>
              <Col lg={6} md={6}>
                <div className="img-1">
                  <img
                    src={canva20}
                    alt="Application Lab"
                    style={{ width: "100%", height: "70vh" }}
                  />
                </div>
              </Col>
            </Row>
          </Container>
        </div>

        <div className="product-container">
          <Container className="offset-md-1 mt-5 overflow-hidden d-flex align-items-center justify-content-center">
            <Row>
              <Col lg={6} md={6}  >
                <div className="img-1">
                  <img
                    src={canva21}
                    alt="Application Lab"
                    style={{ width: "100%", height: "70vh" }}
                  />
                </div>
              </Col>
              <Col lg={6} md={6}>
                <h1 className="mb-5">Application Lab</h1>
                <p
                  style={{
                    textAlign: "left",
                    color: "black",
                   
                  }}
                >
                  Using our application lab, we are able to quantitatively and
                  qualitatively verify each and every product. This allows us to
                  test the product in real-life applications before we present
                  it to our client.
                </p>
              </Col>
            </Row>
          </Container>

          <Container className=" mt-5 overflow-hidden d-flex align-items-center justify-content-center">
            <Row>
              <Col lg={6} md={6} >
                <h1 className="mb-5">Application Lab</h1>
                <p
                  style={{
                    textAlign: "left",
                    color: "black",
                   
                  }}
                >
                  Using our application lab, we are able to quantitatively and
                  qualitatively verify each and every product. This allows us to
                  test the product in real-life applications before we present
                  it to our client.
                </p>
              </Col>
              <Col lg={6} md={6}>
                <div className="img-1">
                  <img
                    src={canva24}
                    alt="Application Lab"
                    style={{ width: "100%", height: "70vh" }}
                  />
                </div>
              </Col>
            </Row>
          </Container>

          <Container className=" mt-5 mb-5 overflow-hidden d-flex align-items-center justify-content-center">
            <Row>
              <Col lg={6} md={6} >
                <div className="img-1">
                  <img
                    src={canva23}
                    alt="Application Lab"
                    style={{ width: "100%", height: "70vh" }}
                  />
                </div>
              </Col>
              <Col lg={6} md={6}>
                <h1 className="mb-5">Application Lab</h1>
                <p
                  style={{
                    textAlign: "left",
                    color: "black",
                  
                  }}
                >
                  Using our application lab, we are able to quantitatively and
                  qualitatively verify each and every product. This allows us to
                  test the product in real-life applications before we present
                  it to our client.
                </p>
              </Col>
            </Row>
          </Container>
        </div>
        <div className="footer">
          <h2>Footer</h2>
        </div>
      </div>
    </>
  );
}

export default Product;
