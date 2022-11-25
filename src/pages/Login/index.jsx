import axios from "axios";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import * as S from "./login.style";
export default function Login() {
  const [id, setId] = useState("");
  const [pwd, setPwd] = useState("");
  function sub() {
    const form = { username: id, password: pwd };
    console.log(form);
    axios
      .post("http://localhost:8080/user/login", form)
      .then((res) => {
        localStorage.setItem("token", res.data);
        console.log(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }
  return (
    <S.Wrapper>
      <h1>BMFO ID</h1>
      <S.InputContainer>
        <input
          type="text"
          placeholder="이메일/아이디"
          onChange={(e) => setId(e.target.value)}
        ></input>
        <input
          type="password"
          placeholder="암호"
          onChange={(e) => setPwd(e.target.value)}
        ></input>
      </S.InputContainer>
      <button onClick={sub}>로그인</button>
      <Link to="/signup">
        <p>BMFO ID 또는 암호를 잊으셨습니까?</p>
      </Link>
    </S.Wrapper>
  );
}
