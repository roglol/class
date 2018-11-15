import React, { Component } from 'react';
import Slide from './Components/Slide'
import LeftArrow from './Components/LeftArrow'
import RightArrow from './Components/RightArrow'
import './App.css'
class App extends Component {
  constructor(props){
    super(props)

    this.state = {
      images: [
        'https://placekitten.com/500/500',
        'https://www.telegraph.co.uk/content/dam/Travel/Destinations/Europe/France/Paris/paris-vintage-car.jpg?imwidth=450',
        'https://placekitten.com/500/502',
        'https://placekitten.com/500/503',
        'https://placekitten.com/500/500',
        "https://www.riotgames.com/darkroom/1440/f5f167c525dd1f3989bcfe9ebd3c7995:a842310bd11ee602459b324d098e0e02/barcelona-main.jpg",
        'https://placekitten.com/500/503',
        'https://placekitten.com/500/500',
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
    const translateValue = document.querySelector('.slider1').clientWidth;
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
      <div className="slider1">
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

App.defaultProps = {
  loop: false,
  slideCount: 4
}


export default App;