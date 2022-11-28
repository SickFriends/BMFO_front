import axios from "axios";
import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import * as S from "./signup.style";
export default function Signup() {
  const [id, setId] = useState("");
  const [email, setEmail] = useState("");
  const [pwd, setPwd] = useState("");
  function sub() {
    const form = { username: id, password: pwd, email: email };
    console.log(form);
    axios
      .post("api/auth/signup", form)
      .then((res) => {
        window.location.href = "/";
      })
      .catch((err) => {
        console.log(err);
      });
  }
  return (
    <S.Wrapper>
      <h1>BMFO에 계정 생성</h1>
      <S.InputContainer>
        <span>새 BMFO에 사용될 이메일/아이디 입니다.</span>
        <input
          type="text"
          placeholder="아이디"
          onChange={(e) => {
            setId(e.target.value);
          }}
        ></input>
        <input
          type="text"
          placeholder="이메일"
          onChange={(e) => {
            setEmail(e.target.value);
          }}
        ></input>
        <input
          type="password"
          placeholder="암호"
          onChange={(e) => {
            setPwd(e.target.value);
          }}
        ></input>
        <input type="password" placeholder="암호 확인"></input>
      </S.InputContainer>
      <Link to="/login">
        <p>이미 계정이 있으십니까?</p>
      </Link>
      <S.TextContainer>
        <input type="checkbox" />
        <span>
          BMFO의 개인정보 처리방침새 윈도우에서 열림에 따라 개인 정보를 수집,
          사용, 타사에 대한 제공 및 처리하는 데 동의합니다.
        </span>
      </S.TextContainer>
      <button onClick={sub}>계정 만들기</button>
    </S.Wrapper>
  );
}
