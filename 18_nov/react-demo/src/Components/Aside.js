import React from 'react'
import Icon from './Icon'
import Button from './Button'
const Aside =() =>{
    return (
        <aside>
        <div>
                <div>Our Clients</div>
                <div>   
                         <Icon class={'fab fa-google'}/>
                         <Icon class={'fab fa-bitcoin'}/>
                         <Icon class={'fab fa-ethereum'}/>
                </div>
                <div>
                        <Button text={'VIEW ALL'}/>
                </div>
        </div>
    </aside>
    )
}

export default Aside