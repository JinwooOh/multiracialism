import React, { Component } from 'react';

export default class Nav extends Component {
  render() {
    return (
      <div className="nav">
        <ul>
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="/about">About</a>
          </li>
        </ul>
      </div>
    );
  }
}
