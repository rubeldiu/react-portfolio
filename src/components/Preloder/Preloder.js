import React from 'react';
import './Preloder.css';

const Preloder = (props) => {
    return (
        <div id={props.loader ? "preloader":"preloader-none"}>
        </div>
    );
};

export default Preloder;