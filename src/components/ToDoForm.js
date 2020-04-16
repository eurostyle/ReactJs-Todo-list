import React, { Component } from "react";
import shortid from "shortid";

export default class ToDoForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      text: "",
    };
  }

  handleChange = (event) => {
    this.setState({
      text: event.target.value,
    });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    if (this.state.text !== "") {
      this.props.onSubmit({
        id: shortid.generate(),
        text: this.state.text,
        complete: false,
      });
    }
    this.setState({
      text: "",
    });
  };

  render() {
    return (
      <div className="container mt-5 mb">
        <form onSubmit={this.handleSubmit}>
          <input
            name="text"
            onChange={this.handleChange}
            value={this.state.text}
            placeholder="To do..."
          />
          <button className="btn" onClick={this.handleSubmit}>
            Add new
          </button>
        </form>
      </div>
    );
  }
}
