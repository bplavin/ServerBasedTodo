import React, { Component } from "react";

import AppHeader from "../app-header/app-header";
import ListItems from "../list-items/list-items";
import NoteContainers from "../note-containers/note-containers";
import TodoData from "../../service/service";
import SearchForm from "../search-form/search-form";

import "./app.css";

export default class App extends Component {
  todoData = new TodoData();
  maxId = 201;

  constructor() {
    super();

    this.state = {
      notes: [],
      users: {},
      text: "",
    };
  }

  async componentDidMount() {
    const response = await this.todoData.getAllNotes();
    const newMap = new Map(response.map((i) => [i.id, i]));
    this.setState({ notes: newMap });

    const userIds = new Set(response.map((i) => i.userId));
    this.setState({ users: userIds });
    console.log(userIds);
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

    fetch("https://jsonplaceholder.typicode.com/posts", {
      method: "POST",
      body: JSON.stringify(newNote),
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

    fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, {
      method: "PUT",
      body: JSON.stringify(this.state.notes),
    });
  };

  searchNotes(notesMap, text) {
    if (text.length === 0) {
      return Array.from(notesMap).map(([, note]) => note);
    }
    const notes = [];
    for (let keyValue of notesMap) {
      const note = keyValue[1];
      if (note.title.startsWith(text)) {
        notes.push(note);
      }
    }
    return notes;
  }

  listItems(data) {
    let items = [];

    Array.from(data).map((id) => items.push(id));

    return items;
  }

  onSearchChange = (text) => {
    this.setState({ text });
  };

  render() {
    const { notes, text, users } = this.state;
    const filteredNotes = this.searchNotes(notes, text);
    const userId = this.listItems(users);

    return (
      <div className="app">
        <AppHeader onNoteAdded={this.addNote} />

        <NoteContainers
          notes={filteredNotes}
          setUpdate={this.setUpdate}
          onBtnDelete={this.onBtnDelete}
        />

        <div>
          <SearchForm searchNotes={this.onSearchChange} />
          <ListItems usersId={userId} />
        </div>
      </div>
    );
  }
}
