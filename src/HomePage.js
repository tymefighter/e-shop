import React from "react";

import "./styles/HomePage.scss";

const HomePage = function() {
    return (
        <div className="home">
            <h1 className="home__heading">Welcome to E-Shop</h1>
            <p className="home__para">The <strong>Best</strong> Platform for Buyers and Sellers alike</p>
            <p className="home__para">Empowering Buyers and Enhancing Sellers is our motto</p>
            <p className="home__para">Immerse into a whole new kind of market experience</p>
            <p className="home__para">We rely on Advanced AI techniques to cater the needs of our users</p>
            <p className="home__para">
                We are working on building the first VR based marketplace, where{" "}
                the sellers can provide a virtual model of their product, and{" "}
                buyers can virtually experience that product.
            </p>
            <p className="home__para">We lead the market in providing the users with immensely scalable platform</p>
            <p className="home__para">
                We welcome you once again, to the future of marketplace.
            </p>
        </div>
    );
};

export default HomePage;