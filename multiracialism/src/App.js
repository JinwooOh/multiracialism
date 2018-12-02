import React, { Component } from 'react';
import Header from './Header';
import RandomChild from './RandomChild';
import CarouselContainer from './Carousel'
import imageInfo from './imageInfo';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      father: '',
      mother: '',
      child: ''
    }
  }
  handleUpdateChild = (child) => {
    this.setState({
      child
    })
  }
  render() {
    console.log(imageInfo);
    return (
      <div>
        <Header />
        <RandomChild handleUpdateChild ={this.handleUpdateChild} selectedChild = {this.state.child}/>
        <CarouselContainer/>
      </div>
    );
  }
}

export default App;
