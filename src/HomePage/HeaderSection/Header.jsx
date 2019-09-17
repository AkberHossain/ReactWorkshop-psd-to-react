import React from 'react'

import './Header.css'

export default function Header() {
    return (
        <div>
            <nav className="navbar navbar-light">
                <div className="header-title">
                    <h1>NobodysFool</h1>
                    <h5>Free PSD Website Template</h5>
                </div>
                <form className="form-inline">
                    <input className="header-search form-control mr-sm-2" type="search" placeholder="Search Our Website..." aria-label="Search" />
                    <button className="btn my-2 my-sm-0 search-button" type="submit">SEARCH</button>
                </form>
            </nav>
        </div>
    )
}
