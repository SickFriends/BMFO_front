import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { AiOutlineUser } from "react-icons/ai";
import * as O from "./myOrders.style";
import { userState } from "../../store/user";
import { useRecoilState } from "recoil";
import ActivatedOrder from "../../components/ActivatedOrders";
import { MdOutlineNavigateNext } from "react-icons/md"
import { MdOutlineNavigateBefore } from "react-icons/md";

export const MyOrders = () => {
  const [page, setPage] = useState(1);
  const [maxPage, setMaxPage] = useState(1);
  const [orders, setOrders] = useState([]);
  const [inOrders, setInOrders] = useState([]);
  const navigate = useNavigate();
  const [user, setUser] = useRecoilState(userState);

  useEffect(() => {
    axios.get("/api/order/getMyOrders?page=" + page).then(({ data }) => {
      setOrders(data.orders);
      setMaxPage(data.maxPage);
    });
  }, [page]);
  useEffect(() => {
    axios.get("api/order/getMyActivatedOrders").then((res) => {
      console.log(res.data);
      setInOrders([...res.data]);
    }); 
  }, []);
  const activatedOrder = inOrders.map((data, idx) => (<ActivatedOrder key={idx} index={idx} data={data} />))

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
  const logout = () => {
    axios
      .get("/api/auth/logout")
      .then((res) => {
        localStorage.setItem(
          "user",
          JSON.stringify({
            isLogin: false,
          })
        );
        setUser({
          isLogin: false,
        });
        window.location.replace("/");
      })
      .catch(() => {
        console.log("dpfjqkftod");
      });
  }
  return (
    <>
    <O.UserInfo>
      <AiOutlineUser size={40} />
      <div>{user.username}</div>
      <div>({user.email})</div>
      <button onClick={logout}>로그아웃</button>
    </O.UserInfo>
    <O.ActivatedOrder>
      <div className="activatedTitle">활성화된 주문</div>
      <div className="ordersContainer">{activatedOrder}</div>
    </O.ActivatedOrder>
    <O.Orders>
      <div className="orderTitle">주문 히스토리</div>
    <div>
      {orderList}
      <O.Pages>
        <div>
        {page > 1 && (
          <MdOutlineNavigateBefore
            onClick={() => {
              setPage((d) => d - 1);
            }}
          />
        ) 
        }
        <p>{page}</p>
        {page < maxPage && 
          <MdOutlineNavigateNext
            onClick={() => {
              setPage((d) => d + 1);
            }}
          />
        }
        </div>
      </O.Pages>
    </div>
    </O.Orders>
    </>
  );
};
