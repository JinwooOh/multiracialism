import React, { Component } from 'react';
import { childImages } from './helper';

export default class RandomChild extends Component {
  componentDidMount() {
    this.getRandomChild(childImages);
  }

  getRandomChild = obj => {
    const keys = Object.keys(obj);
    const selectedChild = obj[keys[(keys.length * Math.random()) << 0]];
    const fileName = selectedChild
      .split(/(\\|\/)/g)
      .pop()
      .split('.')
      .shift();
    this.props.handleUpdatechildImagePath(selectedChild);
    this.props.handleUpdateChild(fileName);
  };

  render() {
    return (
      <div className="container--randomChild">
        <h3 className="child">Child</h3>
        <img className="randomChild__image" src={this.props.selectedChild} alt="selectedChild" />
        <button
          className="btn btn__randomChild"
          onClick={() => {
            this.getRandomChild(childImages);
          }}
        >
          Random
        </button>
      </div>
    );
  }
}
