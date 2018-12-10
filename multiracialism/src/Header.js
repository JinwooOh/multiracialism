import React, { Component } from 'react';

export default class Header extends Component {
  render() {
    return (
      <div className="container--header">
        <h3 className="header__title">"REBIRTH OF A NATION, COMPUTER-STYLE - TIME Magazine"</h3>
        <p>
          A Morph 2.0 program creates child images with 14 people of various racial and ethnic
          backgrounds. Can you find a mother and a father of a child based on a child face?
        </p>

        <br />
        <p>
          Instruction: select a father and a mother of a child, and click "CHECK ANSWER" to check
          the answer. "RANDOM" button shows another child image.
        </p>
      </div>
    );
  }
}
