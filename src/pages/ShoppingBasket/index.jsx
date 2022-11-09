import { useState } from "react";
import BasketBox from "../../components/BasketBox";
import * as S from "./ShoppingBasket.style"
import{AiOutlineArrowDown} from "react-icons/ai"

const ShoppingBasket = () => {
    const [sum, setSum] = useState(0);
    const productList = [
        {
            name: "새우깡",
            imgsrc:
            "https://sitem.ssgcdn.com/00/00/76/item/1000010760000_i1_1200.jpg",
            price: 1200,
            num: 2
        },
        {
            name: "새우깡",
            imgsrc:
            "https://sitem.ssgcdn.com/00/00/76/item/1000010760000_i1_1200.jpg",
            price: 1200,
            num: 2
        },
        {
            name: "새우깡",
            imgsrc:
            "https://sitem.ssgcdn.com/00/00/76/item/1000010760000_i1_1200.jpg",
            price: 1200,
            num: 2
        }
        ,
        {
            name: "새우깡",
            imgsrc:
            "https://sitem.ssgcdn.com/00/00/76/item/1000010760000_i1_1200.jpg",
            price: 1200,
            num: 2
        }
        ,
        {
            name: "새우깡",
            imgsrc:
            "https://sitem.ssgcdn.com/00/00/76/item/1000010760000_i1_1200.jpg",
            price: 1200,
            num: 2
        }
        ,
        {
            name: "새우깡",
            imgsrc:
            "https://sitem.ssgcdn.com/00/00/76/item/1000010760000_i1_1200.jpg",
            price: 1200,
            num: 2
        }
        ,
        {
            name: "새우깡",
            imgsrc:
            "https://sitem.ssgcdn.com/00/00/76/item/1000010760000_i1_1200.jpg",
            price: 1200,
            num: 2
        }
    ]
    let allPrice  = 0;
    for(let i = 0; i < productList.length; i++){
        allPrice +=productList[i].price
    }
    return (
        <S.Container>
            <S.Title>장바구니</S.Title>
            <S.MainBox>
                <S.ProductList>
                    {productList.map((data, index) => {
                            return <BasketBox data={data} index={index} /> 
                        }
                    
                    )}
                </S.ProductList>
                <S.ButtonBox>
                    <S.PayTitle>결제 예정 금액</S.PayTitle>
                    <S.Cost>상품금액 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;₩{allPrice}원</S.Cost>
                    <S.Cost>할인금액 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;₩0원</S.Cost>
                    <S.Sum>
                        <div>합계 &nbsp;</div>
                        <div>₩{allPrice}원</div>
                    </S.Sum>
                    <S.SetPasswordButton>비밀번호 설정</S.SetPasswordButton>
                    <AiOutlineArrowDown size={50}/>
                    <S.PurchaseButton>구매하기</S.PurchaseButton>
                </S.ButtonBox>
            </S.MainBox>
        </S.Container>
    )
}

export default ShoppingBasket;