import React from "react";
import "../static/Header.css"
import { Link } from "react-router-dom";
export default function Header(){
    return(
        <>
        <div className="fixedhead">
        <div className="header">
            <Link to="/" className="mark">
                BMFO
            </Link>
            <div className="search">
                <input type="text" className="mainSearchBar"/>
                <button type="submit"><img src="img/search.png" alt="이미지가 표시되지 않음" /></button>
            </div>
            <div className="nav">
                <ul>
                    <li className="user">
                        <img src="img/user.png" alt="이미지가 표시되지 않음" />
                    </li>
                    <li className="cart">
                        <img src="img/cart.png" alt="이미지가 표시되지 않음" />
                    </li>
                    <li>
                        <Link to="/login" className="headerlogin">
                            Login
                        </Link>
                    </li>
                    <li>
                        <Link to="/join" className="headerjoin">
                            Join
                        </Link>
                    </li>
                    
                </ul>
            </div>
        </div>
        <div className="category">
            <div className="categoryBar">
                <img src="img/menuBar.png" className="Bar" alt="이미지가 표시되지 않음" />
                <p className="catename">전체 카테고리</p>
            </div>
            <ul>
                <li>
                    <Link to="/snack" className="snack">
                        과자
                    </Link>
                </li>
                <li>
                    <Link to="/iceCream" className="iceCream">
                        아이스크림
                    </Link>
                </li>
                <li>
                    <Link to="/drink" className="drink">
                        음료수
                    </Link>    
                </li>
                <li>
                    <Link to="/iceFood" className="iceFood">
                        냉동식품
                    </Link>    
                </li>
            </ul>
        </div>
        </div>
        </>
    )
}