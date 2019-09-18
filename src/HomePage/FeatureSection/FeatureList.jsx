import React from 'react'

import FeatureItem from './FeatureItem'

import './FeatureList.css'

import image1 from './images/pic1.jpg'

export default function FeatureList() {
    return (
        <div className="feature-list-container">
            <div className="left-side">
                <img src={image1}/>
            </div>
            <div className="right-side">
                <FeatureItem />
                <FeatureItem />
                <FeatureItem />
                <FeatureItem />
            </div>
        </div>
    )
}
