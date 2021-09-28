import React, { Component } from 'react';

import './list-items.css';

export default class ListItems extends Component {
    render () {
        return (
        <div className='list-items'>
          <div className='check-box'>
            <input type='checkBox'>
            </input>
            <p>Name 1</p>
          </div>
        </div>
         
        );
    };
};

