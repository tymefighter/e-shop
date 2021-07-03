import React, { useState } from "react";
import SearchBar from "./SearchBar";
import ProductGrid from "./ProductGrid";

const UserPage = function({productList}) {
    const [searchQuery, setSearchQuery] = useState("");

    return (
        <div>
            <SearchBar searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
            <ProductGrid 
                productList={productList.filter(({name, description}) => {
                    return name.toLowerCase().includes(searchQuery)
                        || description.toLowerCase().includes(searchQuery);
                })} 
            />
        </div>
    );
};

export default UserPage;