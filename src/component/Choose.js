import React from "react";
import Container from "react-bootstrap/esm/Container";
import Row from "react-bootstrap/esm/Row";
import Col from "react-bootstrap/esm/Col";
import Nvbar from "./Navbarfile";
import cavna3 from "./image/canva3.jpg";
import cavna4 from "./image/canva4.jpg";
import cavna5 from "./image/canva5.jpg";
import cavna6 from "./image/canva6.jpg";
import cavna10 from "./image/canva10.jpg";
export default function Choose() {
  return (
    <>
      <Nvbar />
      <div className="choose-container-main">
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
                  src={cavna3}
                  style={{ width: "100%", height: "60vh", objectFit: "cover" }}
                  alt="Research"
                />
                <div
                  style={{
                    position: "absolute",
                    top: "50%",
                    left: "50%",
                    transform: "translate(-50%, -50%)",
                    textAlign: "center",
                    color: "white",
                    fontSize: "40px",
                  }}
                >
                </div>
              </div>
            </Col>
          </Row>
        </Container>

        <Container
          style={{
            textAlign: "center",
            color: "black",
            marginTop: "5%",
            marginBottom: "15%",
          }}
        >
          <Row >
            <Col>
              <h1>
                <u>Why Choose Us ?</u>
              </h1>
            </Col>
          </Row>
        </Container>
        <div className=" choose-container"  >
          <Container className="  overflow-hidden d-flex align-items-center justify-content-center">
            <Row >
              <Col lg={5} md={5} >
                <div className="img-1">
                  <img
                    src={cavna4}
                    alt="Application Lab"
                    style={{ width: "100%", height: "auto" }}
                  />
                </div>
              </Col>
              <Col lg={7} md={7}>
                <h1>Application Lab</h1>
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

          <Container className="mt-5 overflow-hidden d-flex align-items-center justify-content-center">
            <Row  >
              <Col lg={7} md={7} >
                <h1 >Application Lab</h1>
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
              <Col lg={5} md={5}  >
                <div className="img-1">
                  <img
                    src={cavna5}
                    alt="Application Lab"
                    style={{ width: "100%", height: "auto" }}
                  />
                </div>
              </Col>
            </Row>
          </Container>
          <br />
          <Container className=" overflow-hidden d-flex align-items-center justify-content-center">
            <Row >
              <Col lg={5} md={5}>
                <div className="img-1">
                  <img
                    src={cavna6}
                    alt="Application Lab"
                    style={{ width: "100%", height: "auto" }}
                  />
                </div>
              </Col>
              <Col lg={7} md={7} >
                <h1>Application Lab</h1>
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
        <div>
          <Container
            fluid
            className="choose-image mt-5"
            style={{ overflow: "hidden" }}
          >
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
                    src={cavna10}
                    alt="Research And Development"
                    style={{
                      width: "100%",
                      height: "100vh",
                      objectFit: "cover",
                    }}
                  />
                  <div
                    style={{
                      position: "absolute",
                      top: "50%",
                      left: "50%",
                      transform: "translate(-50%, -50%)",
                      textAlign: "center",
                      color: "white",
                      fontSize: "40px",
                    }}
                  >
                    {/* <p> Over 20 years of experience in  Research And Development</p> */}
                  </div>
                </div>
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
