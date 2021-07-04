import React from "react";
import ProductGrid from "./ProductGrid";

import "./styles/Admin.scss";

const Admin = function({productList, setRouteName}) {
    return (
        <div>
            <button 
                className="admin-open-button"
                onClick={() => setRouteName("add-product")}
            >
                <span className="fa fa-2x fa-chevron-right"></span>
            </button>
            <ProductGrid productList={productList} />
        </div>
    );
}

export default Admin;