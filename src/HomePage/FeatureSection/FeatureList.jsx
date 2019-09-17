import React from 'react'

import FeatureItem from './FeatureItem'

import './FeatureList.css'

export default function FeatureList() {
    return (
        <div className="feature-list-container">
            <div className="left-side">
                <img src="https://via.placeholder.com/550x450"/>
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
