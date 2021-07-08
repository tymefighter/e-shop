import React, { useState } from "react";
import Router from "./Router";
import Admin from "./Admin";
import AddProduct from "./AddProduct";
import HomePage from "./HomePage";
import UserPage from "./UserPage";
import Nav from "./Nav";

import {data} from "./data";

const Main = function() {

    const [productList, setProductList] = useState(data);
    const [routeName, setRouteName] = useState("home");

    const getMex = function<T extends {id: string}>(objList: T[]) {
        const idSet = new Set();
        objList.forEach(obj => idSet.add(obj.id));

        let mex = idSet.size;
        for(let i = 0;i < idSet.size;i++) {
            if(!idSet.has(i.toString())) {
                mex = i;
                break;
            }
        }

        return mex.toString();
    };
    
    const addProduct = function(
        productInfo: {
            name: string;
            price: string;
            description: string;
            imagePath: string;
        }
    ) {
        setProductList((prevProductList) => {
            const mex = getMex(prevProductList);
            return productList.concat({...productInfo, id: mex});
        });
    };

    const deleteProduct = function(productId: string) {
        setProductList((prevProductList) => {
            return prevProductList.filter(({id}) => id !== productId);
        });
    };

    return (
        <>
            <Nav setRouteName={setRouteName} />
            <Router 
            routeCompList={[
                {
                    routeName: "home",
                    Component: HomePage,
                    props: {}
                },
                {
                    routeName: "admin",
                    Component: Admin,
                    props: {productList, deleteProduct, setRouteName}
                },
                {
                    routeName: "user",
                    Component: UserPage,
                    props: {productList}
                },
                {
                    routeName: "add-product",
                    Component: AddProduct,
                    props: {addProduct, setRouteName}
                }
            ]}
            routeName={routeName}
        />
      </>
    );
}

export default Main;