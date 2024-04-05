import React from "react";
import Container from "react-bootstrap/esm/Container";
import Row from "react-bootstrap/esm/Row";
import Col from "react-bootstrap/esm/Col";

import canva1 from './image/canva1 (1).jpg'
import canva22 from './image/cavna22.jpg'
import cavna20 from './image/cavna20.jpg'
import canva24 from './image/cavna24.jpg'

function Vision() {
  return ( 
    <>
      <div className="story" style={{ overflow: "hidden" }}>
        <Container >
          <Row className="mt-5 mb-5 ">
            <Col>
            <h3 className="mt-5 mb-5 " style={{ color: "black" }}>
              Our story
            </h3>
            <h1 className=" mb-5 " style={{ color: "black" }}>
              What we do
            </h1>
            </Col>
          </Row>
          </Container>
          <Container className="make-fluid">
          <Row>
            <Col md={4} lg={4}  >
              <p
                style={{
                  textAlign: "left",
                  color: "black",
                }}
              >
                We believe in the magic of great flavors. Taste you turn to
                every day, taste you count on as part of your life. We deliver
                the flavor that does more than merely satisfying your taste buds
                — it actually gives you less to worry about and more to look
                forward to. That’s what we do here at B.A. Enterprise — in
                extraordinary ways. The name B.A. Enterprise stands for
                convenience, quality, health, hygiene, halal, nutrition and best
                value for the consumers’ money. We are highly recognized as a
                leading provider of flavors, active ingredients and aroma
                chemicals as well as sensorial and nutritional solutions to the
                industry. We combine our knowledge about consumers’ ever-
                changing needs with creativity and ground-breaking technologies.
              </p>
            </Col>
            <Col md={4} lg={4} style={{ position: "relative" }} className="media-q" >
              <div className="image-container">
                <img
                  className="mt-5 v-image"
                  src={canva1}
                  alt="research1"
                  style={{ width: "100%", height: "70vh" }}
                />
                <div className="image-text"><h1> </h1></div>
              </div>
            </Col>
            <Col
              md={4} lg={4}
              className="media-q" 
              style={{ position: "relative" }}
            >
              <div className="image-container">
                <img
                  className=" v-image"
                  src={canva22}
                  alt="research2"
                  style={{ width: "100%", height: "70vh" ,marginTop:"-10%" }}
                />
                {/* <div className="image-text">Research and development 2</div> */}
              </div>
            </Col>
          </Row>
        </Container>
      </div>
      <br />
      <div className="story" style={{ overflow: "hidden" }}>
        <Container>
          <Row>
            <Col md={4} lg={4} style={{ position: "relative" }} className="media-q" >
              <div className="image-container">
                <img
                  className="mt-5"
                  src={cavna20}
                  alt="research1"
                  style={{ width: "100%", height: "70vh" }}
                />
                {/* <div className="image-text">Research and development3</div> */}
              </div>
            </Col>
            <Col md={4} lg={4} style={{ position: "relative" }} className="media-q" >
              <div className="image-container">
                <img
                  src={canva24}
                  alt="research2"
                  style={{ width: "100%", height: "70vh" ,marginTop:"-10%" }}
                />
                {/* <div className="image-text">Research and development 4</div> */}
              </div>
            </Col>
            <Col md={4} lg={4} className="media-q" >
              <p
                style={{
                  textAlign: "left",
                  color: "black",
                }}
              >
                At B.A. Enterprise, we believe that healthy living and healthy
                eating represents long-term global trends. Therefore, we are
                confident that our positioning healthy flavors and ingredients
                qualifies on continuous growth and success. Initiating in 1999,
                we remain committed to building strong and sustainable relations
                with our valued clients.
              </p>
            </Col>
          </Row>
        </Container>
      </div>
      <br />
      <div className="footer">
        <h2>Footer</h2>
      </div>
    </>
  );
}

export default Vision;

// import React from "react";
// import Container from "react-bootstrap/esm/Container";
// import Row from "react-bootstrap/esm/Row";
// import Col from "react-bootstrap/esm/Col";
// import research1 from "../images/research1.jpg";
// import research2 from "../images/research2.jpg";

// function About() {
//   return (
//     <>
//       <div className="story" style={{ overflow: "hidden" }}>
//         <Container>
//           <Row className="mt-5 mb-5 ">
//             <h3 className="mt-5 mb-5 " style={{ color: "black" }}>
//               Our story
//             </h3>
//             <h1 className=" mb-5 " style={{ color: "black" }}>
//               What we do
//             </h1>
//           </Row>
//           <Row>
//             <Col md={3}>
//               <p
//                 style={{ textAlign: "left", color: "black", fontSize: "20px" }}
//               >
//                 We believe in the magic of great flavors. Taste you turn to
//                 every day, taste you count on as part of your life. We deliver
//                 the flavor that does more than merely satisfying your taste buds
//                 — it actually gives you less to worry about and more to look
//                 forward to. That’s what we do here at B.A. Enterprise — in
//                 extraordinary ways. The name B.A. Enterprise stands for
//                 convenience, quality, health, hygiene, halal, nutrition and best
//                 value for the consumers’ money. We are highly recognized as a
//                 leading provider of flavors, active ingredients and aroma
//                 chemicals as well as sensorial and nutritional solutions to the
//                 industry. We combine our knowledge about consumers’ ever-
//                 changing needs with creativity and ground-breaking technologies.
//               </p>
//             </Col>
//             <Col md={4} style={{ position: "relative" }}>
//               <img
//                 src={research1}
//                 alt="research1"
//                 style={{ width: "100%", height: "500px", marginTop: "30%" }}
//               />
//               <div className="image-text1">Text on Image 1</div>
//             </Col>
//             <Col md={4} className="container-img" style={{ position: "relative" }}>
//               <img
//                 src={research2}
//                 alt="research2"
//                 style={{ width: "100%", height: "500px" }}
//               />
//               <div className="image-text2">Text on Image 2</div>
//             </Col>
//           </Row>
//         </Container>
//       </div>
//       <br />
//       <div className="story" style={{ overflow: "hidden" }}>
//         <Container>
//           <Row>
//             <Col md={4} style={{ position: "relative" }}>
//               <img
//                 src={research1}
//                 alt="research1"
//                 style={{ width: "100%", height: "500px", marginTop: "30%" }}
//               />
//               <div className="image-text3">Text on Image 3</div>
//             </Col>
//             <Col md={4} style={{ position: "relative" }}>
//               <img
//                 src={research2}
//                 alt="research2"
//                 style={{ width: "100%", height: "500px" }}
//               />
//               <div className="image-text">Text on Image 4</div>
//             </Col>
//             <Col md={3}>
//               <p
//                 style={{ textAlign: "left", color: "black", fontSize: "20px" }}
//               >
//                 At B.A. Enterprise, we believe that healthy living and healthy
//                 eating represents long-term global trends. Therefore, we are
//                 confident that our positioning healthy flavors and ingredients
//                 qualifies on continuous growth and success. Initiating in 1999,
//                 we remain committed to building strong and sustainable relations
//                 with our valued clients.
//               </p>
//             </Col>
//           </Row>
//         </Container>
//       </div>
//       <br  />
//       <div className="footer">
//         <h2>Footer</h2>
//       </div>
//     </>
//   );
// }

// export default About;
