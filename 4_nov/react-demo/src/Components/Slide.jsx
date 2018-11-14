import React from 'react';

const Slide = ({image}) => {
    const styles = {
        backgroundImage: `url(${image})`,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: '50% 50%',
    }
    return (
        <div className="slide" style={styles}>
        {/* <div className='pic1'>
        <div className='img1'>
                <div class='price1'>$499</div>
        </div>
        <div><span>Tour in Barcelona</span></div>
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
    </div> */}
    </div>

   ) 
}

export default Slide;