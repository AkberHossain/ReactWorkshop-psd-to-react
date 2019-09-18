import React from 'react'

import './BlogPosts.css'

export default function BlogPosts() {
    return (
        <div className="blog-posts-container">
            <h4>LATEST BLOG POSTS</h4>   
            <div className='blog-post'>
                <div><div>
                    <h5><b>Post Title</b></h5>
                    <span>Admin, domainname.com</span><br />
                    <span>Friday, 6th April 2000</span>
                </div>
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ullam sunt sint atque sapiente magni? Eum totam quis mollitia nihil dignissimos nobis? Autem laudantium sequi quaerat asperiores rem, non commodi illo.</p>
                    <a href="#" className="footer-read-more">Read More &#9658;</a>
                </div>
                <div><div>
                    <h5><b>Post Title</b></h5>
                    <span>Admin, domainname.com</span><br />
                    <span>Friday, 6th April 2000</span>
                </div>
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ullam sunt sint atque sapiente magni? Eum totam quis mollitia nihil dignissimos nobis? Autem laudantium sequi quaerat asperiores rem, non commodi illo.</p>
                    <a href="#" className="footer-read-more">Read More &#9658;</a>
                </div>
            </div> 
        </div>
    )
}
