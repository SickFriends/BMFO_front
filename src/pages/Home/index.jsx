import Header from "../../components/Header";
import * as M from "./home.style";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { GrSearch } from "react-icons/gr";
import ProductList from "../../components/ProductList";
import Footer from "../../components/Footer";
import { useEffect } from "react";
import axios from "axios";
import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
const Home = () => {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [name, setName] = useState("");
  const [inOrders, setInOrders] = useState([]);
  const navigate = useNavigate();
  useEffect(() => {
    axios
      .get("api/product/list")
      .then((res) => {
        setItems(res.data);
        setLoading(false);
      })
      .catch((err) => {
        setLoading(false);
      });
    axios.get("api/order/getMyActivatedOrders").then((res) => {
      setInOrders([...res.data]);
    });
  }, []);
  const search = async () => {
    setLoading(true);
    console.log(name);
    await axios
      .get(`/api/product/searchByNameInAll?name=${name}`)
      .then((res) => {
        setItems(res.data);
        setName("");
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const MyActivatedOrders = inOrders.map((orderData, indx) => {
    return (
      <div key={indx} style={{ backgroundColor: "wheat" }}>
        <h2>{orderData.lockerId}번 라커</h2>
        <p href="/">
          주문번호 : {orderData.orderId}
          <a
            style={{ size: 1.5, textDecoration: "underline" }}
            onClick={() => {
              console.log("ddd");
              navigate("/orderDetail/" + orderData.orderId);
            }}
          >
            자세히보기
          </a>
        </p>
        <p>비밀번호 : {orderData.password}</p>
      </div>
    );
  });

  return (
    <>
      <M.MainContainer>
        <Carousel
          dynamicHeight={false}
          showThumbs={false}
          showIndicators={false}
          showStatus={false}
        >
          <img src="maple.jpg" />
          <img src="bannerex.jpg" />
        </Carousel>
        {inOrders.length ? (
          <>
            <h2>할당된 주문 - {inOrders.length}개</h2>
            {MyActivatedOrders}
            <p style={{ fontSize: "4px" }}>
              상품을 꺼내가시면 할당된 주문에서 제외됩니다.
            </p>
            <p style={{ fontSize: "4px" }}>
              주문을 취하하고 싶다면 매점으로 가서 취소요청을 하세요
            </p>
          </>
        ) : (
          <h1></h1>
        )}
        <a
          style={{ textDecoration: "underline", color: "blue" }}
          onClick={() => {
            navigate("/myOrders");
          }}
        >
          내 주문 히스토리 확인
        </a>
        <M.InputBox>
          <M.Input
            onChange={(e) => {
              setName(e.target.value);
            }}
          />
          <GrSearch size={40} onClick={search} />
        </M.InputBox>
        {loading ? (
          <div
            style={{
              textAlign: "center",
              fontWeight: "bold",
              fontSize: "30px",
              marginTop: "30px",
            }}
          >
            로딩중...
          </div>
        ) : (
          <>
            {items.length === 0 ? (
              <div
                style={{
                  textAlign: "center",
                  fontWeight: "bold",
                  fontSize: "30px",
                  marginTop: "30px",
                }}
              >
                아직 제품이 없습니다...
              </div>
            ) : (
              <M.ItemsBox>
                {items.map((data, index) => (
                  <ProductList
                    imgsrc={
                      "http://localhost:8000/media/products/" + data.imgUrl
                    }
                    key={index}
                    name={data.name}
                    price={data.price}
                    id={data.productId}
                  />
                ))}
              </M.ItemsBox>
            )}
          </>
        )}
      </M.MainContainer>
      <Footer />
    </>
  );
};

export default Home;
