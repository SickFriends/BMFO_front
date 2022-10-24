import React from "react";
import { Link } from "react-router-dom";
import * as S from "./signup.style"
export default function Signup(){
    return(
        <S.Wrapper>
            <h1>BMFO에 계정 생성</h1>
            <S.InputContainer>
                <p>새 BMFO에 사용될 이메일/아이디 입니다.</p>
                <input type = "text" placeholder="이메일/아이디"></input>
                <input type = "password" placeholder="암호"></input>
                <input type = "password" placeholder="암호 확인"></input>
            </S.InputContainer>
            <Link to = "/login"><p>이미 계정이 있으십니까?</p></Link>
        </S.Wrapper>
    )
}