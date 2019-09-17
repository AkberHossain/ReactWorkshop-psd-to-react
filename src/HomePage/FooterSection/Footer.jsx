import React from 'react'
import AboutUs from './AboutUs/AboutUs'
import BlogPosts from './BlogPosts/BlogPosts'
import ContactUsForm from './ContactUs/ContactUsForm'
import QuickLinks from './QuickLinks/QuickLinks'

import './Footer.css'

export default function Footer() {
    return (
        <div className="footer-container">
            <AboutUs />
            <QuickLinks />
            <BlogPosts />
            <ContactUsForm />
        </div>
    )
}
