import React from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import {
  AiFillGithub,
  AiOutlineTwitter,
  AiFillInstagram,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Contact() {
  return (
    <Container fluid className="contact-section" id="contact" style={{ marginTop: "20px", marginBottom: "20px" }}>
      <Container>
        <Row>
          <Col md={12} className="contact-form">
            <h1 
            style={{ color: "white",  marginBottom: "20px", marginTop:"50px" }}>Get in <span className="purple">Touch</span></h1>
            <Form>
              <Form.Group controlId="formBasicName">
                <Form.Label style={{ color: "white" }}>Name</Form.Label>
                <Form.Control type="text" placeholder="Enter your name" />
              </Form.Group>

              <Form.Group controlId="formBasicEmail">
                <Form.Label style={{ color: "white" }}>Email address</Form.Label>
                <Form.Control type="email" placeholder="Enter your email" />
              </Form.Group>

              <Form.Group controlId="formBasicMessage">
                <Form.Label style={{ color: "white" }}>Message</Form.Label>
                <Form.Control as="textarea" rows={4} placeholder="Enter your message" />
              </Form.Group>

              <Button  style={{ marginTop:"20px" }} variant="primary" type="submit">
                Submit
              </Button>
            </Form>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="contact-info">
            <h1 style={{ marginTop: "20px", marginBottom: "10px",color: "white"  }}>Contact <span className="purple">Information</span></h1>
            <p style={{ marginBottom: "10px",color: "white"  }}>Feel free to reach out to me through any of the following channels:</p>
            <ul style={{ marginBottom: "20px",color: "white"  }}>
              <li><span className="purple">Email:</span> parthksingh1@gmail.com</li>
              <li><span className="purple">Phone:</span> +91-9313614293</li>
              <li><span className="purple">Address:</span> B-20 Shri Darhan Society-2 TP-13 Chhani Jakat Naka , Vadodara, Gujarat India</li>
            </ul>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <h1>FIND ME ON</h1>
            <p>
              Feel free to <span className="purple">connect </span>with me
            </p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/parthksingh1"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://twitter.com/LazyYup1?t=wumoknk1muedLXuYhsE1qA&s=09"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiOutlineTwitter />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="www.linkedin.com/in/parthksingh1"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.instagram.com/parthsingh1_/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <AiFillInstagram />
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Contact;
