import React, { Component } from 'react';

import './list-items.css';

export default class ListItems extends Component {

  render() {
    const { userIds } = this.props
    return (
      <div>
        <p className='tip-text'>Select user to display notes:</p>
        <div className='check-box'>
          {Array.from(userIds).map(value =>
            <div key={value} className='users-rows'>
              <input className='check'
                type='checkBox'
                checked={value[1]}
                onChange={() => this.props.check(value[0], value[1])}>
              </input>
              <p>User ID: {value}</p>
            </div>
          )}
        </div>
      </div >

    );
  };
};

