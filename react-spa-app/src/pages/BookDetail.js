
import React from "react";
import {useParams} from "react-router";
const books={
    bk2023:{title:'IT cookBook,알기쉽게 해설한 자바 프로그래임',author:'김충식',price:'30000',pubdate:'2023-01-01'},
    bk0307 :{ title:'실전에서 바로 쓰는 Next.js',author:'미셀리바',price:'23500',pubdate:'2023-01-20'}
}
const BookDetail =()=>{
    const {id} =useParams();
    const book=books[id];
    return (
        <div>
            <h2>Book Detail</h2>

            <p>{book.title}</p>
            <p>{book.author} {book.pubdate} {book.price}</p>
        </div>


    );

}



export default BookDetail;