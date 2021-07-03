import React from "react";

import "./styles/SearchBar.scss";

const SearchBar = function({searchQuery, setSearchQuery}) {
    return (
        <div className="search-bar">
            <span className="fa fa-4x fa-search search-bar__icon"></span>
            <input 
                className="search-bar__input"
                type="text" name="searchQuery" 
                onChange={(event) => setSearchQuery(event.target.value)}
                value={searchQuery}
            />
        </div>
    );
};

export default SearchBar;