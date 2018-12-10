import React, { Component } from 'react';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { Carousel } from 'react-responsive-carousel';
import styled from 'styled-components';
import { fatherImages } from './helper';

const Wrapper = styled.section``;

export default class Father extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentSlide: 0,
    };
  }

  updateCurrentSlide = (index, x) => {
    this.props.handleUpdateFather(x.ref);
    const { currentSlide } = this.state;
    if (currentSlide !== index) {
      this.setState({
        currentSlide: index,
      });
    }
  };

  render() {
    return (
      <Wrapper>
        <h3 className="parent">Father</h3>
        <Carousel
          className="container--carousel"
          selectedItem={this.state.currentSlide}
          onChange={this.updateCurrentSlide}
          swipeScrollTolerance={100}
          {...this.props}
        >
          {Object.keys(fatherImages).map((father, i) => {
            return (
              <div key={i} ref={father.replace('.png', '')}>
                <img src={fatherImages[father]} alt={fatherImages[father]} />
                <p className="legend">{father.replace('.png', '').replace('father', '')}</p>
              </div>
            );
          })}
        </Carousel>
      </Wrapper>
    );
  }
}
