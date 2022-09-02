import React from "react";
import "../static/AddProduct.css";
export default function AddProduct() {
  return (
    <div className="addCon">
      <form>
        <label for="img-input" className="labeling">
          이미지 업로드
        </label>
        <input
          type="file"
          accept="image/png, image/jpeg"
          id="img-input"
          style={{ display: "none" }}
        />
        <input type="text" placeholder="물건 이름"></input>
        <input type="text" placeholder="물건 가격"></input>
        <input type="text" placeholder="카테고리 선택"></input>
      </form>
    </div>
  );
}
