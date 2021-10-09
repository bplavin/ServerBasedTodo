import React, { Component } from "react";
import "./app-header.css";

export default class AppHeader extends Component {
  constructor() {
    super();

    this.state = {
      text: "",
    };
  }

  addNoteText = (e) => {
    this.setState({
      text: e.target.value,
    });
  };

  onSubmit = (e) => {
    this.props.onNoteAdded(this.state.text);
  };

  render() {
    return (
      <form onSubmit={this.onSubmit}>
        <header className="app-header">
          <input
            className="type-box"
            placeholder="Write a note..."
            type="text"
            onChange={this.addNoteText}
          ></input>

          <button className="add-note-btn">Add note</button>
        </header>
      </form>
    );
  }
}
