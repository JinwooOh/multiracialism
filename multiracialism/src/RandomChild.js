import React, { Component } from 'react'
import {childImages} from './helper';
export default class RandomChild extends Component {
  componentDidMount(){
    this.getRandomChild(childImages);
  }

  getRandomChild = (obj) =>{
    let keys = Object.keys(obj);
    const selectedChild = obj[keys[ keys.length * Math.random() << 0]];
    this.props.handleUpdateChild(selectedChild)
  }
  render() {
    return (
      <div>
        <img src={this.props.selectedChild}/>
        <button onClick={()=>{
          this.getRandomChild(childImages);
        }}>Random</button>
      </div>
    )
  }
}
