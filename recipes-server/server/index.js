import path from "path";
import fs from "fs";
import react from "react";
import express from "express";
import ReactDOMServer from "react-dom/server";

import Menu from "../src/components/Menus";

const PORT= process.env.PORT || 4000;
const app =express();

app.use(express.static('./build'));

app.get('/*',(req,res)=>{
    //리액트를 서버에서 랜더링하도록 설정
    const app= ReactDOMServer.renderToString(<Menu />);
    const index =path.resolve('./build/index.html');
    fs.readFile(index,'utf8',(err,data)=>{
        return res.send(
            data.replace('<div id="root"></div>',`<div id="root">${app}</div>`)
        );

    });
});

app.listen(PORT,()=>{
    console.log('서버가 ${PORT}포트를 실행중입니다');
});