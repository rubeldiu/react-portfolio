import React from 'react';
import { Button, Col, Container, Row } from 'react-bootstrap';
import pdf from '../../assets/Hamidul-Resume.pdf'
import './HomeBody.css'

const HomeBody = () => {
    return (
        <Container fluid className="home-about-section" id="about">
        <Container>
          <Row>
            <Col md={12} className="home-about-description">
              <h1 style={{ fontSize: "2.6em" }}>
                LET ME <span className="main-name"> INTRODUCE </span> MYSELF
              </h1>
              <p className="home-about-body">
              Software Engineer with over 6+ years experience providing 
programming and database expertise.🤷‍♂️
                <br />
                <br />Front-end
                <i>
                  <b className="main-name">  Reactjs, Redux, Typescript,HTML5, CSS, 
JavaScript, Bootstrap, Material UI  </b>
                </i>
                <br />
                <br />
                Back-end &nbsp;
                <i>
                  <b className="main-name">
                  ExpressJs, NodeJs. GraphQL, Asp.net core 3.0 
web api with c#. 
                  </b>
                </i>
                <br />
                <br />
                Whenever possible, I also apply my passion for developing products
                with
                <i>
                  <b className="main-name"> Modern Javascript Frameworks</b>
                </i>
                  &nbsp; like
                <i>
                  <b className="main-name"> Node.js and React.js</b>
                </i>
              </p>
            </Col>
           
          </Row>
          <Row style={{ justifyContent: "center", position: "relative" }}>
          <Button variant="primary" href={pdf} target="_blank">
            <i className="fas fa-download">&nbsp;</i>Download CV
          </Button>
        </Row>
        </Container>
      </Container>
    );
};

export default HomeBody;