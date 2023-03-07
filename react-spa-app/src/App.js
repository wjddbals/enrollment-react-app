//import {Route, Routes} from "react-router";
import React from "react";


import NoPath from "./pages/NOpath";
import Content from "./components/Content";
import Menu from "./components/Menu";

//localhost:3000  ->home
//localhost:3000/stuff  ->stuff
//localhost:3000/contact  ->contact

function App() {
  return (
    <div>
    <h1>Simple SPA</h1>
       <Menu />
        <Content />

    </div>
  );
}

export default App;
