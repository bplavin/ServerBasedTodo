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
            if (event.key === 'Enter') {
            this.setState({ editing: false })
          };
        };
    };
    
    render() {
        const { data, onBtnDelete, setUpdate} = this.props    

        const isEditing = !this.state.editing ? <></> :
            <textarea className='text-area'
                  value={data.title}
                  onKeyDown={this.editingDone}
                  onChange={e => {
                  setUpdate(e.target.value, data.id)                            
                }}>
            </textarea>
        
        return (
            <div className='note-container'>
                <div>{data.id}</div>
                <button className='delete-btn'
                    onClick={(id) => onBtnDelete(data.id, id)}>
                    X
                </button>
                <button className='edit-btn'
                    onClick={this.obBtnEdit}
                    >Edit
                </button>
                {isEditing}
                <div>{data.title}</div>
            </div>
        );
    };
};
