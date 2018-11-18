import React, { Component } from 'react';
import Slide from './Slide'
import LeftArrow from './LeftArrow'
import RightArrow from './RightArrow'
import '../App.css'
class Slider extends Component {
  constructor(props){
    super(props)

    this.state = {
      images: [
        'https://placekitten.com/500/500',
        'https://placekitten.com/500/501',
        'https://placekitten.com/500/502',
        'https://placekitten.com/500/503',
        
      ],
      currentSlide: 0,
      translateValue: 0
    }

  }

  prevSlide = () => {
    if( this.state.currentSlide === 0 ) return;

    this.setState( prevState => {
      return {
        currentSlide: prevState.currentSlide - 1,
        translateValue: prevState.translateValue  + this.moveSlide() / this.props.slideCount,
      }
    })
  }

  moveSlide = () => {
    const translateValue = document.querySelector('.slider').clientWidth;
    return translateValue;
  }

  nextSlide = () => {
    if( (this.state.images.length - 1 )  === this.state.currentSlide ){
      return this.setState( {
        currentSlide: 0, 
        translateValue: 0,
      })
    }

    this.setState(  (prevState ) => {
      // state object
      return {
        currentSlide: prevState.currentSlide + 1,
        translateValue: prevState.translateValue + -(this.moveSlide()) / this.props.slideCount,
      }
    })

  }

  render() {
    return (
      <div className="slider">
          <div className="slider__container"
          style={{
            transform: `translateX(${this.state.translateValue}px)`,
            transition: 'transform ease-in-out 0.45s',
            width: `${ 100 / this.props.slideCount }%`
          }}>
          {
            this.state.images.map( (image, index) => ( <Slide key={index} image={image} /> ) )
          }
          </div>

        <LeftArrow prevSlide={this.prevSlide} />
        <RightArrow nextSlide={this.nextSlide}/>

      </div>
    );
  }
}

Slider.defaultProps = {
  loop: false,
  slideCount: 1
}


export default Slider;