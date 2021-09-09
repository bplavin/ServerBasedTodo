import React, { Component } from "react";
import './create-note-box.css'

export default class NoteBox extends Component {
    
    constructor() {
        super();

        this.state = {
        editing: false
        };

        this.obBtnEdit = () => {
            this.setState({
               editing: true
              });       
        };
    };
    
    render() {
        const { data, onBtnDelete} = this.props    
        
        const editMode = {};
        editMode.display = 'none';

            if (this.state.editing) {
                editMode.display = 'block';
            }

        
        return (
            <div className='note-container'
                 key={data.id}>    
            <div>{data.id}</div>
            <button className='delete-btn'
                    onClick={(id) => onBtnDelete(data.id, id)}>
                    X
                </button>
            <button className='edit-btn'
                    onClick={this.obBtnEdit}
                >Edit
                </button>
            <textarea className='text-area'
                      style={editMode}>
                </textarea>
            <div>{data.title}</div>
            </div>
        );
    };
};
