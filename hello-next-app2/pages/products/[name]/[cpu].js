import {useRouter} from "next/router";

const ProductInfo =()=>{
    const params =useRouter();
    let {name,cpu}=params.query; //전개 연산
    return <h2>Product Info:{name} with {cpu}  </h2>//{params.query.name}으로 써도 좋다

};
export default ProductInfo;
