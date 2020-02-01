import React, { Component } from "react";
import { BrowserRouter as Router , Route} from "react-router-dom";
import Todo from "./components/Todo.js";
import Header from "./components/layout/Header.js";
import AddTodo from "./components/AddTodo";
import About from "./components/pages/About";
import "./App.css";

class App extends Component {
    state = {
        todos: [
            {
                id: 1,
                title: "Meeting with team",
                completed: false
            },
            {
                id: 2,
                title: "Have lunch and listen to songs",
                completed: false
            },
            {
                id: 3,
                title: "Complete Homework",
                completed: false
            }
        ]
    };

    changeComplete = id => {
        this.setState({
            todos: this.state.todos.map(todo => {
                if (todo.id === id) {
                    todo.completed = !todo.completed;
                }
                return todo;
            })
        });
    };

    delTodo = id => {
        this.setState({ todos: [...this.state.todos.filter(todo => todo.id !== id)] });
    };

    newTodo = value => {
        let nextTodo = this.state.todos.length;
        nextTodo = nextTodo + 1;
        const newTodo = {
            id: nextTodo,
            title: value,
            completed: false
        };
        this.setState({ todos: [...this.state.todos, newTodo] });
    };

    render() {
        return (
            <Router>
            <div className="App">
                <Header />
                <Route exact path = '/' 
                render = {props => (
                    <React.Fragment>
                    <AddTodo AddTodo={this.newTodo} />
                    <Todo
                        todo={this.state.todos}
                        changeComplete={this.changeComplete}
                        delTodo={this.delTodo}
                    />
                    </React.Fragment>
                )}/>
                <Route path = "/about" 
                component = {About}
                />
            </div>
            </Router>
        );
    }
}

export default App;
