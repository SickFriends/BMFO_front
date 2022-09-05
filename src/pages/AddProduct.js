import React, { useState } from "react";
import "../static/AddProduct.css";
export default function AddProduct() {
  const [productName, setProductName] = useState("");
  const [productPrice, setProductPrice] = useState(0);
  const [imgUrl, setImgUrl] = useState();
  const [cate, setCate] = useState();
  async function onSub(e) {
    e.preventDefault();
    const form = {
      name: productName,
      price: productPrice,
      category: cate,
      imgUrl: imgUrl,
    };
    console.log(form);
  }
  return (
    <div className="addCon">
      <form onSubmit={onSub}>
        <div className="uploadBox">
          <label for="img-input" className="labeling">
            이미지 업로드
          </label>
          <input
            type="file"
            accept="image/png, image/jpeg"
            id="img-input"
            style={{ display: "none" }}
            onChange={(e) => setImgUrl(e.target.value)}
          />
          <div className="imgBox">
            <img src={imgUrl} />
          </div>
        </div>
        <div className="selectBox">
          <input
            type="text"
            placeholder="물건 이름"
            onChange={(e) => setProductName(e.target.value)}
          ></input>
          <input
            type="text"
            placeholder="물건 가격"
            onChange={(e) => setProductPrice(e.target.value)}
          ></input>
          <select name="cate" onChange={(e) => setCate(e.target.value)}>
            <option value="">카테고리 선택</option>
            <option value="icecream">아이스크림</option>
            <option value="snack">과자</option>
            <option value="drink">음료수</option>
            <option value="icefood">냉동식품</option>
          </select>
          <input type="submit" value="제출" />
        </div>
      </form>
    </div>
  );
}
