import React, { useState, useEffect } from "react";

import Banner from '../../Banner/Banner';
import Footer from '../../Footer/Footer';
import Navbar from '../../Navbar/Navbar';
import ProfilePicture from '../../img/profilepic.jpg';
import './Profile.css';
import * as ServiceProfile from "../../service/Profile/Profile";

function Profile() {
    const [customerName, setCustomerName] = useState(null);
    const [emailAddress, setEmailAddress] = useState(null);
    const [phoneNumber, setPhoneNumber] = useState(null);
    const [deliveryAddress, setDeliveryAddress] = useState(null);

    const getProfileData = () => {
        ServiceProfile.apiGetProfileData().then((res) => {
            if (res.data !== null) {
                setCustomerName(res.data[0].fullname);
                setEmailAddress(res.data[0].email);
                setPhoneNumber(res.data[0].no_hp);
                setDeliveryAddress(res.data[0].address);
            }
        })
    };
    
    useEffect(() => {
        getProfileData()
    }, [customerName,emailAddress,phoneNumber,deliveryAddress]);

    return (
        <div>
            <Navbar />
            <div className="Profile" style={{ backgroundColor: "f1f1f" }}>
                <Banner />
                <h1 align="center" style={{ color: '#333', marginBottom: "-4%" }}>User Profile</h1>

                <div className="profile_box">

                    <div className="small_border item_detail">
                        <div className="row">
                            <div className="profile_column">
                                <img src={ProfilePicture} width="60%" />
                            </div>

                            <div className="profile_column">
                                <h2>{customerName}</h2>
                                <div style={{ marginTop: "5%", marginBottom: "3%" }}>
                                    <span ><b>Email address:&emsp;&emsp;&ensp;</b></span> <span>{emailAddress}</span>
                                </div>
                                <div style={{ marginTop: "3%", marginBottom: "3%" }}>
                                    <span ><b>Phone number:&emsp;&nbsp;&ensp;</b></span> <span>{phoneNumber}</span>
                                </div>
                                <div style={{ marginTop: "3%", marginBottom: "" }}>
                                    <span ><b>Delivery address:&emsp;</b></span> <span>{deliveryAddress}</span>
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

export default Profile