import fetch from 'isomorphic-unfetch';

NewBooks.getInitialProps =async function(){
     const res = await fetch(
         'http://localhost:3000/api/mariadb/hello');
     const data =await res.json();

     return {
         newbooks:data
     };

};


export default function NewBooks(props){
    console.log(props.newbooks);
    return(
        <>
            <div>
                <h1>한빛 미디어 새로나온책</h1>
                <ul>
                {props.newbooks.map(book=>(
                <li key={book.bookno}>
                    {book.title} /{book.price} </li>
                ))}

                </ul>
            </div>
        </>
    );
};