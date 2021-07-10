import React, { useState } from "react";
import Card from "./Card";
import UserSelectModal from "./UserSelectModal";

import { ProductListType } from "./ProductType";

import "./styles/ProductGrid.scss";

interface UserProductGridPropsType {
    productList: ProductListType;
};

const UserProductGrid = function({productList}: UserProductGridPropsType) {

    const [modalInfo, setModalInfo] = useState({show: false});

    const renderProductList = productList.map((product) => {
        const {id, ...props} = product;
        return (
            <Card
                key={product.id} {...props} className="product-grid__card"
                onClick={() => setModalInfo({...props, show: true})}
            />
        );
    });

    const {show, ...modalProps} = modalInfo;
    const closeModal = function() {
        setModalInfo((prevModalInfo) => ({...prevModalInfo, show: false}));
    }
    const modal = show ? 
        <UserSelectModal {...modalProps} closeModal={closeModal} /> 
        : null;

    return (
        <div className="product-grid">
            {modal}
            {renderProductList}
        </div>
    );
};

export default UserProductGrid;