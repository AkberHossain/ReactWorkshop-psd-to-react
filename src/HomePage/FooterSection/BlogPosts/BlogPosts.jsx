import React from 'react'

import './BlogPosts.css'

export default function BlogPosts() {
    return (
        <div className="blog-posts-container">
            <h4>LATEST BLOG POSTS</h4>   
            <div className='blog-post'>
                <div>
                    <p>Post Title</p>
                    <span>Admin, domainname.com</span>
                    <span>Friday, 6th April 2000</span>
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
                    <a href="#" className="btn footer-read-more">Read More &#9658;</a>
                </div>
                <div>
                    <p>Post Title</p>
                    <span>Admin, domainname.com</span>
                    <span>Friday, 6th April 2000</span>
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
                    <a href="#" className="btn footer-read-more">Read More &#9658;</a>
                </div>
            </div> 
        </div>
    )
}
