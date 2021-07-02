import React, { useState } from "react";
import Router from "./Router";
import Admin from "./Admin";

import {data} from "./data";
import AddProduct from "./AddProduct";

const Main = function() {

    const [productList, setProductList] = useState(data);

    return (
        <Router 
        routeCompList={[
            {
                route: "/home",
                Component: null,
                props: {}
            },
            {
                route: "/admin",
                Component: Admin,
                props: {productList}
            },
            {
                route: "/admin/add-product",
                Component: AddProduct,
                props: {productList}
            },
            {
                route: "/user",
                Component: null,
                props: {productList}
            }
        ]}
      />
    );
}

export default Main;