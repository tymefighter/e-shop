import React from "react";
import Card from "./Card";

const ProductGrid = function({productList}) {

    const renderProductList = productList.map((product) => {
        const {id, ...props} = product;
        return <Card key={product.id} {...props}/>;
    });

    return (
        <div className="product-grid">
            {renderProductList}
        </div>
    );
}

export default ProductGrid;