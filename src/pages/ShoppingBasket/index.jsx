import BasketBox from "../../components/BasketBox";
import * as S from "./ShoppingBasket.style"

const ShoppingBasket = () => {
    const productList = [
        {
            name: "새우깡",
            imgsrc:
            "https://sitem.ssgcdn.com/00/00/76/item/1000010760000_i1_1200.jpg",
            price: 1200,
            num: 2
        },
        {
            name: "새우깡",
            imgsrc:
            "https://sitem.ssgcdn.com/00/00/76/item/1000010760000_i1_1200.jpg",
            price: 1200,
            num: 2
        },
        {
            name: "새우깡",
            imgsrc:
            "https://sitem.ssgcdn.com/00/00/76/item/1000010760000_i1_1200.jpg",
            price: 1200,
            num: 2
        }
        ,
        {
            name: "새우깡",
            imgsrc:
            "https://sitem.ssgcdn.com/00/00/76/item/1000010760000_i1_1200.jpg",
            price: 1200,
            num: 2
        }
        ,
        {
            name: "새우깡",
            imgsrc:
            "https://sitem.ssgcdn.com/00/00/76/item/1000010760000_i1_1200.jpg",
            price: 1200,
            num: 2
        }
        ,
        {
            name: "새우깡",
            imgsrc:
            "https://sitem.ssgcdn.com/00/00/76/item/1000010760000_i1_1200.jpg",
            price: 1200,
            num: 2
        }
        ,
        {
            name: "새우깡",
            imgsrc:
            "https://sitem.ssgcdn.com/00/00/76/item/1000010760000_i1_1200.jpg",
            price: 1200,
            num: 2
        }
    ]
    return (
        <S.Container>
            <S.Title>장바구니</S.Title>
            <S.MainBox>
                <S.ProductList>
                    {productList.map((data, index) => <BasketBox data={data} index={index} /> )}
                </S.ProductList>
                <S.ButtonBox>

                </S.ButtonBox>
            </S.MainBox>
        </S.Container>
    )
}

export default ShoppingBasket;