import {Link, NavLink} from "react-router-dom";
import React from "react";

const Menu= () =>{
    return(
        <ul className="header">
            <li><NavLink to="/">Home</NavLink> </li>
            <li><NavLink to="/stuff">Stuff</NavLink> </li>
            <li><NavLink to="/contact">Contact</NavLink> </li>


        </ul>
    );
}
export default Menu;