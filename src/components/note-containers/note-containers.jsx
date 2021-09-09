import React, { Component } from "react";
import './note-containers.css';
import TodoData from "../../service/service";
import NoteBox from "../create-note-box/create-note-box";

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

        this.setUpdate = (updatedTitle, id) => {
            this.setState({
                notes: this.state.notes.map(note => {
                    if(note.id === id) {
                        note.title = updatedTitle
                    }
                    return note
                })
            })
          };
    };


    async componentDidMount() {
       const response = await this.todoData.getAllNotes()
       const results = this.setState({notes: response})

       return results;

       
    };
   
    render () {
        const { notes } = this.state;
        
        return (
        <div className='note-containers'>
            {notes.map(note =>
              <NoteBox
                key={note.id}
                data={note}
                onBtnDelete={this.onBtnDelete}
                setUpdate={this.setUpdate}
            /> 
            )}
        </div>
        );
    };
};
