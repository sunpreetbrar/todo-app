import React from 'react';

class AddTodo extends React.Component {
    State = {
        addedStuff: ''
    }
    writeTodo = (event) =>{
        this.setState({addedStuff: event.target.value});
    };
    submitForm = (event) => {
        event.preventDefault();
        this.props.AddTodo(this.state.addedStuff);
        this.setState({ addedStuff: ' ' });
    };

    render(){
        return(
            <form style = {formStyle} onSubmit = {this.submitForm}>
            <input type ='text' style = {txtInputStyle} onChange = {this.writeTodo} ></input>
            <input type ='submit' style = {submitStyle}></input>
            </form>
        )
    }
}

const formStyle = {
    display: 'flex'
};

const txtInputStyle = {
    flexGrow: '10'
};

const submitStyle = {
    flexGrow: '1'
};

export default AddTodo;