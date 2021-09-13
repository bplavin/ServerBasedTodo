import React, { Component } from "react";
import './app-header.css';

export default class AppHeader extends Component {

  constructor() {
    super();

    this.state = {
      text: ''
    };

    this.addNoteText = (e) => {
      this.setState({
        text: e.target.value
      });
    };

    this.onSubmit = (e) => {
      e.preventDefault();
      this.props.onNoteAdded(this.state.text);
    };

  }

    render() {
         
        return (
        <form onSubmit={this.onSubmit}>
          <header className="app-header">
            
          <input className='search-form'
            placeholder='Type to search'>

            </input>
            
          <input className='type-box'
            placeholder='Write a note...'
            type='text'
            onChange={this.addNoteText}>
            
            </input>
            
          <button className='add-note-btn'
          >
            Add note
            </button>

          </header>

        </form>
        );
    };
};

