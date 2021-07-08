import React from "react";

import "./styles/SearchBar.scss";

export type PriceOrder = "increase" | "decrease";

export interface SearchBarPropsType {
    searchQuery: string;
    setSearchQuery: (searchQuery: string) => void;
    priceOrder: PriceOrder;
    setPriceOrder: (priceOrder: PriceOrder) => void;
};

const SearchBar = function({
    searchQuery, setSearchQuery, 
    priceOrder, setPriceOrder
}: SearchBarPropsType) {
    return (
        <div className="search-bar">
            <span className="fa fa-4x fa-search search-bar__icon"></span>
            <input 
                className="search-bar__input"
                type="text" name="searchQuery" 
                onChange={(event) => setSearchQuery(event.target.value)}
                value={searchQuery}
            />
            <select 
                className="search-bar__order-input"
                name="priceOrder" 
                onChange={(event) => setPriceOrder(event.target.value as PriceOrder)}
                value={priceOrder}
            >
                <option value="increase"> Increasing </option>
                <option value="decrease"> Decreasing </option>
            </select>
        </div>
    );
};

export default SearchBar;