import * as S from "./ShoppingBasket.style"

const ShoppingBasket = () => {
    return (
        <S.Container>
            <S.Title>장바구니</S.Title>
            <S.MainBox>
                <S.ProductList></S.ProductList>
            </S.MainBox>
        </S.Container>
    )
}

export default ShoppingBasket;