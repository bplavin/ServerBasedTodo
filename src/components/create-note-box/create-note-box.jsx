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

        this.editingDone = event => {
            if (event.key === "Enter") {
            this.setState({ editing: false })
          };
        };
    };
    
    render() {
        const { data, onBtnDelete, setUpdate} = this.props    
        
        const editMode = {};
        editMode.display = 'none';

            if (this.state.editing) {
                editMode.display = 'block';
            }

        
        return (
            <div className='note-container'
                >
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
                    style={editMode}
                    value={data.title}
                    onChange={e => {
                        setUpdate(e.target.value, data.id)                            
                    }}
                    onKeyDown={this.editingDone}>
            </textarea><div>{data.title}</div>
            </div>
        );
    };
};
