import React, { Component } from 'react'
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import styled from 'styled-components';
import {fatherImages, motherImages} from './helper';

export default class CarouselContainer extends Component {
  render() {
    const Wrapper = styled.section`
    display: flex;
    padding: 4em;
    background: papayawhip;
  `;
    return (
        <Wrapper>
            <Carousel width="400px">
                <div>
                    <img src= {motherImages['motheritalian.png']}/>
                    <p className="legend">Legend 1</p>
                </div>
                <div>
                    <img src={motherImages['mothermiddleEastern.png']}/>
                    <p className="legend">Legend 2</p>
                </div>
            </Carousel>
            <Carousel width="400px">
                <div>
                    <img src= {fatherImages['fathermiddleEastern.png']}/>
                    <p className="legend">Legend 1</p>
                </div>
                <div>
                    <img src={fatherImages['fathermiddleEastern.png']}/>
                    <p className="legend">Legend 2</p>
                </div>
            </Carousel>

        </Wrapper>
    );
  }
}
