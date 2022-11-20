import React from 'react';
import './Banner.css'
import banner from '../img/banner.png';

function Banner()
{
    return(
        <div className='home'>
            
            <div className='header_container'>
                <img className='home_image' src={banner}/>
            </div>
            <br></br>
 
        </div>
    )
}

export default Banner