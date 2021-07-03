import React, { useState } from "react";
import Router from "./Router";
import Admin from "./Admin";
import AddProduct from "./AddProduct";
import UserPage from "./UserPage";

import {data} from "./data";

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
                Component: UserPage,
                props: {productList}
            }
        ]}
      />
    );
}

export default Main;