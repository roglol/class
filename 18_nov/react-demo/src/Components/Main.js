import React from 'react'
import Icon from './Icon'
import Button from './Button'
import Image from './Image'
const Main  = () =>{
    return (
        <main>
        <div id='main'>
            <div id='mainheader'>Creative Design<br></br> 
            & Advertising.</div>
                <div id='mainparagraph'>
                <Icon class={"far fa-chart-bar"}/>
                   <span>Proin pharetra volutpat est dictum.<br></br>
                    Cras pharetra molestie et laoreet<br></br>
                    tortor accumsan quis.
                </span> 
                </div>
                <Button text={
                    <>
                <span>LEARN MORE </span>
                 <Icon class={"fas fa-chevron-circle-right"}/>
                 </>
                 } />
        </div>
        <Image id={'img'} src={'/pictures/tolio.jpg'}/>
    </main>
    )
}

export default Main