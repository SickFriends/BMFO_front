import { useState } from "react";
import * as A from "./AddProduct.style";

const AddProduct = () => {
    const [name, setName] = useState('');
    const [price, setPrice] = useState('');
    return (
        <A.Container>
            <A.title>상품추가</A.title>
            <A.AddBox>
                <A.ImgBox>
                이미지 삽입
                </A.ImgBox>
                <A.InfoBox>
                    <A.InputBox>
                        <input placeholder="상품이름" type="text" value={name} onChange={(e) => {
                            setName(e.target.value);
                        }} />
                        <input placeholder="가격" type="text" value={price} onChange={(e) => {
                            setPrice(e.target.value);
                        }} />
                    </A.InputBox>
                    <A.Button>추가하기</A.Button>
                </A.InfoBox>
            </A.AddBox>
        </A.Container>
    )
}

export default AddProduct;