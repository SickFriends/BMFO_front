import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { AiOutlineUser } from "react-icons/ai";
import * as O from "./myOrders.style";
import { userState } from "../../store/user";
import { useRecoilState } from "recoil";
import ActivatedOrder from "../../components/ActivatedOrders";
import { MdOutlineNavigateNext } from "react-icons/md";
import { MdOutlineNavigateBefore } from "react-icons/md";

export const MyOrders = () => {
  const [page, setPage] = useState(1);
  const [maxPage, setMaxPage] = useState(1);
  const [orders, setOrders] = useState([]);
  const [inOrders, setInOrders] = useState([]);
  const navigate = useNavigate();
  const [user, setUser] = useRecoilState(userState);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    if (user.role === 1) {
      axios.get("/api/order/getMyOrders?page=" + page).then(({ data }) => {
        console.log(data.orders);
        setOrders(data.orders);
        setMaxPage(data.maxPage);
        console.log(data.maxPage);
      });
    }
  }, [page]);

  useEffect(() => {
    if (user.role === 1) {
      setIsLoading(true);
    axios.get("api/order/getMyActivatedOrders").then((res) => {
      console.log(res.data);
      setInOrders([...res.data]);
      setIsLoading(false);
    }); 
    }
  }, []);
  const activatedOrder = inOrders.map((data, idx) => (
    <ActivatedOrder key={idx} index={idx} data={data} />
  ));

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
  };

  const role = ["", "구매자", "판매자"];
  let pages = [];
    for(let i = 1; i <= maxPage; i++){
      pages.push(
        <div onClick={() => {
          setPage(i)
          window.scrollTo({
            top: 0,
            behavior: "smooth"
          });
        }}
        style={page === i ? {backgroundColor: '#5bcef5', color: "white"} : {}}
        className="pageBox"
        >{i}</div>
      )
    }
  if(isLoading) return <>...</>
  return (
    <>
      <O.UserInfo>
        <AiOutlineUser size={40} />
        <div>{user.username}</div>
        <div>({user.email})</div>
        <div>{role[user.role]}</div>
        <button onClick={logout}>로그아웃</button>
      </O.UserInfo>
      {user.role === 1 ? (
        <div>
          <O.ActivatedOrder>
      <div className="activatedTitle">활성화된 주문</div>
      <div className="ordersContainer">{inOrders.length === 0 ? <div>활성화 된 주문이 없습니다</div> : {activatedOrder}}</div>
    </O.ActivatedOrder>
    <O.Orders>
      <div className="orderTitle">주문 히스토리</div>
    <div style={{width: '100%'}}>
      {orders.length === 0 ? <div>주문 내역이 없습니다.</div> : orderList}
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
        <div>{pages}</div>
                  {page < maxPage && (
                    <MdOutlineNavigateNext
                      onClick={() => {
                        setPage((d) => d + 1);
                      }}
                    />
                  )}
                </div>
              </O.Pages>
            </div>
          </O.Orders>
        </div>
      ) : (
        <div>
          <button>관리자모드</button>
        </div>
      )}
    </>
  );
};
