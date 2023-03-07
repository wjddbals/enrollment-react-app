import React, {Fragment} from "react";
import {Route, Routes} from "react-router";
import Home from "./Home";
import Join from "./Join";
import Login from "./Login";
import List from "./List";
import MyInfo from "./MyInfo";
const Main = () => {
    return (
        <>
        <Routes>
            <Route path="/" element={<Home />}/>
            <Route path="/member/join" element={<Join />}/>
            <Route path="/member/login" element={<Login />}/>
            <Route path="/board/list" element={<List />}/>
            <Route path="/member/myinfo" element={<MyInfo />}/>
        </Routes>
        </>
    );
}

export default Main;