import React, { Component } from 'react';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { Carousel } from 'react-responsive-carousel';
import styled from 'styled-components';
import { motherImages } from './helper';

const Wrapper = styled.section``;

export default class Mother extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentSlide: 0,
    };
  }

  updateCurrentSlide = (index, x) => {
    this.props.handleUpdateMother(x.ref);
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
        <h3 className="parent">Mother</h3>
        <Carousel
          className="container--carousel"
          selectedItem={this.state.currentSlide}
          onChange={this.updateCurrentSlide}
          swipeScrollTolerance={100}
          {...this.props}
        >
          {Object.keys(motherImages).map((mother, i) => {
            return (
              <div key={i} ref={mother.replace('.png', '')}>
                <img src={motherImages[mother]} alt={motherImages[mother]} />
                <p className="legend">{mother.replace('.png', '').replace('mother', '')}</p>
              </div>
            );
          })}
        </Carousel>
      </Wrapper>
    );
  }
}
