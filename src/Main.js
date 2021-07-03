import React, { useState } from "react";
import Router from "./Router";
import Admin from "./Admin";
import AddProduct from "./AddProduct";
import UserPage from "./UserPage";

import {data} from "./data";

const Main = function() {

    const [productList, setProductList] = useState(data);

    const getMex = function(idList) {
        const idSet = new Set();
        idList.forEach(id => idSet.add(id));

        let mex = idSet.size;
        for(let i = 0;i < idSet.size;i++) {
            if(!idSet.has(i.toString())) {
                mex = i;
                break;
            }
        }

        return mex.toString();
    };
    
    const addProduct = function(productInfo) {
        setProductList((prevProductList) => {
            const mex = getMex(prevProductList);
            return productList.concat({...productInfo, id: mex});
        });
    };

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
                props: {addProduct}
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