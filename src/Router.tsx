import React from "react";

export interface RouterPropsType {
    routeCompList: {
        routeName: string;
        Component: React.ComponentType<any>;
        props: object;
    }[];
    routeName: string;
};

const Router = function({routeCompList, routeName}: RouterPropsType) {

    for(const routeComp of routeCompList)
        if(routeName === routeComp.routeName) 
            return <routeComp.Component {...routeComp.props} />;
    
    return null;
}

export default Router;