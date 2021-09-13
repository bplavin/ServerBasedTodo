import React, { Component } from "react";
import './note-containers.css';
import NoteBox from "../create-note-box/create-note-box";

export default class NoteContainers extends Component {
    
  
    render () {
        const { notes, setUpdate, onBtnDelete } = this.props;
        
        return (
        <div className='note-containers'>
            {notes.map(note =>
              <NoteBox
                key={note.id}
                data={note}
                onBtnDelete={onBtnDelete}
                setUpdate={setUpdate}
                />
            )}
            
        </div>
        );
    };
};
