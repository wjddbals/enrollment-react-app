import React from 'react';
import ReactDOM from 'react-dom/';
//app components 가졍조기 import 선언문
import App from './App.js';

//리액트 돔 라이브러리으 render함수에 의해
//index.html의 태그들 중id가 app인 요소에
//해당 컴퍼넌트를 표시함
//render(컴퍼넌트,표시위치)
ReactDOM.render(
  <React.StrictMode>
      <h1>Just React</h1>
  </React.StrictMode>,
    document.querySelector('#app')
);

//맵이라는 components를 #root에 표시
ReactDOM.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>,
    document.querySelector('#root')
);

