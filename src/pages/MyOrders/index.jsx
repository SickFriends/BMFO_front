import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export const MyOrders = () => {
  const [page, setPage] = useState(1);
  const [maxPage, setMaxPage] = useState(1);
  const [orders, setOrders] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    axios.get("/api/order/getMyOrders?page=" + page).then(({ data }) => {
      setOrders(data.orders);
      setMaxPage(data.maxPage);
    });
  }, [page]);

  const orderList = orders.map((order, index) => {
    return (
      <div key={(index + 1) * page} style={{ background: "gray" }}>
        <p>{index + 1 + (page - 1) * 5}</p>
        <p
          style={{ textDecoration: "underline" }}
          onClick={() => {
            navigate("/orderDetail/" + order.orderId);
          }}
        >
          주문번호 : {order.orderId}
        </p>
        <p>주문일시 : {order.orderedAt}</p>
        <p>총가격 : {order.amount}원</p>
      </div>
    );
  });

  return (
    <div>
      {page > 1 ? (
        <button
          onClick={() => {
            setPage((d) => d - 1);
          }}
        >
          {page - 1}
        </button>
      ) : (
        <button></button>
      )}
      <p>{page}</p>
      {page < maxPage ? (
        <button
          onClick={() => {
            setPage((d) => d + 1);
          }}
        >
          {page + 1}
        </button>
      ) : (
        <button></button>
      )}
      {orderList}
    </div>
  );
};
