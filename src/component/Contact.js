import React,{useState} from "react";
import Container from "react-bootstrap/esm/Container";
import Row from "react-bootstrap/esm/Row";
import Col from "react-bootstrap/esm/Col";
import Nvbar from "./Navbarfile";
import cavna9 from "./image/canva9.jpg";
import contactUs from "./image/contactUs.jpg";
function Contact() {



  const [formData, setFormData] = useState({
    name: '',
    contact: '',
    email: '',
    message: '',
  });
  const [errors, setErrors] = useState({});
  const [formSubmitted, setFormSubmitted] = useState(false);

  const validateEmail = (email) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  // const handleInputChange = (e) => {
  //   const { contact, value } = e.target;
  //   setFormData({
  //     ...formData,
  //     [caontact]: value,
  //   });
  // };
  const handleSubmit = (e) => {
    e.preventDefault();

    const newErrors = {};

    // Validate name
    if (formData.name.trim() === '') {
      newErrors.name = 'Name is required';
    }

    // Validate contact
    if (formData.contact.trim() === '') {
      newErrors.contact = 'Contact is required';
    }

    // Validate email
    if (!validateEmail(formData.email)) {
      newErrors.email = 'Invalid email format';
    }

    // Validate message
    if (formData.message.trim() === '') {
      newErrors.message = 'Message is required';
    }

    // Check if there are any errors
    if (Object.keys(newErrors).length === 0) {
      // Form is valid, you can submit it here (e.g., send a POST request to a server)

      // Reset the form and set formSubmitted to true
      setFormData({
        name: '',
        email: '',
        Contact: '',
        message: '',
      });
      setFormSubmitted(true);
    } else {
      // Set the validation errors
      setErrors(newErrors);
    }

  }

  return (
    <div className="main-contact overflow-hidden">
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
                src={contactUs}
                style={{ width: "100%", height: "40vw", objectFit: "cover" }}
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
          marginBottom: "5%",
        }}
      >
        <Row>
          <Col>
            <h1>
              <u>Contact Us </u>
            </h1>
          </Col>
        </Row>
      </Container>
      <Container className="mt-5 mb-5 contacttt-css" >
        <Row>
          <Col md={8} lg={8} >
          <div className='form-div'  >
              <h2 className='form-heading' >Get In touch</h2>
              {formSubmitted ? (
                <div className="success-message">Form submitted successfully!</div>
              ) : (
                <form onSubmit={handleSubmit}>
                  <div>
                    <label htmlFor="name">Name:</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                    />
                    {errors.name && <div className="error-message">{errors.name}</div>}
                  </div>

                  <div>
                    <label htmlFor="name">Contact:</label>
                    <input
                      type="text"
                      id="contact"
                      name="contact"
                      value={formData.contact}
                      onChange={handleInputChange}
                    />
                    {errors.name && <div className="error-message">{errors.contact}</div>}
                  </div>
                  <div>
                    <label htmlFor="email">Email:</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                    />
                    {errors.email && <div className="error-message">{errors.email}</div>}
                  </div>
                  <div>
                    <label htmlFor="message">Message:</label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                    />
                    {errors.message && (
                      <div className="error-message">{errors.message}</div>
                    )}
                  </div>
                  <button type="submit">Submit</button>
                </form>
              )}
            </div>
          </Col>
          <Col md={4} lg={4} className="address-css" >
          <div className="detail" style={{ textAlign: "center" }}>
        <h1 className="mt-5">Location</h1>
        <h6 className="mt-5">Abdullah Haroon Road Saddar Karachi Pakistan</h6>
        <h1 className="mt-5">Teleohone</h1>
        <h6 className="mt-5">+923017835345,+92301398745</h6>
        <h1 className="mt-5">Fax</h1>
        <h6 className="mt-5">+923017835345</h6>

        <h1 className="mt-5">Email</h1>
        <h6 className="mt-5">abctechpak@gmail.com</h6>
      </div>
          </Col>
        </Row>       
      </Container>
     <Container fluid>
     <Row>
          <Col md={12} lg={12}>
          <div className="map">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m21!1m12!1m3!1d57922.43610761439!2d66.98626316163062!3d24.858648906506584!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m6!3e6!4m3!3m2!1d24.8585767!2d67.0275487!4m0!5e0!3m2!1sen!2s!4v1699692652393!5m2!1sen!2s"
          width="1400"
          height="615"
          style={{ border: "0px solidGray", marginTop: "1%", width: "100%" }}
          allowfullscreen=""
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
          </Col>
        </Row>
     </Container>
      
      <div className="footer">
        <h2>Footer</h2>
      </div>
    </div>
  );
}

export default Contact;
