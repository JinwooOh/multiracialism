import React, { Component } from 'react';

const Emoji = props => (
  <span
    className="emoji"
    role="img"
    aria-label={props.label ? props.label : ''}
    aria-hidden={props.label ? 'false' : 'true'}
  >
    {props.symbol}
  </span>
);

export default class Discussion extends Component {
  render() {
    return (
      <div className="container--discussion">
        <h3 className="discussion__title">Discussion</h3>
        <ul>
          <li>
            <Emoji symbol="👪" /> How hard was to find a parent?
          </li>
          <li>
            <Emoji symbol="🧒🏾" /> Can you tell race of a child?
          </li>
          <li>
            <Emoji symbol="✅" /> How important to know his or her race to identify a parent?
          </li>
          <li>
            <Emoji symbol="📖" /> Should we also categorize children based on their races?
          </li>
        </ul>
      </div>
    );
  }
}
