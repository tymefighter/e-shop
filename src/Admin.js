import React from "react";
import AdminProductGrid from "./AdminProductGrid";

import "./styles/Admin.scss";

const Admin = function({productList, deleteProduct, setRouteName}) {
    return (
        <div>
            <button 
                className="admin-open-button"
                onClick={() => setRouteName("add-product")}
            >
                <span className="fa fa-2x fa-chevron-right"></span>
            </button>
            <AdminProductGrid productList={productList} deleteProduct={deleteProduct} />
        </div>
    );
}

export default Admin;