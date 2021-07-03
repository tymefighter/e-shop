import React, { useState } from "react";
import SearchBar from "./SearchBar";
import ProductGrid from "./ProductGrid";

const UserPage = function({productList}) {
    const [searchQuery, setSearchQuery] = useState("");
    const [priceOrder, setPriceOrder] = useState("increase");

    const filteredProductList = productList.filter(({name, description}) => {
        return name.toLowerCase().includes(searchQuery)
            || description.toLowerCase().includes(searchQuery);
    });

    filteredProductList.sort((prodA, prodB) => {
        if(prodA.price === prodB.price) return 0;

        if(priceOrder === "increase") return prodA.price < prodB.price ? -1 : 1;
        else return prodA.price < prodB.price ? 1 : -1;
    });

    return (
        <div>
            <SearchBar 
                searchQuery={searchQuery} setSearchQuery={setSearchQuery} 
                priceOrder={priceOrder} setPriceOrder={setPriceOrder}
            />
            <ProductGrid 
                productList={filteredProductList} 
            />
        </div>
    );
};

export default UserPage;