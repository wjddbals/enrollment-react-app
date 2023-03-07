import {Link} from "react-router-dom";
import React from "react";

const Menu= () =>{
    return(
        <nav>
            <Link to="/">Home</Link>
            <Link to="/about">About</Link>
            <Link to="/events">Events</Link>
            <Link to="/products">Products</Link>
            <Link to="/contact">Contact</Link>

        </nav>
    );
}
export default Menu;