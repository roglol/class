import React from 'react'

const Image = (props) =>{
   const styles = {
        backgroundImage: `url(${props.src})`
    }
    return (
       
         <div id={props.id} style={styles}>
           
         </div>
    )
}

export default Image