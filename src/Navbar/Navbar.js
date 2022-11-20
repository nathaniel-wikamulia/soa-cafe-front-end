import React from 'react';
import './Navbar.css'
import { Link } from 'react-router-dom';

function Navbar() {
    return (
        <div className='header'>

            <img className='header_logo' src='https://www.freepnglogos.com/uploads/coffee-logo-png/coffee-logo-vector-logo-elements-logo-objects-0.png' />

            <div className='header_nav'>

                <div className='header_option'>
                    <Link to='/' style={{ color: 'black', textDecoration: 'None' }}>
                        <span className='header_optionLineOne'>Home</span>
                    </Link>
                </div>

                <div className='header_option'>
                    <Link to='/order' style={{ color: 'black', textDecoration: 'None' }}>
                        <span className='header_optionLineOne'>Order</span>
                    </Link>
                </div>

                <div className='header_option'>
                    <Link to='/profile' style={{ color: 'black', textDecoration: 'None' }}>
                        <span className='header_optionLineOne'>Profile</span>
                    </Link>
                </div>

                <div className='header_option'>
                    <Link to='/aboutus' style={{ color: 'black', textDecoration: 'None' }}>
                        <span className='header_optionLineOne'>About Us</span>
                    </Link>
                </div>
            </div>

        </div >
    )
}

export default Navbar