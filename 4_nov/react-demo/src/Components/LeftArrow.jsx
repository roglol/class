import React from 'react';
import '../App.css'

const LeftArrow = (props) => {
    return (
        <div className="back__arrow1 arrow1" onClick={props.prevSlide}>
            <i className="fas fa-arrow-left"></i>
        </div>
    )
}

export default LeftArrow;