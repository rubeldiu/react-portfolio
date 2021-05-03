import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import Type from '../Type/Type';
import myImg from '../../assets/hamidul.jpg'
import './Header.css'
import Particle from '../Particle';

const Header = () => {
    return (
        <section>
          
        <Container fluid className="home-section" id="home">
        
          <Container className="home-content">
            <Row>
              <Col md={7} className="home-header">
                <h1 style={{ paddingBottom: 15 }} className="heading">
                  Hi There! <span className="wave">👋🏻</span>
                </h1>
  
                <h1 className="heading-name">
                  I'M
                  <strong className="main-name"> MD HAMIDUL ISLAM</strong>
                </h1>
  
                <div style={{ padding: 50, textAlign: "left",fontSize:"30px" }}>
                 <Type/>
                </div>
              </Col>
  
              <Col md={5}>
                 <img style={{height:'300px'}} src={myImg} alt="home pic" className="img-fluid" /> 
              </Col>
            </Row>
          </Container>
        </Container>
       
      </section>
    );
};

export default Header;