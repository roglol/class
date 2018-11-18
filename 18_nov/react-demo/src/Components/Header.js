import React from 'react'
import Icon from './Icon'

const Header = () =>{
    return (
        <header>
        <div id='dopos'>
            Dopos
        </div>
        <nav>
            <ul>
                <li>HOME</li>
                <li>PRODUCTS</li>
                <li>AWARDS</li>
                <li>CONTACT US</li>
            </ul>
        </nav>
        <div id='logo'>
            <span>LOG IN</span>
            <Icon class={"far fa-user-circle"}/>
        </div>
    </header> 
    )
}
export default Header
