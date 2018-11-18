import React from 'react'
import Image from './Image'
import Button from'./Button'
const Article = () =>{
    return (
        <article>
        <div className='text'>
         <div>STUDIO</div>
         <div>DESIGN SOLUTIONS <br></br>
         FOR ANY MEDIA.
        </div>
        <div className='line'></div>
        
        <div>
            Suspendisse eget est at bendum<br></br>
            dui elit, aliquam vel lacus a felis.
        </div>
        <Button  text={'LEARN MORE'}/>
    </div>
        <div className='gallery'>
             <Image  src={'/pictures/1.jpg'}/>
             <Image  src={'/pictures/2.jpg'}/>
             <Image  src={'/pictures/3.jpg'}/>
             <Image  src={'/pictures/4.jpg'}/>
        </div>
    </article>
    )
}

export default Article