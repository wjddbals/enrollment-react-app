import React from "react";
import {Route, Routes} from "react-router";
import Home from "./Home";
const Main=()=>{
    return (
        <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/member/join" element={<join />}></Route>
            <Route path="/member/login" element={<login />}></Route>
            <Route path="/board/list" element={<List />}></Route>
            <Route path="/member/myinfo" element={<Myinfo />}></Route>
        </Routes>

    );fsd
}
export default Main;