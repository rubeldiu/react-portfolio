import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import Navigation from '../common/Navigation/Navigation';
import carWash from '../../assets/carwash.png';
import eCom from '../../assets/e-com.png';
import team from '../../assets/team-tracer.png';
import amazon from '../../assets/amazon.png';
import airbnb from '../../assets/airbnb.png';
import red from '../../assets/red.png';
import ProjectCard from '../ProjectCard/ProjectCard';
import './Projects.css'
import Footer from '../Footer/Footer';


const Projects = () => {
    return (
        <>
       
        <Container fluid className="project-section">     
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="main-name">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} sm={6} className="project-card">
            <ProjectCard
              imgPath={carWash}             
              title="Car Washing Apps"
              description="Responsive MERN Stack project with firebase authentication, admin authentication, persistent login and dashboard functionality for customer and admin"
              link="https://github.com/rubeldiu/react-car-wash-app"
              live="https://hero-fullstack.web.app/"
            />
          </Col>
          <Col md={4} sm={6} className="project-card">
            <ProjectCard
              imgPath={red}             
              title="Red-Onion Restaurant"
              description="A full-stack restaurant web app where anyone can order their favorite food from the menu and have options for breakfast, lunch, and dinner. Users can order food and pay online to receive food while sitting home."
              link="https://github.com/rubeldiu/react-Hot-Onion-Ecommerce"
              live="https://red-onion-hamidul.web.app/"
            />
          </Col>

          <Col md={4} sm={6} className="project-card">
            <ProjectCard
              imgPath={eCom}             
              title="Simple e.commerce"
              description="This is full stack simple applicaion. Here user can select a product and checkout that product. Before checkout user needs Authentication. Admin can create a product and manage those products."
              link="https://github.com/rubeldiu/react-simple-dashboard-app"
              live="https://hero-assignment-10.web.app/"
            />
          </Col>

          <Col md={4} sm={6} className="project-card">
            <ProjectCard
              imgPath={team}              
              title="React Team Tracer Apps"
              description="In this project, users can select and see team wise details information."
              link="https://github.com/rubeldiu/react-team-tracer"
              live="https://inspiring-heyrovsky-c7cd49.netlify.app/"
            />
          </Col>          
          <Col md={4} sm={6} className="project-card">
            <ProjectCard
              imgPath={amazon}              
              title="Amazone"
              description="Amazon clone with reactjs,contexapi,materiului."
              link="https://github.com/rubeldiu/React-amazon"
              live="https://fir-50d99.web.app/"
            />
          </Col>          
          <Col md={4} sm={6} className="project-card">
            <ProjectCard
              imgPath={airbnb}              
              title="Airbnb"
              description="Airbnb clone with reactjs,contexapi,materiului."
              link="https://github.com/rubeldiu/airbnb"
              live="https://airbnb-78.web.app/"
            />
          </Col>          
        </Row>        
      </Container>
    </Container>
    
            
        </>
    );
};

export default Projects;