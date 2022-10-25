import React from "react";
import { Link } from "react-router-dom";
import * as S from "./signup.style";
export default function Signup() {
  return (
    <S.Wrapper>
      <h1>BMFO에 계정 생성</h1>
      <S.InputContainer>
        <span>새 BMFO에 사용될 이메일/아이디 입니다.</span>
        <input type="text" placeholder="이메일/아이디"></input>
        <input type="password" placeholder="암호"></input>
        <input type="password" placeholder="암호 확인"></input>
      </S.InputContainer>
      <Link to="/login" >
        <p>이미 계정이 있으십니까?</p>
      </Link>
      <S.TextContainer>
        <input type="checkbox" />
          <span>
            BMFO의 개인정보 처리방침새 윈도우에서 열림에 따라 개인 정보를 수집,
            사용, 타사에 대한 제공 및 처리하는 데 동의합니다.
          </span>
      </S.TextContainer>
      <button>계정 만들기</button>
    </S.Wrapper>
  );
}
