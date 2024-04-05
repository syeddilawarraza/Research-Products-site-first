import React from "react";
import Container from "react-bootstrap/esm/Container";
import Row from "react-bootstrap/esm/Row";
import Col from "react-bootstrap/esm/Col";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import paperwork from "./image/paperwork.jpg";
import Nvbar from "./Navbarfile";
import Footer from "./Footer";
import canva27 from "./image/canva27.jpg";
import contactUs from "./image/contactUs.jpg";

import canva21 from "./image/cavna21.jpg";
import canva14 from "./image/canva14.jpg";
import canva15 from "./image/canva15.jpg";
import canva16 from "./image/cavna16.jpg";
import canva17 from "./image/canva17.jpg";
import canva18 from "./image/cavna18.jpg";

function Vision() {
  return (
    <div className="w3-theme-l1">
      <Nvbar />

      <Container fluid className=" about-container ">
        <Row>
          <Col md={12}>
            <div
              className="story"
              style={{ position: "relative", overflow: "hidden" }}
            >
              <img
                src={contactUs}
                style={{ width: "100%", height: "40vw", objectFit: "cover" }}
                alt="Research"
              />
              {/* <div
                style={{
                  position: "absolute",
                  top: "50%",
                  left: "20%",
                  transform: "translate(-50%, -50%)",
                  textAlign: "center",
                  color: "black",
                  fontSize: "40px",
                }}
              >
                <h1>Research And Development</h1>
              </div> */}
            </div>
          </Col>
        </Row>
      </Container>
      <br />
      <Container
        className=" "
        style={{
          textAlign: "center",
          color: "black",
          marginTop: "5%",
          marginBottom: "5%",
        }}
      >
        <Row>
          <Col>
            <h1>
              <u>About Us </u>
            </h1>
          </Col>
        </Row>
      </Container >
      <div className="About-main-container" id="grad1">
        <Container >
          <Row >
            <Col md={6} lg={4}  >
              <Card className="m-1   cart-about">
                <Card.Body>
                  <Card.Title
                    style={{
                     
                      color: "black",
                    }}
                  >
                    <h2>
                      {" "}
                      1199 - <br /> Established
                    </h2>
                  </Card.Title>
                  <Card.Text
                    style={{
                      // fontSize: "25px",
                      // fontFamily:"sans-serif",
                      color: "black",
                    }}
                  >
                    Came into existence as a flavor, food processing and
                    machinery distributor. We quickly became the sole agent of
                    various machinery suppliers such as Confitech in Pakistan.
                    various machinery suppliers such as Confitech in Pakistan.
                    various now today yes
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>

            <Col md={6} lg={8}  className="vl  about-media"  >
              <div className="m-1 card-imag ">
                <img
                  src={canva21}
                  style={{ width: "100%", height: "520px", overflow: "hidden" }}
                />
              </div>
            </Col>
          </Row>
          <Row>
            <Col md={6} lg={8}  >
              <div className="card-imag m-1">
                <img
                  src={canva14}
                  style={{ width: "100%", height: "530px", overflow: "hidden" }}
                />
              </div>
            </Col>
            <Col md={6} lg={4} className=" about-media" id="vll" >
              <Card className="m-1  cart-about">
                <Card.Body >
                  <Card.Title
                    style={{
                      // fontSize: "40px",
                      // fontFamily:"sans-serif",
                      color: "black",
                    }}
                  >
                    <h2>
                      {" "}
                      1199 - <br /> Established
                    </h2>{" "}
                  </Card.Title>
                  <Card.Text
                    style={{
                      // fontSize: "25px",
                      // fontFamily:"sans-serif",
                      color: "black",
                    }}
                  >
                    Came into existence as a flavor, food processing and
                    machinery distributor. We quickly became the sole agent of
                    various machinery suppliers such as Confitech in Pakistan.
                    machinery distributor. We quickly became the sole agent of
                    various now today
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
          </Row>

          <Row>
            {/* <Col md={2}></Col> */}
            <Col md={6} lg={4} className=" vl  about-media">
              <Card className="m-1  cart-about">
                <Card.Body>
                  <Card.Title
                    style={{
                      // fontSize: "40px",
                      // fontFamily:"sans-serif",
                      color: "black",
                    }}
                  >
                    <h2> 2002~2010 – Capturing the Pakistani Market</h2>
                  </Card.Title>
                  <Card.Text
                    style={{
                      // fontSize: "25px",
                      // fontFamily:"sans-serif",
                      color: "black",
                    }}
                  >
                    Together with Firmenich, B.A. Enterprise captured the
                    encapsulated flavor market of Pakistan. By recording big
                    wins such as Oral dehydration Salts, B.A. Enterprise’s name
                    became synonymous with world class encapsulation.now
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col md={6} lg={8}  >
              <div className="card-imag m-1">
                <img
                  src={canva15}
                  style={{ width: "100%", height: "560px", overflow: "hidden" }}
                />
              </div>
            </Col>
          </Row>

          <Row>
            <Col md={6} lg={8} >
              <div className="card-imag m-1">
                <img
                  src={canva16}
                  style={{ width: "100%", height: "560px", overflow: "hidden" }}
                />
              </div>
            </Col>
            <Col md={6} lg={4} className=" about-media" id="vll">
              <Card className="m-1  cart-about">
                <Card.Body>
                  <Card.Title
                    style={{
                      // fontSize: "40px",
                      // fontFamily:"sans-serif",
                      color: "black",
                    }}
                  >
                    <h2> 2016 – State-of- the-Art Facility</h2>{" "}
                  </Card.Title>
                  <Card.Text
                    style={{
                      // fontSize: "25px",
                      // fontFamily:"sans-serif",
                      color: "black",
                    }}
                  >
                    B.A. Enterprise inaugurated its world class application lab
                    and temperature controlled warehouse. We became one of the
                    only food distributors in Pakistan to launch an application
                    lab and a temperature controlled warehouse which allowed us
                    to have an edge over the .
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
          </Row>

          <Row>
            {/* <Col md={2}></Col> */}
            <Col md={6} lg={4} className="vl  about-media">
              <Card className="m-1  cart-about">
                <Card.Body>
                  <Card.Title
                    style={{
                      // fontSize: "40px",
                      // fontFamily:"sans-serif",
                      color: "black",
                    }}
                  >
                    <h2>
                      {" "}
                      2016~2020 <br /> – Expanding our Portfolio
                    </h2>{" "}
                  </Card.Title>
                  <Card.Text
                    style={{
                      // fontSize: "25px",
                      // fontFamily:"sans-serif",
                      color: "black",
                    }}
                  >
                    B.A. Enterprise expanded our portfolio by adding Natural
                    colors from Chr. Hansen (now known as Oterra). We also
                    colors from Chr. Hansen (now known as Oterra). We also
                    became the largest sodium di acetate and pectin supplier in
                    Pakistan. Pakistan.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col md={6} lg={8} >
              <div className="card-imag m-1">
                <img
                  src={canva17}
                  style={{ width: "100%", height: "560px", overflow: "hidden" }}
                />
              </div>
            </Col>
          </Row>

          <Row>
            <Col md={6} lg={8} >
              <div className="card-imag m-1">
                <img
                  src={canva18}
                  style={{ width: "100%", height: "560px", overflow: "hidden" }}
                />
              </div>
            </Col>
            <Col md={6} lg={4} className="  about-media" id="vll">
              <Card className="m-1 cart-about">
                <Card.Body>
                  <Card.Title
                    style={{
                      // fontSize: "40px",
                      // fontFamily:"sans-serif",
                      color: "black",
                    }}
                  >
                    <h2>
                      {" "}
                      Now <br /> – Exploring new oppurtunities
                    </h2>{" "}
                  </Card.Title>
                  <Card.Text
                    style={{
                      // fontSize: "25px",
                      // fontFamily:"sans-serif",
                      color: "black",
                    }}
                  >
                    Now after 20 years of extensive experience in the industry,
                    B.A. Enterprise has formed strong connections and
                    relationships in both Pakistan and abroad. With over 500+
                    clients from all over Pakistan, we are at the heart of food
                    innovation in Pakistan
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </div>
      <div className="footer">
        <Footer />
      </div>
      <div className="footer">
        <h2>Footer</h2>
      </div>
    </div>
  );
}

export default Vision;
