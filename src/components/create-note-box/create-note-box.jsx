import React, { Component } from "react";
import './create-note-box.css';

export default class NoteBox extends Component {
    render() {
        const { data, onBtnDelete } = this.props    

        const notesList = data.map(note => 
            <div className='note-container'
                key={note.id}>
                <div>{note.id}</div>
                <button className='delete-btn'
                        onClick={(id) => onBtnDelete(note.id, id)}>
                 X</button>
                <button className='edit-btn'>Edit</button>
                <div>{note.title}</div>
            </div>
        )

        return (
          notesList
        );
    };
};


      