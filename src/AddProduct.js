import React, { useState } from "react";
import Card from "./Card";

import "./styles/AddProduct.scss";

const AddProduct = function({addProduct}) {

    const [name, setName] = useState("");
    const [price, setPrice] = useState(0);
    const [imagePath, setImagePath] = useState("");
    const [description, setDescription] = useState("");

    const submitHandler = (event) => {
        event.preventDefault();
        addProduct({name, price, imagePath, description});
    };

    return (
        <div class="add-product">
            <form className="add-product__form" onSubmit={submitHandler}>
                <label className="add-product__form-label" for="name">Name: </label>
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
                    onChange={(event) => setPrice(parseInt(event.target.value))}
                    value={price}
                />

                <label className="add-product__form-label">Image File: </label>
                <input 
                    className="add-product__form-input"
                    type="file" 
                    name="imageFile" 
                    onChange={(event) => {
                        const file = event.target.files[0];
                        setImagePath(URL.createObjectURL(file));
                    }}
                />

                <label className="add-product__form-label">Description: </label>
                <textarea 
                    className="add-product__form-input"
                    name="description" rows="4" 
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
            <a className="add-product__back-button" href="/admin">
                <span class="fa fa-2x fa-chevron-left"></span>
            </a>
        </div>
    );
};

export default AddProduct;