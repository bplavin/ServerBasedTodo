import React, { Component } from 'react';

import AppHeader from '../app-header/app-header';
import ListItems from '../list-items/list-items';
import NoteContainers from '../note-containers/note-containers';
import TodoData from '../../service/service';

import './app.css';

export default class App extends Component {

  todoData = new TodoData();

  
  async componentDidMount() {
    const response = await this.todoData.getAllNotes()
    const results = this.setState({notes: response})

    return results;
 };

  constructor () {
    super();

    this.state = {
      notes: []
    };

    this.maxId = 201; 

    //Add note function 
    this.addNote = (text) => {
      const newNote = {
        title: text,
        id: this.maxId++
      };

          this.setState(({notes}) => {
            const newArr = [
              ...notes,
              newNote
            ];

            return {
              notes: newArr
            };
          });
        };

    //Delete note function 
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

      //Edit note function
      this.setUpdate = (updatedTitle, id) => {
        this.setState({
            notes: this.state.notes.map(note => {
                if(note.id === id) {
                    note.title = updatedTitle
                }
                return note
            })
        });
      };
    };
  };

  render () {
    return (
      <div className="app">
        <AppHeader onNoteAdded={this.addNote}/>

        <NoteContainers
          notes={this.state.notes}
          setUpdate={this.setUpdate}
          onBtnDelete={this.onBtnDelete} />

        <ListItems />
        </div>
    );
  };
};

