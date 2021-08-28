import React, { Component } from 'react';

import AppHeader from '../app-header/app-header';
import ListItems from '../list-items/list-items';
import NoteContainers from '../note-containers/note-containers';


import './app.css';

export default class App extends Component {

  render () {
    return (
      <div className="App">
        <AppHeader />

        <NoteContainers />

        <ListItems />
        </div>
    );
  }

}

