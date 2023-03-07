import React, {Fragment} from "react";
import {NavLink} from "react-router-dom";
const Header = () => {
    return (
        <>
            <header><h1>JSP 프로젝트 v1</h1></header>
            <nav>
                <ul>
                    <li><NavLink to="/">Home</NavLink></li>
                    <li><NavLink to="/member/join">회원가입</NavLink></li>
                    <li><NavLink to="/member/login">로그인</NavLink></li>
                    <li><NavLink to="/board/list">게시판</NavLink></li>
                    <li><NavLink to="/member/myinfo">회원정보</NavLink></li>
                </ul>
                <hr />
            </nav>
        </>
    );
}

export default Header;