import React from "react";

import "../node_modules/font-awesome/css/font-awesome.min.css";
import "./styles/Footer.scss";

const Footer = function() {
    return (
        <footer className="footer">
            <div className="footer__item">
                <h2 className="footer__item-header">e-shop</h2>
                <ul className="footer__item-list">
                    <li>About Us</li>
                    <li>Careers</li>
                    <li>Sales</li>
                </ul>
            </div>
            <div className="footer__item">
                <h2 className="footer__item-header">Contact Us</h2>
                <ul className="footer__item-list">
                    <li>Phone (main): +971 506546419</li>
                    <li>Phone (second): +971 506546419</li>
                    <li>Email (product):{" "}
                        <a href="mailto:e.shop.product@eShop.com">
                            e.shop.product@eShop.com
                        </a>
                    </li>
                    <li>Email (service):{" "}
                        <a href="mailto:e.shop.service@eShop.com">
                            e.shop.service@eShop.com
                        </a>
                    </li>
                </ul>
            </div>
            <div className="footer__item">
                <h2 className="footer__item-header">Social</h2>
                <ul className="footer__item-list footer__item-list--social">
                    <li><span className="fa fa-3x fa-twitter-square"></span></li>
                    <li><span className="fa fa-3x fa-facebook-square"></span></li>
                    <li><span className="fa fa-3x fa-linkedin-square"></span></li>
                    <li><span className="fa fa-3x fa-instagram"></span></li>
                    <li><span className="fa fa-3x fa-snapchat-square"></span></li>
                    <li><span className="fa fa-3x fa-google-plus-square"></span></li>
                </ul>
            </div>
        </footer>
    );
}

export default Footer;