import React from "react";
import "./styles/Card.scss";

const Card = function({name, price, description, imagePath}) {
    return (
        <div className="card">
            <img src={imagePath} alt={imagePath} className="card__img" />
            <div className="card__text">
                <h1 className="card__name">{name}</h1>
                <p className="card__price">₹{price}</p>
                <p className="card__description">{description}</p>
            </div>
        </div>
    );
}

export default Card;