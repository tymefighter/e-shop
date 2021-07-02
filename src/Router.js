import React, { useEffect, useState } from "react";

const Router = function({routeCompList}) {
    const [path, setPath] = useState("/");

    useEffect(() => {
        const url = window.location.href;
        const regex = /^http:\/\/localhost:3000(.*)/;
        setPath(url.match(regex)[1]);
    }, []);

    routeCompList.forEach(({route, Component, props}) => {
        if(route === path) return <Component {...props} />;
    });

    return null;
}

export default Router;