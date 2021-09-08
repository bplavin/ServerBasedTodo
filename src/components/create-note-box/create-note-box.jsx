import React, { Component } from "react";
import './create-note-box.css'

export default class NoteBox extends Component {
    render() {
        const { data, onBtnDelete} = this.props   
 
      
        return (
            <div className='note-container'
                 key={data.id}>
                
            <div>{data.id}</div>
            <button className='delete-btn'
                    onClick={(id) => onBtnDelete(data.id, id)}>
                    X
                </button>
            <button className='edit-btn'>Edit
                </button>
            <div>{data.title}</div>
            </div>
        );
    };
};


      