import React, { Component } from 'react';

export class SubmitAnswer extends Component {
  render() {
    return (
      <div className="container--submit">
        <button
          className="btn"
          onClick={() => (this.props.checkAnswer() ? alert('You got it') : alert('X'))}
        >
          Check Answer
        </button>
      </div>
    );
  }
}

export default SubmitAnswer;
