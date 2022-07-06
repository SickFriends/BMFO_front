import React from "react";
import "../static/Product_list.css";
import { useNavigate } from "react-router-dom"
function ProductList() {
  const navi = useNavigate()
  function buy(data) {
    if (data.idx === -1) return;
    navi("/BuyPopup", {
      replace: false,
      state: {
        idx: data.idx,
        imgsrc: data.imgsrc,
        price: data.price,
        name: data.name,
      },
    });
  }
  let tempData = {
    idx: -1,
    imgsrc: "https://www.analogouscolors.com/jpg/ffffff.jpg",
    name: "",
    price: "",
  };
  let print = [];
  let products = {
    snack: [
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
  ],
  iceCream: [
      {
      imgsrc:
      "https://sitem.ssgcdn.com/31/85/68/item/1000244688531_i1_232.jpg",
      idx: 1,
      name: "슈퍼콘 초코",
      price: 1500,
    },
    {
      imgsrc:
      "https://scontent-ssn1-1.xx.fbcdn.net/v/t1.6435-9/67219209_2871653329516462_2028765993114796032_n.jpg?stp=dst-jpg_p526x296&_nc_cat=109&ccb=1-7&_nc_sid=9267fe&_nc_ohc=owzfqNCVFW4AX-Nqi6E&_nc_ht=scontent-ssn1-1.xx&oh=00_AT_FeA-l28dOYw38-zPBx3uHAjnyEprtlgI411PYvK_7IQ&oe=62EACB83",
      idx: 2,
      name: "슈퍼콘 민초",
      price: 1500,
    },
    {
      imgsrc:
      "https://sitem.ssgcdn.com/74/50/58/item/1000263585074_i1_232.jpg",
      idx: 3,
      name: "슈퍼콘 쿠키",
      price: 1500,
    },
    {
      imgsrc:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQdWzI8Pgbg4iabvzHp__zKkusUO1lfUSouYw&usqp=CAU",
      idx: 4,
      name: "월드콘",
      price: 1500,
    },
    {
      imgsrc:
      "https://sitem.ssgcdn.com/03/43/80/item/1000221804303_i1_232.jpg",
      idx: 5,
      name: "녹차마루",
      price: 1000,
    },
    {
      imgsrc:
      "https://thumbnail10.coupangcdn.com/thumbnails/remote/492x492ex/image/retail/images/161602778751900-6529200d-b5d1-48c2-825a-3837e891cbe9.jpg",
      idx: 6,
      name: "메로나",
      price: 1000,
    },
    {
      imgsrc:
      "https://sitem.ssgcdn.com/31/85/68/item/1000244688531_i1_232.jpg",
      idx: 1,
      name: "슈퍼콘 초코",
      price: 1500,
    },
    {
      imgsrc:
      "https://scontent-ssn1-1.xx.fbcdn.net/v/t1.6435-9/67219209_2871653329516462_2028765993114796032_n.jpg?stp=dst-jpg_p526x296&_nc_cat=109&ccb=1-7&_nc_sid=9267fe&_nc_ohc=owzfqNCVFW4AX-Nqi6E&_nc_ht=scontent-ssn1-1.xx&oh=00_AT_FeA-l28dOYw38-zPBx3uHAjnyEprtlgI411PYvK_7IQ&oe=62EACB83",
      idx: 2,
      name: "슈퍼콘 민초",
      price: 1500,
    },
    {
      imgsrc:
      "https://sitem.ssgcdn.com/74/50/58/item/1000263585074_i1_232.jpg",
      idx: 3,
      name: "슈퍼콘 쿠키",
      price: 1500,
    },
    {
        imgsrc: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQdWzI8Pgbg4iabvzHp__zKkusUO1lfUSouYw&usqp=CAU",
        idx: 4,
        name: "월드콘",
        price: 1500,
    },
    {
        imgsrc: "https://sitem.ssgcdn.com/03/43/80/item/1000221804303_i1_232.jpg",
        idx: 5,
        name: "녹차마루",
        price: 1000,
      },
    ],
  };
  if(window.location.pathname === "/snack"){
    print = products.snack;
  }
  else if(window.location.pathname === "/iceCream"){
    print = products.iceCream;
  }  
  for (let i = 0; i < print.length % 4; i++) print.push(tempData);
  const list = print.map((data) => (
    <div className="prod">
      <img
        onClick={() => buy(data)}
        src={data.imgsrc}
        width="150"
        height="150"
        alt="이미지가 표시되지 않음"
      ></img>

      <p className="proName">{data.name !== "" ? "이름 : " + data.name : ""}</p>
      <p className="price">{data.price !== "" ? "가격 : " + data.price : ""}</p>
    </div>
  ));
  return (
    <div className="product_list">
      <div className="fixedSize">
        <div className="lists">{list}</div>
      </div>
    </div>
  );
}
export default ProductList;