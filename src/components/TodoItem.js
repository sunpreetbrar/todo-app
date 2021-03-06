import React, { Component } from "react";

export class TodoItem extends Component {
    getStyle = content => {
        return {
            background: "#f4f4f4",
            borderBottom: "1px #ccc dotted",
            textDecoration: content ? "line-through" : "none"
        };
    };
    render() {
        const { id, title } = this.props.todo;
        return (
            <div id="todolist" style={this.getStyle(this.props.todo.completed)}>
                <p>
                    <input type="checkbox" onClick={this.props.changeComplete.bind(this, id)} />{" "}
                    {title}
                    <button style={btnStyle} onClick={this.props.delTodo.bind(this, id)}>
                        x
                    </button>
                </p>
            </div>
        );
    }
}

const btnStyle = {
    background: "#ff0000",
    color: "#fff",
    border: "none",
    padding: "5px 9px",
    borderRadius: "50%",
    cursor: "pointer",
    float: "right"
};

export default TodoItem;
