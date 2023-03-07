import React from "react";
import {useLocation} from "react-router-dom";

export function Home(){
    return (
        <div>
            <h1>[Company Website]</h1>

        </div>
    );
};
export function About(){
    return (
        <div><h1>[About]</h1>

        </div>
    );
};
export function Events(){
    return (
        <div><h1>[Events]</h1>

        </div>
    );
};
export function Products(){
    return (
        <div><h1>[Products]</h1>

        </div>
    );
};
export function Contact(){
    return (
        <div><h1>[Contact]</h1>

        </div>
    );
};

export function Whoops404(){
    let loc =useLocation(); //요청 경로 알아냄
    return (
        <div><h1>Resource {loc.pathname} not found </h1></div>
    );
};