import React, { Component } from 'react';
import Header from './Header';
import RandomChild from './RandomChild';
import imageInfo from './imageInfo';
import SubmitAnswer from './SubmitAnswer';
import Father from './Father';
import Mother from './Mother';
import Nav from './Nav';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      father: '',
      mother: '',
      child: '',
      childImagePath: '',
    };
  }

  // return true or false
  checkAnswer = () => {
    if (!imageInfo.child[this.state.child]) return false;
    const getMother = imageInfo.child[this.state.child].mother[0];
    const getFather = imageInfo.child[this.state.child].father[0];
    if (this.state.father === getFather && this.state.mother === getMother) {
      console.log('true');
      return true;
    }
    // console.log(`${getMother} / ${getFather}`);
  };

  handleUpdatechildImagePath = childImagePath => {
    this.setState({
      childImagePath,
    });
  };

  handleUpdateChild = child => {
    this.setState({
      child,
    });
  };

  handleUpdateMother = mother => {
    const removePrefix = mother.replace('mother', '');
    this.setState({
      mother: removePrefix,
    });
  };

  handleUpdateFather = father => {
    const removePrefix = father.replace('father', '');
    this.setState({
      father: removePrefix,
    });
  };

  render() {
    return (
      <div>
        <Nav />
        <div className="container">
          <Header />

          <RandomChild
            handleUpdatechildImagePath={this.handleUpdatechildImagePath}
            selectedChild={this.state.childImagePath}
            handleUpdateChild={this.handleUpdateChild}
          />
          <div className="container--allCarousels">
            <Father handleUpdateFather={this.handleUpdateFather} />
            <Mother handleUpdateMother={this.handleUpdateMother} />
          </div>

          <SubmitAnswer checkAnswer={this.checkAnswer} />
        </div>
      </div>
    );
  }
}

export default App;
