import * as P from "./productList.style"
const ProductList = (props) => {
    return (
        <P.ProductBox>
            <div>
                <img src={props.imgsrc} />
            </div>
            <span style={{fontWeight : "bold", fontSize: "1.3rem"}}>{props.name}</span>
            <span>₩{props.price}</span>
        </P.ProductBox>
    )
}

export default ProductList;