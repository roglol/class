import React from 'react';
import '../App.css'

const RightArrow = (props) => {
    return (
        <div className="next__arrow1 arrow1" onClick={props.nextSlide}>
            <i className="fas fa-arrow-right"></i>
        </div>
    )
}

export default RightArrow;