import * as B from "./basketBox.style";
import { AiOutlinePlusCircle } from "react-icons/ai";
import { AiOutlineMinusCircle } from "react-icons/ai";
import { useState } from "react";
import axios from "axios";

const BasketBox = (props) => {
  const [count, setCount] = useState(props.data.count);
  return (
    <B.ProductBox>
      <B.LeftBox>
        <p
          onClick={() => {
            axios
              .post(
                `/api/basket/deleteBasketProduct?basketProductId=${props.data.basketProductId}`
              )
              .then((res) => {
                props.deleteBasketProduct(props.data.basketProductId);
              });
          }}
        >
          X
        </p>
        <B.ImgBox>
          <img
            src={
              "http://localhost:8000/media/products/" +
              props.data.product.imgUrl
            }
          />
        </B.ImgBox>
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
        <div>₩{count * props.data.product.price}</div>
      </B.RightBox>
    </B.ProductBox>
  );
};

export default BasketBox;
