import Header from "../../components/Header"
import * as M from "./home.style"
import { Carousel } from "react-responsive-carousel"
import "react-responsive-carousel/lib/styles/carousel.min.css";
const Home = () => {
    return (
        <>
        <Header />
        <M.MainContainer>
            <Carousel dynamicHeight={false} showThumbs={false} showIndicators={false}>
                <img src="maple.jpg" />
                <img src="bannerex.jpg" />
            </Carousel>
            <M.InputBox>
                <M.Input />
                <img src="magnifier 1.png" />
            </M.InputBox>
        </M.MainContainer>
        </>
    )
}

export default Home;