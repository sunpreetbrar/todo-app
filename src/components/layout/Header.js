import React from 'react';
import {Link} from "react-router-dom";

function header(){
        return (
            <header style = {headerStyle}>
            <h1>ToDo List</h1>
            <Link to="/" style={linkStyle}>Home</Link> | <Link to="/about" style ={linkStyle}>About</Link>
            </header>
        );
};

const headerStyle = {
    backgroundColor: 'black',
    padding: '5px',
    textAlign: 'center',
    color:'white'
};

const linkStyle = {
    color: '#fff'
}

export default header;