import * as P from "./productList.style"
const ProductList = (props) => {
    const purchase = () => {
        window.location.replace(`/purchase/${props.id}`);
    }
    return (
        <P.ProductBox>
            <div onClick={purchase}>
                <img src={props.imgsrc} />
            </div>
            <span style={{fontWeight : "bold", fontSize: "1.3rem"}}>{props.name}</span>
            <span>₩{props.price}</span>
        </P.ProductBox>
    )
}

export default ProductList;