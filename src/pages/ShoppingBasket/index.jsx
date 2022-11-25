import { useState } from "react";
import BasketBox from "../../components/BasketBox";
import * as S from "./ShoppingBasket.style"
import{AiOutlineArrowDown} from "react-icons/ai"
import { loadTossPayments } from "@tosspayments/payment-sdk";
import {stringify, v4 as uuidv4} from 'uuid';
import axios from "axios";
import { useEffect } from "react";
import Popup from 'reactjs-popup';

const ShoppingBasket = () => {
    const [sum, setSum] = useState(0);
    const [productList, setProductList] = useState([]);
    const [loading, setLoading] = useState(null);
    const [allPrice, setAllPrice] = useState(0);
    const [password, setPassword] = useState('');
    const [modalOpened, setModalOpened] = useState(false);
    useEffect(() => {
        setLoading(true);
        axios.get(`http://127.0.0.1:8080/shoppingBasket/getShoppingBasket?ownerId=${localStorage.getItem("token")}`)
        .then(res => {
            setProductList(res.data);
            console.log(res.data);
            setLoading(false);
            let price = 0;
            for(let i = 0; i < res.data.length; i++){
                console.log(res.data[i].product.price * res.data[i].count);
                price = price + (res.data[i].product.price * res.data[i].count);
            }
            setAllPrice(price);
        })
        .catch(err => {
            console.log(err);
        })
    }, []);
    const clientKey = 'test_ck_7XZYkKL4MrjRjPYjqWWr0zJwlEWR'
    const buy = () => {
        const orderId = uuidv4();
        loadTossPayments(clientKey).then(tossPayments => {
            tossPayments.requestPayment('카드', {
                amount: allPrice,
                orderId : orderId,
                orderName : productList[0].name + " 외 " + (productList.length - 1).toString() + "건",
                successUrl : `https://localhost:8080/success?userId=${localStorage.getItem("token")}&?password=${password}`,
                failUrl : "https://localhost:8080/fail",
            })
        })
    }
    if(loading) return <>...</>
    return (
        <S.Container>
            <S.Title>장바구니</S.Title>
            <S.MainBox>
                <S.ProductList>
                    {productList.length === 0 ? <>장바구니가 비었습니다.</> : <>{productList.map((data, index) => {
                            return <BasketBox data={data} index={index} /> 
                        }
                    
                    )}</>}
                     
                </S.ProductList>
                <S.ButtonBox>
                    <S.PayTitle>결제 예정 금액</S.PayTitle>
                    <S.Cost>상품금액 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;₩{allPrice}원</S.Cost>
                    <S.Cost>할인금액 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;₩0원</S.Cost>
                    <S.Sum>
                        <div>합계 &nbsp;</div>
                        <div>₩{allPrice}원</div>
                    </S.Sum>
                    <S.SetPasswordButton onClick={() => {setModalOpened(true)}}>비밀번호 설정</S.SetPasswordButton>
                    <AiOutlineArrowDown size={50}/>
                    <S.PurchaseButton onClick={buy}>구매하기</S.PurchaseButton>
                </S.ButtonBox>
            </S.MainBox>
            <Popup 
                open={modalOpened} 
                onClose={() => {
                setModalOpened(false)
                
                }}
            >
                <input value={password} onChange={(e) => {setPassword(e.target.value)}}/>
                <button onClick={() => {setModalOpened(false)}}>완료</button>
            </Popup>
        </S.Container>
    )
}

export default ShoppingBasket;