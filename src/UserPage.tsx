import React, { useState } from "react";
import SearchBar, { PriceOrder } from "./SearchBar";
import UserProductGrid from "./UserProductGrid";

import { ProductListType } from "./ProductType";

export interface UserPagePropsType {
    productList: ProductListType;
};

const UserPage = function({productList}: UserPagePropsType) {
    const [searchQuery, setSearchQuery] = useState("");
    const [priceOrder, setPriceOrder] = useState<PriceOrder>("increase");

    const filteredProductList = productList.filter(({name, description}) => {
        return name.toLowerCase().includes(searchQuery)
            || description.toLowerCase().includes(searchQuery);
    });

    filteredProductList.sort((prodA, prodB) => {
        const priceA = parseInt(prodA.price);
        const priceB = parseInt(prodB.price);

        if(priceA === priceB) return 0;

        if(priceOrder === "increase") return priceA < priceB ? -1 : 1;
        else return priceA < priceB ? 1 : -1;
    });

    return (
        <div>
            <SearchBar 
                searchQuery={searchQuery} setSearchQuery={setSearchQuery} 
                priceOrder={priceOrder} setPriceOrder={setPriceOrder}
            />
            <UserProductGrid 
                productList={filteredProductList} 
            />
        </div>
    );
};

export default UserPage;