import * as A from "./LockerDetail.style";
import React from "react";
import { AiOutlineDelete } from "react-icons/ai";
import { Link, Navigate, useNavigate, useParams } from "react-router-dom";
import { useEffect } from "react";
import axios from "axios";
import { useState } from "react";
import { MdOutlineNavigateBefore, MdOutlineNavigateNext } from "react-icons/md";
export default function LockerDetail() {
  const param = useParams();
  const [locker, setLocker] = useState();
  const [assignedOrder, setAssignedOrder] = useState();
  const [orderList, setOrderList] = useState([]);
  const [page, setPage] = useState(1);
  const [maxPage, setMaxPage] = useState();
  const navigate = useNavigate();
  const lockerId = param.lockerId;

  const approveStatus = [
    "?",
    { name: "대기중", color: "gray" },
    { color: "green", name: "승인됨" },
    { name: "실패됨", color: "red" },
    { name: "취소됨", color: "red" },
  ];

  useEffect(() => {
    axios
      .get(`/api/order/getOrdersAboutLocker?lockerId=${lockerId}&page=${page}`)
      .then(({ data }) => {
        setOrderList(data.orders);
        window.scrollTo(0, 0);
        setMaxPage(data.maxPage);
      });
  }, [page]);

  useEffect(() => {
    axios
      .post(`/api/locker/lockerDetail`, {
        lockerId: lockerId,
      })
      .then((res) => {
        setLocker(res.data);
        console.log(res.data);
        if (res.data.orderId) {
          axios
            .get("/api/order/getOrderDetail?orderId=" + res.data.orderId)
            .then((res) => {
              setAssignedOrder(res.data);
              console.log(res.data);
            });
        }
      })
      .catch((e) => {
        console.log(e);
      });
  }, []);

  return (
    <A.Layout>
      <A.Wrapper>
        <h1>{lockerId}번 라커</h1>
        {locker?.isUsing ? <h2>사용중</h2> : null}
        {locker?.isWating ? <h2>대기중</h2> : null}
        <button
          style={{
            backgroundColor: "greenyellow",
            width: "100px",
            height: "30px",
            borderRadius: "5px",
            marginTop: "5px",
          }}
          onClick={() => {
            axios
              .post("/api/locker/openForProviding?lockerId=" + lockerId)
              .then((res) => {
                alert("문이 열렸습니다.");
              });
          }}
        >
          라커 열기
        </button>
      </A.Wrapper>
      {assignedOrder?.status === 2 ? (
        <span>
          현재 보관되어야 할 목록 :{" "}
          {assignedOrder?.orderedProducts?.map((prod, idx) => {
            return ` ${prod.productName}(${prod.count}개),`;
          })}
        </span>
      ) : (
        <></>
      )}
      {locker?.orderId && (
        <a
          style={{
            fontSize: "5px",
            textDecoration: "underline",
            color: "blue",
          }}
          onClick={() => {
            navigate("/orderDetail/" + assignedOrder.orderId);
          }}
        >
          할당된 오더 : {locker?.orderId}
        </a>
      )}
      <A.Wrapper style={{ marginBottom: "-50px" }}>
        <h4>주문 히스토리</h4>
      </A.Wrapper>
      <A.LogWrapper>
        {orderList.map((order, idx) => {
          return (
            <A.LogItem key={idx}>
              <A.LogNum>
                <span
                  onClick={() => {
                    navigate("/orderDetail/" + order.orderId);
                  }}
                  style={{ fontSize: "5px" }}
                >
                  주문번호 : {order.orderId}
                </span>
              </A.LogNum>
              <A.LogTime>
                <span>주문 시간 : {order.orderedAt}</span>
                <span>
                  주문 목록 :{" "}
                  {order.orderedProducts.map(
                    (product) => `${product.productName}(${product.count}개)`
                  )}
                </span>
                <span>배정된 라커 : {order.lockerId}번</span>
                <span>결제 상태 : {approveStatus[order.status].name}</span>
              </A.LogTime>
              <A.Cancle>
                <AiOutlineDelete className="icon" />
              </A.Cancle>
            </A.LogItem>
          );
        })}
        <div style={{ textAlign: "center" }}>
          {page > 1 && (
            <MdOutlineNavigateBefore
              onClick={() => {
                setPage((d) => d - 1);
              }}
            />
          )}
          <p>{page}</p>
          {page < maxPage && (
            <MdOutlineNavigateNext
              onClick={() => {
                setPage((d) => d + 1);
              }}
            />
          )}
        </div>
      </A.LogWrapper>
    </A.Layout>
  );
}
