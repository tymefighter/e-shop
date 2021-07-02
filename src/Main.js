import React, { useState } from "react";
import Router from "./Router";
import ProductGrid from "./ProductGrid";

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
            Component: ProductGrid,
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