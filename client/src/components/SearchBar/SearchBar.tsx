import React from 'react';
import './SearchBar.css';


const SearchBar: React.FC = () => {
    return (
        <div className="wrap">
            <div className="search-bar">
                <input className="search" type="text" placeholder="Type a file name..."/>
                <button className="search-btn">Search</button>
            </div>
        </div>
    )
}

export default SearchBar;

