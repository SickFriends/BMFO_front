import * as A from "./activatedOrders.style"


const ActivatedOrder = (props) => {
    return(
    <A.OrdersBox>
        <div>락커아이디</div>
        <div>{props.data.lockerId}</div>
        <div>주문번호</div>
        <div>{props.data.orderId}</div>
        <div>비밀번호</div>
        <div>{props.data.password}</div>
        <div className="bottomBox"></div>
    </A.OrdersBox>
    )
}

export default ActivatedOrder;