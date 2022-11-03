import * as B from './basketBox.style';
import {AiOutlinePlusCircle} from "react-icons/ai";
import {AiOutlineMinusCircle} from "react-icons/ai";
import { useState } from 'react';

const BasketBox = (props) => {
    const [count, setCount] = useState(props.data.num);
    return(
        <B.ProductBox>
            <B.LeftBox>
                <B.ImgBox><img src={props.data.imgsrc} /></B.ImgBox>
                <B.NameAndPriceBox>
                    <div>{props.data.name}</div>
                    <div>₩{props.data.price}</div>
                </B.NameAndPriceBox>
                <B.CountBox>
                    <div>수량</div>
                    <div>
                    <AiOutlineMinusCircle size={50} onClick={() => {
                        if(count > 0){
                            setCount(count-1);
                        }
                    }}/>
                    <div>{count}</div>
                    <AiOutlinePlusCircle size={50} onClick={() => {
                        setCount(count+1);
                    }} />
                    </div>
                </B.CountBox>
            </B.LeftBox>
            <B.RightBox>
                <div>₩{count*props.data.price}</div>
                <button>바로 구매하기</button>
            </B.RightBox>
        </B.ProductBox>
    )
}

export default BasketBox;