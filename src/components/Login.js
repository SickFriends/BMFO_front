import React from "react";
import "../static/Join.css"
import { Link } from "react-router-dom";
export default function Login(){
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
                    <input type="password" placeholder="비밀번호" />
                </div>
                <input type="submit" value="로그인" />
            </form>
        </>
    );
}