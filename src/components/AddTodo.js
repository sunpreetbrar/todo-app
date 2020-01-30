import React from "react";

class AddTodo extends React.Component {
    state = {
        addedStuff: ""
    };
    writeTodo = event => {
        this.setState({ addedStuff: event.target.value });
    };
    submitForm = event => {
        event.preventDefault();
        this.props.AddTodo(this.state.addedStuff);
        this.setState({ addedStuff: " " });
    };

    render() {
        return (
            <form onSubmit={this.submitForm}>
                <input type="text" onChange={this.writeTodo}></input>
                <input type="submit"></input>
            </form>
        );
    }
}

export default AddTodo;
