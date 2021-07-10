import React, { useState } from "react";
import Card from "./Card";

import { DEFAULT_PRODUCT_IMAGE } from "./constants";

import "./styles/ProductForm.scss";

export interface ProductFormPropsType {
    addProduct: (productInfo: {
        name: string;
        price: string;
        imagePath: string;
        description: string;
    }) => void;
    setRouteName: (routeName: string) => void;
};

const ProductForm = function({addProduct, setRouteName}: ProductFormPropsType) {

    const [name, setName] = useState("");
    const [price, setPrice] = useState("");
    const [imagePath, setImagePath] = useState(DEFAULT_PRODUCT_IMAGE);
    const [description, setDescription] = useState("");

    const submitHandler = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        addProduct({name, price, imagePath, description});
        setRouteName("admin");
    };

    return (
        <div className="add-product">
            <form className="add-product__form" onSubmit={submitHandler}>
                <label className="add-product__form-label">Name: </label>
                <input 
                    className="add-product__form-input"
                    type="text" name="name" 
                    onChange={(event) => setName(event.target.value)}
                    value={name}
                />
                <label className="add-product__form-label">Price: </label>
                <input 
                    className="add-product__form-input"
                    type="number" name="price" 
                    onChange={(event) => setPrice(event.target.value)}
                    value={price}
                />

                <label className="add-product__form-label">Image File: </label>
                <input 
                    className="add-product__form-input"
                    type="file" 
                    name="imageFile" 
                    onChange={(event) => {
                        if(!event.target.files) return;

                        const file = event.target.files[0];
                        setImagePath(URL.createObjectURL(file));
                    }}
                />

                <label className="add-product__form-label">Description: </label>
                <textarea 
                    className="add-product__form-input"
                    name="description" rows={4}
                    onChange={(event) => setDescription(event.target.value)}
                    value={description}
                />

                <button className="add-product__form-button" type="submit">Add Product</button>
            </form>
            <div className="add-product__card">
                <Card 
                    name={name} price={price} 
                    description={description} imagePath={imagePath} 
                />
            </div>
            <button 
                className="add-product__back-button"
                onClick={() => setRouteName("admin")}
            >
                <span className="fa fa-2x fa-chevron-left"></span>
            </button>
        </div>
    );
};

export default ProductForm;