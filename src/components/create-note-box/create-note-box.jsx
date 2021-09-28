import React, { Component } from "react";
import './create-note-box.css'

export default class NoteBox extends Component {

    constructor() {
        super();

        this.state = {
            editing: false,
            text: ''
        };
    };

    onBtnStartEdit(text) {
        this.setState({
            editing: true,
            text: text
        });
    };

    editingDone(event, id) {
        if (event.key === 'Enter') {
            this.setState({ editing: false });
            this.props.setUpdate(this.state.text, id);
        }
    };

    onChangeText(text) {
        this.setState({
            text: text
        });
    }

    render() {
        const { data, onBtnDelete } = this.props

        const isEditing = !this.state.editing ? <></> :
            <textarea className='text-area'
                value={this.state.text}
                onKeyDown={e => this.editingDone(e, data.id)}
                onChange={e => {
                    this.onChangeText(e.target.value)
                }}>
            </textarea>

        return (
            <div className='note-container'>
                <div>{data.id}</div>
                <button className='delete-btn'
                    onClick={(id) => onBtnDelete(data.id, id)}>
                    X
                </button>
                <button className='edit-btn' onClick={e => this.onBtnStartEdit(data.title)}>
                    Edit
                </button>
                {isEditing}
                <div>{data.title}</div>
            </div>
        );
    };
};
