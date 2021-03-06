import React from "react";
import { Container, Row } from "react-bootstrap";
import Navigation from "../common/Navigation/Navigation";
import Footer from "../Footer/Footer";
import "./Blog.css";

const Blog = () => {
  return (
    <div>
      
      <Container fluid className="blog-section">
        <Container>
          <h1 className="project-heading">
            My Recent <strong className="main-name">Blogs </strong>
          </h1>
          <p>Here are a few blog posts, I've written recently !!!.</p>
          <Row style={{ paddingBottom: "10px" }}>
            <a
              className="blog-link"
              href="https://hamiduldiu.medium.com/react-spring-for-animations-fbbc44c09c62"
              target="_blank"
              rel="noreferrer"
              style={{ fontSize: "1.2em" }}
            >
              1. React animations with react-spring
            </a>
          </Row>
          <Row style={{ paddingBottom: "10px" }}>
            <a
              className="blog-link"
              href="https://hamiduldiu.medium.com/react-typewriter-effect-27cf967c2ba1"
              target="_blank"
              rel="noreferrer"
              style={{ fontSize: "1.2em" }}
            >
              2. React typewriter-effect
            </a>
          </Row>
          <Row style={{ paddingBottom: "10px" }}>
            <a
              className="blog-link"
              href="https://hamiduldiu.medium.com/send-email-with-emailjs-bfe5abcc0871"
              target="_blank"
              rel="noreferrer"
              style={{ fontSize: "1.2em" }}
            >
              3. React send email with emailjs
            </a>
          </Row>
        </Container>
      </Container>
     
    </div>
  );
};

export default Blog;
