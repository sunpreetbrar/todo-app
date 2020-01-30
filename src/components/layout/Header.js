import React from 'react';

function header(){
        return (
            <header style = {headerStyle}>
            <h1 style = {{color:'white'}}>ToDo List</h1>
            </header>
        );
};

const headerStyle = {
    backgroundColor: 'black',
    padding: '5px',
    textAlign: 'center',
};

export default header;