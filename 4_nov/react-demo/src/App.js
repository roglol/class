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
        'https://placekitten.com/300/300',
        "https://i.ytimg.com/vi/FC5-T9wB8y0/maxresdefault.jpg",
        'https://media-cdn.tripadvisor.com/media/photo-s/0d/f5/45/ed/southern-iceland-glaciers.jpg',
         "http://intermedia.ge/uploads/article_images/small/30691353515539.jpg",
    ],
      currentSlide: 0,
      translateValue: 5,

    }

  }
  

  prevSlide = () => {
    if(this.state.currentSlide == 0){
      return
    }
  this.setState({currentSlide:this.state.currentSlide -1}) 
  }

  nextSlide = () => {
    if(this.state.currentSlide == 1){
      return
    }
    this.setState({currentSlide:this.state.currentSlide +1}) 

  }

  render() {
    return (
      <div className="slider">
          { <div className="slider__container"
          style={{
            transform: `translateX(${this.state.translateValue}px)`,
            transition: 'transform ease-in-out 0.45s',
          }}>
          {
            this.state.images.slice(this.state.currentSlide,4).map( (image, index) => ( <Slide key={index} image={image} />) )
          }
          </div> }

        <LeftArrow prevSlide={this.prevSlide} />
        <RightArrow nextSlide={this.nextSlide}/>

      </div>
    );
  }
}

export default App;
