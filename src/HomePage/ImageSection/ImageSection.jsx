import React from 'react'

import './ImageSection.css'

import image1 from './images/pic2.jpg'

export default function ImageSection() {
    return (
        <div className="image-section-container">
            <div className="left-side">
                <h1>Your title can be long and descriptive</h1>
                <h5>
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Atque numquam perferendis accusamus commodi
                </h5>
                <button className="btn read-more-button">READ MORE</button>
            </div>
            <div className="right-side">
                <img src={image1}/>
            </div>
        </div>
    )
}
