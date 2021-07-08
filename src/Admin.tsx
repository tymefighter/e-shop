import React from "react";
import AdminProductGrid from "./AdminProductGrid";

import "./styles/Admin.scss";

export interface AdminPropsType {
    productList: {
        name: string;
        price: string;
        description: string;
        imagePath: string;
        id: string;
    }[];
    deleteProduct: (id: string) => void;
    setRouteName: (routeName: string) => void;
};

const Admin = function({productList, deleteProduct, setRouteName}: AdminPropsType) {
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