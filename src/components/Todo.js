import React, { Component } from 'react';
import TodoItem from './TodoItem';

class Todo extends Component { 
  render() { 
    return this.props.todo.map((todoValue) => {
      return (<TodoItem todo = {todoValue} key = {this.props.todo.id} changeComplete = { this.props.changeComplete } delTodo = {this.props.delTodo} />)
    })
  }
};

export default Todo;
