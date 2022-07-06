import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import "../static/BuyPopup.css";
import Header from "../components/Header";
function BuyPopup() {
  const navi = useNavigate();
  const location = useLocation();
  const imgsrc = location.state.imgsrc;
  const price = location.state.price;
  const idx = location.state.idx;
  const name = location.state.name;
  const [buyCnt, setBuyCnt] = useState(1);
  return (
    <div className="buyPopup">
      <Header />
      <div className="prodImg">
        <img src={imgsrc}></img>
      </div>
      <div className="Intro">
        <p className="prodName">{name}</p>
        <p className="prodPrice">{price}원</p>
        <div className="selectQuantity">
          <button
            onClick={() => {
              buyCnt !== 20 ? setBuyCnt((prev) => prev + 1) : setBuyCnt(buyCnt);
            }}
          >
            +
          </button>
          <p>{buyCnt}</p>
          <button
            onClick={() => {
              buyCnt !== 1 ? setBuyCnt((prev) => prev - 1) : setBuyCnt(buyCnt);
            }}
          >
            -
          </button>
        </div>
        <p className="totalPrice">총 가격 : {price * buyCnt}원</p>
        <div className="putInBag" onClick={() => navi(-1)}>
          장바구니
        </div>
      </div>
    </div>
  );
}
export default BuyPopup;
