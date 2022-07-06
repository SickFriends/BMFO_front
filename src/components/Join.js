import React from "react";
import Header from "./Header";
import "../static/Join.css"
import { Link } from "react-router-dom";

export default function Join(){
    return(
        <> 
            <div className="loginTop">
                <div className="loginBar">
                        <Link to="/">
                            <p className="loginMark">
                                BMFO
                            </p>
                        </Link>
                </div>
            </div>
            <form className="join">
                <div className="inputInfo">
                    <input type="text" placeholder="아이디" />
                    <input type="text" placeholder="닉네임" />
                    <input type="password" placeholder="비밀번호" />
                    <input type="password" placeholder="비밀번호 확인" />
                </div>
                <input type="submit" value="가입하기" />
            </form>
        </>
    );
}