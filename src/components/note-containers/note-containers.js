import React, { Component } from "react";
import './note-containers.css';
import TodoData from "../../service/service";

export default class NoteContainers extends Component {
    
    todoData = new TodoData();

    state = {
        notes: []
    };

    async componentDidMount() {
       const response = await this.todoData.getAllNotes()
       const results = this.setState({notes: response})

       return results;
    }
   
    render () {

        const { notes } = this.state

        return (
         
        <div className='note-containers'>
            {notes.map(note => 
            <div className='note-container'>
                <div>{note.id}</div>
                <button className='delete-btn'>X</button>
                <button className='edit-btn'>Edit</button>
                <div>{note.title}</div>
                
            </div>
            )}
            
        </div>
        );
    };
};
 