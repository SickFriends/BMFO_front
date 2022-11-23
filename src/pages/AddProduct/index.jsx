import axios from "axios";
import { useState } from "react";
import * as A from "./AddProduct.style";

const AddProduct = () => {
    const [name, setName] = useState('');
    const [price, setPrice] = useState('');
    const [imageSrc, setImageSrc] = useState('');
    const [img, setImg] = useState();
    const [category, setCategory] = useState('snack');
    const encodeFileToBase64 = (fileBlob) => {
        const reader = new FileReader();
        setImg(fileBlob);
        reader.readAsDataURL(fileBlob);
        return new Promise((resolve) => {
          reader.onload = () => {
            setImageSrc(reader.result);
            resolve();
          };
        });
      };
    const addProduct = async() => {
        const form = new FormData();
        form.append("name", name);
        form.append("img", img);
        form.append("price", price);
        form.append("category", category);
        await axios.post("http://127.0.0.1:8080/product/addProduct", form)
        .then(res => {
            console.log("성공");
        })
        .catch(err => {
            console.log(err);
        })
    }
    return (
        <A.Container>
            <A.title>상품추가</A.title>
            <input type={"file"} onChange={(e) => {
                    encodeFileToBase64(e.target.files[0]);
                }}/>
            <A.AddBox>
                <A.ImgBox>
                {imageSrc && <img src={imageSrc} alt="preview-img" />}
                </A.ImgBox>
                
                <A.InfoBox>
                    <A.InputBox>
                        <input placeholder="상품이름" type="text" value={name} onChange={(e) => {
                            setName(e.target.value);
                        }} />
                        <input placeholder="가격" type="text" value={price} onChange={(e) => {
                            setPrice(e.target.value);
                        }} />
                        <select onChange={(e) => {
                        setCategory(e.target.value);
                        }}>
                            <option value={"snack"}>과자</option>
                            <option value={"icecream"}>아이스크림</option>
                            <option value={"frozenfood"}>냉동식품</option>
                            <option value={"drink"}>음료수</option>
                        </select>
                    </A.InputBox>
                    
                    <A.Button onClick={addProduct}>추가하기</A.Button>
                </A.InfoBox>
            </A.AddBox>
        </A.Container>
    )
}

export default AddProduct;