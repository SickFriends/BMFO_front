import * as P from "./purchase.style";
import {AiOutlinePlusCircle} from "react-icons/ai";
import {AiOutlineMinusCircle} from "react-icons/ai";
import { useState } from "react";

const Purchase = () => {
    const [count, setCount] = useState(0);
    return (
        <P.container>
            <P.imgBox>
                <img src="https://sitem.ssgcdn.com/00/00/76/item/1000010760000_i1_1200.jpg"/>
            </P.imgBox>
            <P.saleBox>
                <P.titleBox>스윙칩</P.titleBox>
                <P.priceBox>₩1,400</P.priceBox>
                <P.count>수량</P.count>
                <P.IncDec>
                    <AiOutlineMinusCircle size={30} onClick={() => {
                        console.log("d")
                        if(count > 0){
                            setCount(count-1);
                        }
                    }}/>
                    <div>{count}</div>
                    <AiOutlinePlusCircle size={30} onClick={() => {
                        console.log("d");
                        setCount(count+1);
                    }} /></P.IncDec>
                <P.buttons><button>장바구니</button><button>구매하기</button></P.buttons>
            </P.saleBox>
        </P.container>
    )
}

export default Purchase;