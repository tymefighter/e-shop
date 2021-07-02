import React, { useEffect } from "react";
import Nav from "./Nav";
import Footer from "./Footer";
import Router from "./Router";

function App() {
  return (
    <>
      <Nav />
      <Router 
        routeCompList={[
          {
            route: "/home",
            Component: null,
            props: {}
          },
          {
            route: "/admin",
            Component: null,
            props: {}
          },
          {
            route: "/user",
            Component: null,
            props: {}
          }
        ]}
      />
      <Footer />
    </>
  );
}

export default App;
