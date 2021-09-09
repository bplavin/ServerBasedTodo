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
                data={note}
                onBtnDelete={this.onBtnDelete}
            /> 
            )}
        </div>
        );
    };
};
