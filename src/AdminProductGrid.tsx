import React, { useState } from "react";
import Card from "./Card";
import AdminSelectModal from "./AdminSelectModal";

import "./styles/ProductGrid.scss";

export interface AdminProductGridPropsType {
    productList: {
        name: string;
        price: string;
        description: string;
        imagePath: string;
        id: string;
    }[];
    deleteProduct: (productId: string) => void;
};

interface ModalInfoType {
    name: string;
    price: string;
    description: string;
    imagePath: string;
    id: string;
    show: boolean;
};

const defaultModalInfo: ModalInfoType = {
    name: "",
    price: "",
    description: "",
    imagePath: "",
    id: "",
    show: false
};

const AdminProductGrid = function({productList, deleteProduct}: AdminProductGridPropsType) {

    const [modalInfo, setModalInfo] = useState(defaultModalInfo);

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