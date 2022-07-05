import React from "react";
import "./product_list.css";
import { Link } from "react-router-dom";
function Product_list() {
  let tempData = {
    idx: -1,
    imgsrc: "https://www.analogouscolors.com/jpg/ffffff.jpg",
    name: "",
    price: "",
  };
  let products = [
    {
      imgsrc:
        "https://sitem.ssgcdn.com/00/00/76/item/1000010760000_i1_1200.jpg",
      idx: 1,
      name: "스윙칩",
      price: 1500,
    },
    {
      imgsrc:
        "https://sitem.ssgcdn.com/32/46/10/item/0000008104632_i1_1200.jpg",
      idx: 2,
      name: "포카칩",
      price: 2000,
    },
    {
      imgsrc:
        "https://sitem.ssgcdn.com/97/72/72/item/1000019727297_i1_1200.jpg",
      idx: 3,
      name: "육즙만두",
      price: 1000,
    },
    {
      imgsrc:
        "https://sitem.ssgcdn.com/32/46/10/item/0000008104632_i1_1200.jpg",
      idx: 2,
      name: "포카칩",
      price: 2000,
    },
    {
      imgsrc:
        "https://sitem.ssgcdn.com/00/00/76/item/1000010760000_i1_1200.jpg",
      idx: 1,
      name: "스윙칩",
      price: 1500,
    },
    {
      imgsrc:
        "https://sitem.ssgcdn.com/97/72/72/item/1000019727297_i1_1200.jpg",
      idx: 3,
      name: "육즙만두",
      price: 1000,
    },
    {
      imgsrc:
        "https://sitem.ssgcdn.com/32/46/10/item/0000008104632_i1_1200.jpg",
      idx: 2,
      name: "포카칩",
      price: 2000,
    },
    {
      imgsrc:
        "https://sitem.ssgcdn.com/00/00/76/item/1000010760000_i1_1200.jpg",
      idx: 1,
      name: "스윙칩",
      price: 1500,
    },
    {
      imgsrc:
        "https://sitem.ssgcdn.com/97/72/72/item/1000019727297_i1_1200.jpg",
      idx: 3,
      name: "육즙만두",
      price: 1000,
    },
    {
      imgsrc:
        "https://sitem.ssgcdn.com/32/46/10/item/0000008104632_i1_1200.jpg",
      idx: 2,
      name: "포카칩",
      price: 2000,
    },
    {
      imgsrc:
        "https://sitem.ssgcdn.com/00/00/76/item/1000010760000_i1_1200.jpg",
      idx: 1,
      name: "스윙칩",
      price: 1500,
    },
  ];
  for (let i = 0; i < products.length % 4; i++) products.push(tempData);
  const list = products.map((data) => (
    <div className="prod">
      <Link to="/BuyPage">
        <img
          src={data.imgsrc}
          width="150"
          height="150"
          alt="이미지가 표시되지 않음"
        ></img>
      </Link>
      <p>{data.name !== "" ? "이름 : " + data.name : ""}</p>
      <p>{data.price !== "" ? "가격 : " + data.price : ""}</p>
    </div>
  ));
  return (
    <div className="product_list">
      <div className="fixedSize">
        <header>
          <div className="mark">BSSM</div>
        </header>
        <div className="lists">{list}</div>

        <footer>오태식</footer>
      </div>
    </div>
  );
}
export default Product_list;
