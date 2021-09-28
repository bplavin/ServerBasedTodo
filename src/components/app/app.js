import React, { Component } from "react";

import AppHeader from "../app-header/app-header";
import ListItems from "../list-items/list-items";
import NoteContainers from "../note-containers/note-containers";
import TodoData from "../../service/service";

import "./app.css";

export default class App extends Component {
  todoData = new TodoData();
  maxId = 201;

  constructor() {
    super();

    this.state = {
      notes: [],
    };
  }

  async componentDidMount() {
    const response = await this.todoData.getAllNotes();
    const newMap = new Map(response.map((i) => [i.id, i]));
    const results = this.setState({ notes: newMap });

    return results;
  }

  //Add note function
  addNote = (text) => {
    const newNote = {
      id: this.maxId++,
      title: text,
    };

    this.setState(({ notes }) => {
      notes.set(newNote.id, newNote);

      return {
        notes: notes,
      };
    });
  };

  //Delete note function
  onBtnDelete = (id) => {
    this.setState(({ notes }) => {
      notes.delete(id);

      return {
        notes: notes,
      };
    });

    fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, {
      method: "DELETE",
    });
  };

  //Edit note function
  setUpdate = (updatedTitle, id) => {
    this.setState(({ notes }) => {
      const note = notes.get(id);
      note.title = updatedTitle;
      notes.set(id, note);
      return {
        notes: notes,
      };
    });
  };

  render() {
    return (
      <div className="app">
        <AppHeader onNoteAdded={this.addNote} />

        <NoteContainers
          notes={this.state.notes}
          setUpdate={this.setUpdate}
          onBtnDelete={this.onBtnDelete}
        />

        <ListItems />
      </div>
    );
  }
}
