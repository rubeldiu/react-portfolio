import React from 'react'
import { Container, Row } from 'react-bootstrap'
import Github from '../Github/Github'
import Techstack from './Techstack'
import './Techstack.css'

function Tech() {
    return (
       
       <Container>
           <h1 className="project-heading" style={{justifyContent:"center"}}>
          Professional <strong className="main-name">Skillset </strong>
        </h1>
        <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
         <Techstack iconName="devicon-react-original-wordmark" />
          <Techstack iconName="devicon-javascript-plain " />
          <Techstack iconName="devicon-nodejs-plain-wordmark " />
          <Techstack iconName="devicon-express-original-wordmark" />
          <Techstack iconName="devicon-mongodb-plain-wordmark" />
          <Techstack iconName="devicon-git-plain-wordmark" />
          <Techstack iconName="devicon-bootstrap-plain-wordmark" />
          <Techstack iconName="devicon-css3-plain" />
          <Techstack iconName="devicon-html5-plain" />
          <Techstack iconName="devicon-materialui-plain" />
        </Row>
        <div style={{justifyContent: "center", paddingBottom: "10px"}}>
        <h1 className="project-heading">
        Tools <strong className="main-name">I use</strong> 
        </h1>
        </div>
        <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
          <Techstack iconName="devicon-visualstudio-plain" />
          <Techstack iconName="devicon-chrome-plain" />
          <Techstack iconName="devicon-docker-plain" />
          <Techstack iconName="devicon-firebase-plain" />
          <Techstack iconName="devicon-slack-plain" />
        </Row>
        <Github/>

       </Container>
       
    )
}

export default Tech
