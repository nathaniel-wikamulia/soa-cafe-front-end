import React, { useState, useEffect } from "react";


import Banner from '../../Banner/Banner';
import Footer from '../../Footer/Footer';
import Navbar from '../../Navbar/Navbar';
import cafe from '../../img/cafe.jpg';
import './AboutUs.css';

import * as ServiceAboutUs from "../../service/AboutUs/AboutUs";


function AboutUs() {

    const [aboutUsDescription, setAboutUsDescription] = useState(null);
    const [phoneNumber, setPhoneNumber] = useState(null);

    const getDataAboutUs = () => {
        ServiceAboutUs.apiGetAboutUs().then((res) => {
            if (res.data.status === 200) {
                setAboutUsDescription(res.data.data[2].aboutusdesc);
                setPhoneNumber(res.data.data[0].mobilephone)
            }
        })
    };

    useEffect(() => {
        getDataAboutUs()
    }, [aboutUsDescription, phoneNumber]);


    return (
        <div>
            <Navbar />
            <div className="about_us" style={{ backgroundColor: "f1f1f" }}>
                <Banner />
                <h1 align="center" style={{ color: '#333', marginBottom: "-4%" }}>About Us</h1>

                <div className="about_us_box">

                    <div className="small_border_about_us_page about_us_detail">
                        <div className="row_about_us_page">
                            <div className="about_us_column">
                                <img src={cafe} width="90%" />
                            </div>

                            <div className="about_us_column">
                                <h2>Soa Cafe</h2>
                                <p>{aboutUsDescription}</p>
                                <br></br>
                                <div style={{ marginTop: "3%", marginBottom: "" }}>
                                    <span ><b>Contact us:</b>&emsp;</span>
                                    <br></br>
                                    <span>{phoneNumber}</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <Footer />
            </div>
        </div>

    );
}

export default AboutUs