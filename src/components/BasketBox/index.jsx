import * as B from './basketBox.style';
import {AiOutlinePlusCircle} from "react-icons/ai";
import {AiOutlineMinusCircle} from "react-icons/ai";
import { useState } from 'react';

const BasketBox = (props) => {
    const [count, setCount] = useState(props.data.count);
    return(
        <B.ProductBox>
            <B.LeftBox>
                <B.ImgBox><img src={props.data.product.imgUrl} /></B.ImgBox>
                <B.NameAndPriceBox>
                    <div>{props.data.product.name}</div>
                    <div>₩{props.data.product.price}</div>
                </B.NameAndPriceBox>
                <B.CountBox>
                    <div>수량</div>
                        <div>
                        <div>{count}</div>
                    </div>
                </B.CountBox>
            </B.LeftBox>
            <B.RightBox>
                <div>₩{count*props.data.product.price}</div>
            </B.RightBox>
        </B.ProductBox>
    )
}

export default BasketBox;