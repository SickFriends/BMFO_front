import * as P from "./purchase.style";
import { AiOutlinePlusCircle } from "react-icons/ai";
import { AiOutlineMinusCircle } from "react-icons/ai";
import { useState } from "react";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import axios from "axios";

const Purchase = () => {
  const [count, setCount] = useState(1);
  const [product, setProduct] = useState({});
  const [loading, setLoading] = useState(null);
  const params = useParams();
  const id = params.id;
  useEffect(() => {
    setLoading(true);
    axios
      .get(`/api/product/getOneProduct?id=${id}`)
      .then((res) => {
        console.log(res.data);
        setProduct(res.data);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  const put = () => {
    const data = {
      productId: product.productId,
      cnt: count,
    };
    axios
      .post("/api/basket/putProduct", data)
      .then((res) => {
        window.location.replace("/");
      })
      .catch((err) => {
        console.log(err);
      });
  };
  if (loading) return <>...</>;
  return (
    <P.container>
      <P.imgBox>
        <img src={"http://localhost:8000/media/products/" + product.imgUrl} />
      </P.imgBox>
      <P.saleBox>
        <P.titleBox>{product.name}</P.titleBox>
        <P.priceBox>₩{product.price * count}</P.priceBox>
        <P.count>수량</P.count>
        <P.IncDec>
          <AiOutlineMinusCircle
            size={30}
            onClick={() => {
              if (count > 1) {
                setCount(count - 1);
              }
            }}
          />
          <div>{count}</div>
          <AiOutlinePlusCircle
            size={30}
            onClick={() => {
              setCount(count + 1);
            }}
          />
        </P.IncDec>
        <P.buttons>
          <button onClick={put}>장바구니 담기</button>
        </P.buttons>
      </P.saleBox>
    </P.container>
  );
};

export default Purchase;
