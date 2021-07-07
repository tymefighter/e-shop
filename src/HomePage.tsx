import React, { useState, useRef, useEffect } from "react";

import { HOME_PARA_ARR } from "./constants";

import "./styles/HomePage.scss";

const HomePage = function() {

    const homeRef = useRef<HTMLDivElement>(null);

    useEffect(() => {

        const scrollEventHandler = function() {
            if(!homeRef.current) return;

            const viewportHeight = Math.max(
                document.documentElement.clientHeight || 0, 
                window.innerHeight || 0
            );
            
            const childNodes = homeRef.current.childNodes;
            for(let i = 1;i < childNodes.length;i++) {
                const p = childNodes[i] as HTMLElement;
                const rect = p.getBoundingClientRect();

                if(rect.top >= 0 && rect.top <= viewportHeight)
                    p.classList.add("home__para--animate");
            }
        }

        window.addEventListener("scroll", scrollEventHandler);

        // Cleanup Function
        return () => {window.removeEventListener("scroll", scrollEventHandler)};
    }, []);

    const paraContentList = HOME_PARA_ARR.map((para, index) => {
        // Using key as index, as content would never change
        return (
            <p key={index} className="home__para">
                {para}
            </p>
        );
    })

    return (
        <div className="home" ref={homeRef}>
            <h1 className="home__heading">Welcome to E-Shop</h1>
            {paraContentList}
        </div>
    );
};

export default HomePage;