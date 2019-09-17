import React from 'react'

import TopSection from './TopSection/TopSection'
import NavBar from './NavBarSection/NavBar'
import Header from './HeaderSection/Header'
import ImageSection from './ImageSection/ImageSection'
import FeatureList from './FeatureSection/FeatureList'
import ContactBanner from './ContactBannerSection/ContactBanner'
import FooterSection from  './FooterSection/Footer'

export default function HomePage() {
    return (
        <div>
            <TopSection />
            <NavBar />
            <Header />
            <ImageSection />
            <FeatureList />
            <ContactBanner />
            <FooterSection />
        </div>
    )
}
