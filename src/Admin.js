import React from "react";
import UserProductGrid from "./UserProductGrid";

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
            <UserProductGrid productList={productList} />
        </div>
    );
}

export default Admin;