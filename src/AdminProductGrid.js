import React, { useState } from "react";
import Card from "./Card";
import AdminSelectModal from "./AdminSelectModal";

import "./styles/ProductGrid.scss";

const AdminProductGrid = function({productList, deleteProduct}) {

    const [modalInfo, setModalInfo] = useState({show: false});

    const renderProductList = productList.map((product) => {
        const {id, ...props} = product;
        return (
            <Card
                key={product.id} {...props} className="product-grid__card"
                onClick={() => setModalInfo({id, ...props, show: true})}
            />
        );
    });

    const {show, ...modalProps} = modalInfo;
    const closeModal = function() {
        setModalInfo((prevModalInfo) => ({...prevModalInfo, show: false}));
    }
    const modal = show ? 
        <AdminSelectModal {...modalProps} closeModal={closeModal} deleteProduct={deleteProduct} /> 
        : null;

    return (
        <div className="product-grid">
            {modal}
            {renderProductList}
        </div>
    );
};

export default AdminProductGrid;