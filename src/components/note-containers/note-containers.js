import React, { Component } from "react";
import './note-containers.css';
import TodoData from "../../service/service";

export default class NoteContainers extends Component {
    
    todoData = new TodoData();

   

    constructor() {
        super();

        this.state = {
            notes: []
        };

        this.onBtnDelete = (id) => {
            this.setState(({ notes }) => {
                const idx = notes.findIndex((el) => el.id === id);
                const newArr = [...notes.slice(0, idx), ...notes.slice(idx + 1)];

                return {
                    notes: newArr
                };
            });

         
            fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, {
                method: 'DELETE'
            });
        };

    }


    async componentDidMount() {
       const response = await this.todoData.getAllNotes()
       const results = this.setState({notes: response})

       return results;
    }
   
    render () {
        const { notes } = this.state;

        const createNote =  notes.map(note => 
           <div className='note-container'
                key={note.id}>
               <div>{note.id}</div>
               <button className='delete-btn'
                       onClick={(id) => this.onBtnDelete(note.id, id)}>
                X</button>
               <button className='edit-btn'>Edit</button>
               <div>{note.title}</div>
           </div>
        )

        return (
        <div className='note-containers'>
            { createNote }
        </div>
        );
    };
};
 