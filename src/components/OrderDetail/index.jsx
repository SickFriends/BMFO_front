import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";
import { useParams } from "react-router-dom";

export const OrderDetail = () => {
  const params = useParams();
  const [orderDetail, setOrderDetail] = useState({});

  useEffect(() => {
    console.log(params.orderId);
    axios
      .get("/api/order/getOrderDetail?orderId=" + params.orderId)
      .then(({ data }) => {
        console.log(data);
        setOrderDetail(data);
      });
  }, []);

  const approveStatus = [
    "?",
    { name: "대기중", color: "gray" },
    { color: "green", name: "승인됨" },
    { name: "거부됨", color: "red" },
    { name: "취소됨", color: "red" },
  ];
  return (
    <div>
      <h1>주문서</h1>
      {orderDetail ? (
        <div>
          <h2>주문 ID : {params.orderId}</h2>
          <h3>총 가격 : {orderDetail.amount}원</h3>
          <h3>배정된 라커 : {orderDetail.lockerId}번 라커</h3>
          <h3 style={{ color: approveStatus[orderDetail?.status]?.color }}>
            결제상태 : {approveStatus[orderDetail?.status]?.name}
          </h3>
          <h4>결제시간 : {orderDetail?.orderedAt}</h4>
          {orderDetail.orderedProducts
            ? orderDetail.orderedProducts.map((product, idx) => {
                return (
                  <div key={idx} style={{ backgroundColor: "wheat" }}>
                    <p>제품 명 : {product.productName}</p>
                    <p>수량 : {product.count}</p>
                    <p>가격 : {product.productPrice}</p>
                  </div>
                );
              })
            : ""}
        </div>
      ) : (
        <div>주문서 로딩중..</div>
      )}
    </div>
  );
};
