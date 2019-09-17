import React from 'react'

import './TopSection.css'

export default function TopSection() {
    return (
        <div className="top-section-container">
            <div className="top-section-left-side">
                <ul>
                    <li><a href="#">Sign Up</a></li>
                    <li><a href="#">Login</a></li>
                    <li><a href="#">RSS Feeds</a></li>
                    <li><a href="#">Archived News</a></li>
                </ul>
            </div>
            <div className="top-section-right-side">
                <ul>
                    <li><a href="#"><i class="fab fa-linkedin-in"></i></a></li>
                    <li><a href="#"><i class="fab fa-twitter"></i></a></li>
                    <li><a href="#"><i class="fab fa-pinterest"></i></a></li>
                    <li><a href="#"><i class="fab fa-google-plus-square"></i></a></li>
                    <li><a href="#"><i class="fas fa-wifi"></i></a></li>
                </ul>
            </div>
        </div>
    )
}
