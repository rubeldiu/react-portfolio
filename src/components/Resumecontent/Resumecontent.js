import React from 'react';
import './Resumecontent.css'

const Resumecontent = (props) => {
    return (
        <div className="resume-item">
      <h5 className={props.title ? "resume-title" : "resume-no-title"}>
        {props.title}
      </h5>
      <p>
        <em>{props.date}</em>
      </p>
      <ul>
        {props.content.map((value, index) => (
          <li key={index}> ‣ {value}</li>
        ))}
      </ul>
    </div>
    );
};

export default Resumecontent;