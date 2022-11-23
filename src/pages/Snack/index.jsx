import Header from "../../components/Header"
import * as M from "./Snack.style"
import { Carousel } from "react-responsive-carousel"
import "react-responsive-carousel/lib/styles/carousel.min.css";
import {GrSearch} from "react-icons/gr"
import ProductList from "../../components/ProductList";
import Footer from "../../components/Footer";
import { useEffect, useState } from "react";
import axios from "axios";
const Snack = () => {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    axios.get("http://127.0.0.1:8080/product/findbycate?category=snack")
    .then(res => {
      setItems(res.data);
    })
    .catch(err => {
      console.log(err);
    })
    setLoading(false);
  }, []);
    if(loading) return <>...</>
    return (
        <>
        <M.MainContainer>
            <Carousel dynamicHeight={false} showThumbs={false} showIndicators={false} showStatus={false}>
                <img src="maple.jpg" />
                <img src="bannerex.jpg" />
            </Carousel>
            <M.InputBox>
                <M.Input />
                <GrSearch size={40} />
            </M.InputBox>
            <M.ItemsBox>
                {items.map((data, index) => (
                    <ProductList imgsrc={data.imgUrl} name={data.name} price={data.price} id={data.productId} />
                ))}
            </M.ItemsBox>
            
        </M.MainContainer>
        <Footer />
        </>
    )
}

export default Snack;