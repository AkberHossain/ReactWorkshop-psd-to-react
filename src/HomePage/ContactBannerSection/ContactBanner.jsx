import React from 'react'

import './ContactBanner.css'

export default function ContactBanner() {
    return (
        <div className="contact-banner-container">
            <div className="left-side">
                <h1>Your title can be long</h1>
                <h5>
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                </h5>
            </div>
            <div className="right-side">
            <button className="btn read-more-button">CONTACT US TODAY</button>
            </div>
        </div>
    )
}
