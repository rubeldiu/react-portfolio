import React from 'react';
import { Button, Col, Container, Row } from 'react-bootstrap';
import pdf from '../../assets/Hamidul-Resume.pdf'
import Navigation from '../common/Navigation/Navigation';
import Footer from '../Footer/Footer';
import Resumecontent from '../Resumecontent/Resumecontent';
import Tech from '../Tech/Tech';
import './Resume.css'

const Resume = () => {
    return (
        <>
        
        <Container fluid className="resume-section">
    
      <Container> 
      <h1 className="project-heading">
          My <strong className="main-name">Resume </strong>
        </h1>      
        <Row className="resume">
          <Col md={6} className="resume-left">
            <h3 className="resume-title">Experience</h3>
            <Resumecontent
              title="Web Developer"
              date="09/2016 - Current"
              content={[
                "http://refactored.dk/, Copenhagen Area, Capital Region, Denmark ",
                "Worked as a web developer  ",
              ]}
            />
            <Resumecontent
              title="Software Developer"
              date="10/2013 - 12/2015"
              content={[
                "Felix Denmark, Copenhagen Area, Capital Region, Denmark ",
                "Worked as a Software Developer  ",
              ]}
            />
           
          </Col>
          <Col md={6} className="resume-right">
            <h3 className="resume-title">Education</h3>
            <Resumecontent
              title="Master of Science: Information 
              and Communication System 
              Security. "
              date="2010"
              content={["Kungliga tekniska  högskolan (KTH),Sweden"]}
            />
            <Resumecontent
              title="Bachelor of Science: Computer 
              Science and Engineering "
              date="2005"
              content={["Daffodil International University, Bangladesh."]}
            />
          </Col>
        </Row>
        <Row style={{ justifyContent: "center", position: "relative" }}>
          <Button variant="primary" href={pdf} target="_blank">
            <i className="fas fa-download">&nbsp;</i>Download CV
          </Button>
        </Row>
        <Tech/>
      </Container>
    </Container>
    
    </>
    );
};

export default Resume;