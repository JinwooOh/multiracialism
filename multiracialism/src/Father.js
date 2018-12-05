import React, { Component } from 'react';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { Carousel } from 'react-responsive-carousel';
import styled from 'styled-components';
import { fatherImages } from './helper';

const Wrapper = styled.section`
  display: flex;
  padding: 4em;
  background: papayawhip;
`;

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
        <Carousel
          width="230px"
          selectedItem={this.state.currentSlide}
          onChange={this.updateCurrentSlide}
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
