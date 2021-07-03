import React from "react";
import ProductGrid from "./ProductGrid";

import "./styles/Admin.scss";

const Admin = function({productList}) {
    return (
        <div>
            <a className="admin-open-button" href="/admin/add-product">
                <span class="fa fa-2x fa-chevron-right"></span>
            </a>
            <ProductGrid productList={productList} />
        </div>
    );
}

export default Admin;