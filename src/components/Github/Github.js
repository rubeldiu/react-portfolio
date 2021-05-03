import React from 'react'
import { Row } from 'react-bootstrap'
import GitHubCalendar from 'react-github-calendar'

function Github() {
    
    return (
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
        <h1 className="project-heading" style={{ paddingBottom: "20px" }}>
          Days I <strong className="main-name">Code</strong>
        </h1>
        <GitHubCalendar
          username="rubeldiu"
          blockSize={15}
          blockMargin={5}
          fontSize={16}
        />
      </Row>
    )
}

export default Github
