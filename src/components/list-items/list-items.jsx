import React, { Component } from 'react';

import './list-items.css';

export default class ListItems extends Component {
  render() {
    const { usersId } = this.props
    return (
      <div className='list-items'>
        <div className='check-box'>
          {usersId.map(id =>
            <div>
              <input type='checkBox'></input>
              {id}
            </div>
          )}
        </div>
      </div>

    );
  };
};

