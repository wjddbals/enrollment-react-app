
//npm install next-auth@3.29.10 --save-dev
//경로 : /pages/api/auth/[...nextauth].js

import NextAuth from "next-auth";
import Credentials from 'next-auth/providers/credentials';
export default NextAuth({
    providers: [
        Credentials({

            name: "email-passwd-credentials",

            credentials: {
                email: { label: "이메일", type: "email" },
                password: { label: "비밀번호", type: "password" }
            }, //로그인 폼 정의
            async authorize(credentials, req) {
                //입력한 인증 정보 가져옴
                const email =credentials.email;
                const passwd =credentials.passwd;

                //console.log('auth login - ',credentials);
                if(email ==='123@avb.co.kr' && passwd ==='1') {
                    return credentials;
                }
            }

        })
    ]

});


