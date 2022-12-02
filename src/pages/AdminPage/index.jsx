import * as A from "./AdminPage.style";
import React from "react";
import { AiFillDelete, AiOutlineDelete } from "react-icons/ai";
import { Link, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import axios from "axios";
import { useState } from "react";
export default function AdminPage() {
  const [lockerList, setLockerList] = useState([]);
  const [activatedOrders, setActivatedOrders] = useState();
  const navigate = useNavigate();
  useEffect(() => {
    axios
      .get("/api/locker")
      .then((res) => {
        setLockerList(res.data);
      })
      .catch((e) => {
        console.log(e);
      });

    axios
      .get("/api/order/getAllActivatedOrders")
      .then(({ data }) => {
        setActivatedOrders(data);
      })
      .catch((e) => {});
  }, []);

  return (
    <A.Layout>
      <A.Wrapper>
        {lockerList.length ? (
          lockerList.map((locker, indx) => {
            return (
              <A.ListItem
                key={indx}
                onClick={() => {
                  navigate(`/lockerDetail/${locker?.lockerId}`);
                }}
                bgcolor={() => {
                  if (locker.isUsing) {
                    return "#FF5675";
                  } else if (locker.isWating) {
                    return "skyblue";
                  } else {
                    return "white";
                  }
                }}
              >
                {locker.lockerId}
              </A.ListItem>
            );
          })
        ) : (
          <h2>라커를 로딩중</h2>
        )}
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
