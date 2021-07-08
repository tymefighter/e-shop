import React from "react";
import "./styles/Card.scss";

export interface CardType {
    [key: string]: any;

    name: string;
    price: string;
    description: string;
    imagePath: string;
    className?: string;
};

const Card = function({name, price, description, imagePath, className, ...props}: CardType) {

    const cardClassName = "card" + (className ? " " + className : "");

    return (
        <div className={cardClassName} {...props}>
            <img src={imagePath} alt={name} className="card__img" />
            <div className="card__text">
                <h1 className="card__name">{name}</h1>
                <p className="card__price">₹{price}</p>
                <p className="card__description">{description}</p>
            </div>
        </div>
    );
};

export default Card;