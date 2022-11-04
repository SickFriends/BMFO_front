import React from "react";
import { Link } from "react-router-dom";
import * as S from "./login.style";
export default function Login() {
  return (
    <S.Wrapper>
      <h1>BMFO ID</h1>
      <S.InputContainer>
        <input type="text" placeholder="이메일/아이디"></input>
        <input type="password" placeholder="암호"></input>
      </S.InputContainer>
      <button>로그인</button>
      <Link to="/signup" >
        <p>BMFO ID 또는 암호를 잊으셨습니까?</p>
      </Link>
    </S.Wrapper>
  );
}
