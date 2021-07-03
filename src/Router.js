import React from "react";

const Router = function({routeCompList, routeName}) {

    for(const routeComp of routeCompList)
        if(routeName === routeComp.routeName) 
            return <routeComp.Component {...routeComp.props} />;
    
    return null;
}

export default Router;