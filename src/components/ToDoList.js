import React, { Component } from "react";
import ToDoForm from "./ToDoForm";
import ToDo from "./ToDo";

export default class ToDoList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      todos: [],
      todoToShow: "all",
      text: "",
      edited: "",
    };
  }

  addToDo = (todo) => {
    this.setState({
      todos: [todo, ...this.state.todos],
    });
  };

  toggleComplete = (id) => {
    this.setState({
      todos: this.state.todos.map((todo) => {
        if (todo.id === id) {
          return {
            id: todo.id,
            text: todo.text,
            complete: !todo.complete,
          };
        } else {
          return todo;
        }
      }),
    });
  };

  updateTodoToShow = (s) => {
    this.setState({
      todoToShow: s,
    });
  };

  handleDeleteTodo = (id) => {
    this.setState({
      todos: this.state.todos.filter((todo) => todo.id !== id),
    });
  };

  handleEditTodo = (id) => {
      this.state.todos.map((todo) => {
          if (todo.id === id) {
           this.setState({
               text: todo.text = 'labas'
           })
          }
      })
  }

  render() {
    let todos = [];

    if (this.state.todoToShow === "all") {
      todos = this.state.todos;
    } else if (this.state.todoToShow === "active") {
      todos = this.state.todos.filter((todo) => !todo.complete);
    } else if (this.state.todoToShow === "complete") {
      todos = this.state.todos.filter((todo) => todo.complete);
    }

    return (
      <div>
        <ToDoForm onSubmit={this.addToDo} />
        {todos.map((todo) => (
          <ToDo
            key={todo.id}
            toggleComplete={() => this.toggleComplete(todo.id)}
            onDelete={() => this.handleDeleteTodo(todo.id)}
            onEdit={() => this.handleEditTodo(todo.id)}
            todo={todo}
          />
        ))}

        <div className="container mt-5">
          <button
            className="btn btn-group"
            onClick={() => this.updateTodoToShow("all")}
          >
            all
          </button>

          <button
            className="btn btn-group"
            onClick={() => this.updateTodoToShow("active")}
          >
            active :&nbsp;
            {this.state.todos.filter((todo) => !todo.complete).length}
          </button>

          <button
            className="btn btn-group"
            onClick={() => this.updateTodoToShow("complete")}
          >
            completed : &nbsp;
            {this.state.todos.filter((todo) => todo.complete).length}
          </button>
        </div>
      </div>
    );
  }
}
