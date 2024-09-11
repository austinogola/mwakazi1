import React from 'react';
import '../styles/FrontImage.css'
import front1 from '../images/pexels2.jpg'

const FrontImage=()=>{
    return(
        <div className='FrontImage'>
            <img src={front1}/>
            <div className='text'>
                <p>SHOWING YOU AFRICA,</p>
                <p>THE WAY WE KNOW IT</p>
            </div>
            
        </div>
    )
}

export default FrontImage