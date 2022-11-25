import * as P from "./purchase.style";
import {AiOutlinePlusCircle} from "react-icons/ai";
import {AiOutlineMinusCircle} from "react-icons/ai";
import { useState } from "react";
import { useParams } from "react-router-dom"
import { useEffect } from "react";
import axios from "axios";

const Purchase = () => {
    const [count, setCount] = useState(0);
    const [product, setProduct] = useState({});
    const [loading, setLoading] = useState(null);
    const params = useParams();
    const id = params.id;
    useEffect(() => {
        setLoading(true)
        axios.get(`http://127.0.0.1:8080/product/getOneProduct?id=${id}`)
        .then(res => {
            setProduct(res.data);
            setLoading(false);
        })
        .catch(err => {
            console.log(err);
        })
    }, []);
    const put = () => {
        const data = {productId: product.productId, cnt: count, ownerId: localStorage.getItem("token")};
        console.log(data);
        axios.post("http://127.0.0.1:8080/shoppingBasket/putProduct", data)
        .then(res => {
            window.location.replace("/");
        })
        .catch(err => {
            console.log(err);
        })
    }
    if(loading) return <>...</>
    return (
        <P.container>
            <P.imgBox>
                <img src={product.imgUrl}/>
            </P.imgBox>
            <P.saleBox>
                <P.titleBox>{product.name}</P.titleBox>
                <P.priceBox>₩{product.price}</P.priceBox>
                <P.count>수량</P.count>
                <P.IncDec>
                    <AiOutlineMinusCircle size={30} onClick={() => {
                        if(count > 0){
                            setCount(count-1);
                        }
                    }}/>
                    <div>{count}</div>
                    <AiOutlinePlusCircle size={30} onClick={() => {
                        setCount(count+1);
                    }} /></P.IncDec>
                <P.buttons><button onClick={put}>장바구니</button></P.buttons>
            </P.saleBox>
        </P.container>
    )
}

export default Purchase;