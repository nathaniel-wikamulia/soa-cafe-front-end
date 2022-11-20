import React from 'react';
import './Footer.css'
import logo from '../img/logo.png';

function Footer() {
    return (
        <div className="footer">
            <div className="medium_border">
                <div className="row">
                    <div className="footer_column">
                        <img src={logo} />
                        <p>Our goal is to provide a comfortable place for you and your loved ones to relax while you enjoy quality food, service and entertainment. </p>
                        <br /><p>© 2022 Soa Cafe Inc. All Rights Reserved</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer