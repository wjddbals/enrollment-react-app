import '../styles/globals.css'
import React from "react";
import {getSession} from "next-auth/client";
import App from "next/app";

function MyApp({ Component, pageProps, menu }) {
    console.log('myapp -', menu);

    pageProps.menu = menu;

    const getLayout = Component.getLayout ?? ((page) => (page));
    return (
        <React.Fragment>
            {getLayout( <Component {...pageProps} /> )}
        </React.Fragment>
    );
}



MyApp.getInitialProps=async (ctx)=>{
    //nextjs app의 기본 props 객체를 초기화-애플리케이션 단위 /전역변수 콜백함수는 시스템에서 실행해주고마이앱이 먼저 실행되고이부분의 앱이 먼저 실행되고 위로올라간다
    const appProps =await App.getInitialProps(ctx);

    const sess =await getSession(ctx);
    let menu ='<a href="/member/login">로그인</a>';
    if(sess) menu ='<a href="/member/logout">로그아웃</a>';

    appProps.menu =menu;
   // console.log('app -', appProps.menu);

    return {...appProps}

}
export default MyApp;
