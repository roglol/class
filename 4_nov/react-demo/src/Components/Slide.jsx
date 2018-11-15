import React from 'react';

const Slide = ({image}) => {
    const styles = {
        backgroundImage: `url(${image})`,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: '50% 50%',
        height: '250px'
    }
    return (
    <div className="slide">
         <div className='img2' style={styles}>
                  <div className='price1'>$499</div>
          </div>
          <div><span>Tour in Chicago</span></div>
          <div className='icons'> <span>15 day's tour</span> 
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
          </div>
          <div>
        <i className="fas fa-long-arrow-alt-right arrow"></i>
          </div>
    
    </div>
    )
}

export default Slide;