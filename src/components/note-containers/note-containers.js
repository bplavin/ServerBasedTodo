import React, { Component } from "react";
import './note-containers.css';
import TodoData from "../../service/service";

export default class NoteContainers extends Component {
    
    todoData = new TodoData();

    state = {
        notes: []
    };

    componentDidMount() {
        this.todoData
        .getAllNotes()
        .then((notes) => {
            this.setState ({
                notes
        });
      });
    }
   
    render () {

        const { notes } = this.state

        return (
         
        <div className='note-containers'>
            {notes.map(note => 
            <div className='note-container'>
                <span>{note.id}</span> <br />
                <span>{note.title}</span>
            </div>
            )}
        </div>
        );
    };
};
 