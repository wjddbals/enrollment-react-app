import fetch from 'isomorphic-unfetch';
//import Zipcode from "./api/mariadb/zipcode";
import {useRouter} from "next/router";

//getInitialProps:요청하지 않아도  구동되게 해준다
Zipcode.getInitialProps =async function(ctx){
    //getInitialProps enables server-side rendering in a page and allows you to do initial data population,
    // it means sending the page with the data already populated from the server. This is especially useful for SEO.
    //
    // getInitialProps will disable Automatic Static Optimization
    let dong =encodeURIComponent(ctx.query.dong); //uri 매개변수 인코딩

    const res = await fetch(
        `http://localhost:3000/api/mariadb/zipcode?dong=${dong}`);
    const data =await res.json();

    return {zipcode:data,dong:ctx.query.dong};

};


export default function Zipcode(props){


    return(

            <div>
                <h1>우편번호 조회결과:{props.dong}</h1>
                <ul>
                    {props.zipcode.map(zip=>(
                        <li key={zip.SEQ}>
                            {zip.ZIPCODE} {zip.SIDO}
                            {zip.GUGUN}{zip.DONG} {zip.RI}{zip.BUNJI}</li>
                    ))}

                </ul>
            </div>

    );
};