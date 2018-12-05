import React, { Component } from 'react';

export class SubmitAnswer extends Component {
  render() {
    return (
      <div>
        <button
          onClick={() => {
            if (this.props.checkAnswer()) {
              alert('You got it')
            }
          }}
        >
          Hello?
        </button>
      </div>
    );
  }
}

export default SubmitAnswer;
