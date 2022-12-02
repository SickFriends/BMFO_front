import * as A from "./AdminPage.style";
import React from "react";
import { AiFillDelete, AiOutlineDelete } from "react-icons/ai";
import { Link } from "react-router-dom";
export default function AdminPage() {
  return (
    <A.Layout>
      <A.Wrapper>
        <Link to="/detail">
          <A.ListItem bgcolor={"white"}>1</A.ListItem>
        </Link>
        <Link to="/detail">
          <A.ListItem bgcolor={"lightblue"}>2</A.ListItem>
        </Link>
        <Link to="/detail">
          <A.ListItem bgcolor={"#FF5675"}>3</A.ListItem>
        </Link>
        <Link to="/detail">
          <A.ListItem bgcolor={"white"}>4</A.ListItem>
        </Link>
      </A.Wrapper>
      <A.LogWrapper>
        <A.LogItem>
          <A.LogNum>
            <span>주문번호 : {1}</span>
          </A.LogNum>
          <A.LogTime>
            <span>주문 시간 : 2022/11/30</span>
            <span>주문 목록 : 쌍쌍바(1), 빵빠레 초코(1)</span>
          </A.LogTime>
          <A.Cancle>
            <AiOutlineDelete className="icon" />
          </A.Cancle>
        </A.LogItem>
        <A.LogItem>
          <A.LogNum>
            <span>주문번호 : {2}</span>
          </A.LogNum>
          <A.LogTime>
            <span>주문 시간 : 2022/11/30</span>
            <span>주문 목록 : 맛새우칩(2), 빅패스츄리(4)</span>
          </A.LogTime>
          <A.Cancle>
            <AiOutlineDelete className="icon" />
          </A.Cancle>
        </A.LogItem>
      </A.LogWrapper>
      <Link to="/">
        <A.Detail>더보기</A.Detail>
      </Link>
    </A.Layout>
  );
}
