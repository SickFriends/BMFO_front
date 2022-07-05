import React from "react";
import "./Header.css";

function Header() {
  return (
    <div className="header">
      <img
        className="header_logo"
        src="https://pngimg.com/uploads/amazon/amazon_PNG11.png"
      />

      <div className="header_search">
        <input className="header_searchInput" type="text" />
      </div>

      <div className="header_nav">
        <div className="header_option">
          <span className="header_optionLineOne">게스트 </span>

          <span className="header_optionLineTwo">로그인</span>
        </div>

        <div className="header_option">
          <span className="header_optionLineOne">돌아가기</span>

          <span className="header_optionLineTwo">주문내역</span>
        </div>

        <div className="header_option">
          <span className="header_optionLineOne">반가워요</span>
          <span className="header_optionLineTwo">ㅎㅇ</span>
        </div>

        <div className="header_optionBasket">
          <span className="header_optionLineTwoheader_basketCount">0</span>
        </div>
      </div>
    </div>
  );
}

export default Header;
