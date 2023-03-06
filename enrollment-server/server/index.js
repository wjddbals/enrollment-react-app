import path from "path";
import fs from "fs";

import react from "react";
import express from "express";
import ReactDOMServer from "react-dom/server";

import App from "../src/App";
import React from "react";

const PORT = process.env.PORT || 4000;
const app = express();

app.use(express.static('./build'));

app.get('/*', (req, res) => {
    // 리액트를 서버에서 렌더링하도록 설정
    const app = ReactDOMServer.renderToString(<h1>Just React</h1>);
    const root = ReactDOMServer.renderToString(<App />);

    const index = path.resolve('./build/index.html');

    fs.readFile(index, 'utf8', (err, data) => {
        data.replace('<div id="app"></div>', `<div id="app">${app}</div>`);
        data.replace('<div id="root"></div>', `<div id="root">${root}</div>`);
        return res.send( data );
    });
});

app.listen(PORT, () => {
    console.log(`서버가 ${PORT} 포트를 사용하여 실행중입니다....`);
});
