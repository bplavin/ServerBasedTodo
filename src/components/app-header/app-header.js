import React, { Component } from "react";
import './app-header.css';

export default class AppHeader extends Component {
    
    render() {
        return (
        <div>
            <header className="app-header">
            <input className='search-form'
            placeholder='Type to search'></input>
            <input className='type-box'
            placeholder='Write a note...'></input>
            <button className='add-note-btn'>
              Add note
            </button>
          </header>
        </div>
        );
    };
};

