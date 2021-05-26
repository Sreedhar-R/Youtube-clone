import React from 'react';
import '../styles/App.css';

export default function Searchbar({searchChange,searchClick}) {
    return (
    <nav className="navbar navbar-light bg-light">
        <div className="ui-logo container-fluid">
            <h2><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e1/Logo_of_YouTube_%282015-2017%29.svg/1280px-Logo_of_YouTube_%282015-2017%29.svg.png" alt="youtube logo"/></h2>
            <div className="search-button">
            <input type="search" onChange={searchChange}/>
            <button onClick={searchClick}><i className="fas fa-search search-icon"></i></button>
            </div>
        </div>
    </nav>
    )
}
