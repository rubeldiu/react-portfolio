import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import './Footer.css'

const Footer = () => {
    let date = new Date();
  let year = date.getFullYear();
    return (
        <Container fluid className="footer">
      <Row>
        <Col md={6} className="footer-copywright">
          <h3>Designed and Developed by Md. Hamidul Islam</h3>
        </Col>
        <Col md={6} className="footer-copywright">
          <h3>Copyright © {year} HAMIDUL</h3>
        </Col>
       
      </Row>
    </Container>
    );
};

export default Footer;