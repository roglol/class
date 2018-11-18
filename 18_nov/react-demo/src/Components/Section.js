import React from 'react'
import Image from './Image'
import Button from './Button'
import Slider from './Slider'
const Section = () =>{
    return (
        <section>
        <div>FEATURED</div>
        <div>MAKING IDEAS<br></br>
        COME TO LIFE.</div>
        <Slider/>
        <div>
            <div>
                <div>
             Curabitur nisi nisi, varius ac lectus sed, eleifend ultrices<br></br>
             nibh nam sit amet eros mauris. Cras non ligula sed<br></br>
             metus aliquet mollis nec sed tellus.
            </div>
            <Button text={'CASE STUDY'}/>
        </div>
            <div>
                <div class='vaih'>
                    <div>CATEGORY</div>
                    <div>Design &<br></br>
                    Branding</div>
                    <div></div>
                </div>
                <div class='vaih'>
                        <div>CLIENT</div>
                        <div>Cusco <br></br>
                            Barista</div>
                        <div></div>
                </div>
            </div>
        </div>
    </section>
    )
}

export default Section