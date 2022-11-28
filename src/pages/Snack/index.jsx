import Header from "../../components/Header";
import * as M from "./Snack.style";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { GrSearch } from "react-icons/gr";
import ProductList from "../../components/ProductList";
import Footer from "../../components/Footer";
import { useEffect, useState } from "react";
import axios from "axios";
const Snack = () => {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(null);
  const [name, setName] = useState("");
  useEffect(() => {
    setLoading(true);
    axios
      .get("/api/product/findbycate?category=snack")
      .then((res) => {
        setItems(res.data);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
        setLoading(false);
      });
    console.log(items);
  }, []);
  const search = async () => {
    setLoading(true);
    console.log(name);
    const params = { name: name, category: "snack" };
    await axios
      .get("/api/product/searchByNameAndCategory", { params })
      .then((res) => {
        setItems(res.data);
        setName("");
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
      });
  };
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
        <M.InputBox>
          <M.Input
            onChange={(e) => {
              setName(e.target.value);
            }}
            value={name}
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

export default Snack;
