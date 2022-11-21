import Header from "../../components/Header"
import * as M from "./FrozenFood.style"
import { Carousel } from "react-responsive-carousel"
import "react-responsive-carousel/lib/styles/carousel.min.css";
import {GrSearch} from "react-icons/gr"
import ProductList from "../../components/ProductList";
import Footer from "../../components/Footer";
const Home = () => {
    const items = {
        snack: [
          {
          imgsrc:
            "https://sitem.ssgcdn.com/00/00/76/item/1000010760000_i1_1200.jpg",
          idx: 1,
          name: "스윙칩",
          price: 1500,
        },
        {
          imgsrc:
            "https://sitem.ssgcdn.com/32/46/10/item/0000008104632_i1_1200.jpg",
          idx: 2,
          name: "포카칩",
          price: 2000,
        },
        {
          imgsrc:
            "https://sitem.ssgcdn.com/97/72/72/item/1000019727297_i1_1200.jpg",
          idx: 3,
          name: "육즙만두",
          price: 1000,
        },
        {
          imgsrc:
            "https://sitem.ssgcdn.com/32/46/10/item/0000008104632_i1_1200.jpg",
          idx: 2,
          name: "포카칩",
          price: 2000,
        },
        {
          imgsrc:
            "https://sitem.ssgcdn.com/00/00/76/item/1000010760000_i1_1200.jpg",
          idx: 1,
          name: "스윙칩",
          price: 1500,
        },
        {
          imgsrc:
            "https://sitem.ssgcdn.com/97/72/72/item/1000019727297_i1_1200.jpg",
          idx: 3,
          name: "육즙만두",
          price: 1000,
        },
        {
          imgsrc:
            "https://sitem.ssgcdn.com/32/46/10/item/0000008104632_i1_1200.jpg",
          idx: 2,
          name: "포카칩",
          price: 2000,
        },
        {
          imgsrc:
            "https://sitem.ssgcdn.com/00/00/76/item/1000010760000_i1_1200.jpg",
          idx: 1,
          name: "스윙칩",
          price: 1500,
        },
        {
          imgsrc:
            "https://sitem.ssgcdn.com/97/72/72/item/1000019727297_i1_1200.jpg",
          idx: 3,
          name: "육즙만두",
          price: 1000,
        },
        {
          imgsrc:
            "https://sitem.ssgcdn.com/32/46/10/item/0000008104632_i1_1200.jpg",
          idx: 2,
          name: "포카칩",
          price: 2000,
        },
        {
          imgsrc:
            "https://sitem.ssgcdn.com/00/00/76/item/1000010760000_i1_1200.jpg",
          idx: 1,
          name: "스윙칩",
          price: 1500,
        },
      ],
      iceCream: [
          {
          imgsrc:
          "https://sitem.ssgcdn.com/31/85/68/item/1000244688531_i1_232.jpg",
          idx: 1,
          name: "슈퍼콘 초코",
          price: 1500,
        },
        {
          imgsrc:
          "https://scontent-ssn1-1.xx.fbcdn.net/v/t1.6435-9/67219209_2871653329516462_2028765993114796032_n.jpg?stp=dst-jpg_p526x296&_nc_cat=109&ccb=1-7&_nc_sid=9267fe&_nc_ohc=owzfqNCVFW4AX-Nqi6E&_nc_ht=scontent-ssn1-1.xx&oh=00_AT_FeA-l28dOYw38-zPBx3uHAjnyEprtlgI411PYvK_7IQ&oe=62EACB83",
          idx: 2,
          name: "슈퍼콘 민초",
          price: 1500,
        },
        {
          imgsrc:
          "https://sitem.ssgcdn.com/74/50/58/item/1000263585074_i1_232.jpg",
          idx: 3,
          name: "슈퍼콘 쿠키",
          price: 1500,
        },
        {
          imgsrc:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQdWzI8Pgbg4iabvzHp__zKkusUO1lfUSouYw&usqp=CAU",
          idx: 4,
          name: "월드콘",
          price: 1500,
        },
        {
          imgsrc:
          "https://sitem.ssgcdn.com/03/43/80/item/1000221804303_i1_232.jpg",
          idx: 5,
          name: "녹차마루",
          price: 1000,
        },
        {
          imgsrc:
          "https://thumbnail10.coupangcdn.com/thumbnails/remote/492x492ex/image/retail/images/161602778751900-6529200d-b5d1-48c2-825a-3837e891cbe9.jpg",
          idx: 6,
          name: "메로나",
          price: 1000,
        },
        {
          imgsrc:
          "https://sitem.ssgcdn.com/31/85/68/item/1000244688531_i1_232.jpg",
          idx: 1,
          name: "슈퍼콘 초코",
          price: 1500,
        },
        {
          imgsrc:
          "https://scontent-ssn1-1.xx.fbcdn.net/v/t1.6435-9/67219209_2871653329516462_2028765993114796032_n.jpg?stp=dst-jpg_p526x296&_nc_cat=109&ccb=1-7&_nc_sid=9267fe&_nc_ohc=owzfqNCVFW4AX-Nqi6E&_nc_ht=scontent-ssn1-1.xx&oh=00_AT_FeA-l28dOYw38-zPBx3uHAjnyEprtlgI411PYvK_7IQ&oe=62EACB83",
          idx: 2,
          name: "슈퍼콘 민초",
          price: 1500,
        },
        {
          imgsrc:
          "https://sitem.ssgcdn.com/74/50/58/item/1000263585074_i1_232.jpg",
          idx: 3,
          name: "슈퍼콘 쿠키",
          price: 1500,
        },
        {
            imgsrc: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQdWzI8Pgbg4iabvzHp__zKkusUO1lfUSouYw&usqp=CAU",
            idx: 4,
            name: "월드콘",
            price: 1500,
        },
        {
            imgsrc: "https://sitem.ssgcdn.com/03/43/80/item/1000221804303_i1_232.jpg",
            idx: 5,
            name: "녹차마루",
            price: 1000,
          },
        ],
      };
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
                {items.snack.map((data, index) => (
                    <ProductList imgsrc={data.imgsrc} name={data.name} price={data.price} />
                ))}
            </M.ItemsBox>
            
        </M.MainContainer>
        <Footer />
        </>
    )
}

export default Home;