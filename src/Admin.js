import React from "react";
import ProductGrid from "./ProductGrid";

const Admin = function({productList}) {
    return (
        <ProductGrid productList={productList} />
    );
}

export default Admin;