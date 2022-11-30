import styled from "styled-components";

export const Pages = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    button{
        width: 30px;
        height: 20px;
    }
    div{
        width: 50px;
        display: flex;
        align-items: center;
    }
`

export const UserInfo = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    button{
        background-color: #5bcef5;
        color: white;
        border: none;
        width: 100px;
        border-radius: 10px;
    }
`

export const ActivatedOrder = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 10px;
    .activatedTitle{
        font-size: 30px;
    }
    .ordersContainer{
        overflow: scroll;
        scroll-snap-type: x mandatory;
        -ms-overflow-style: none;
        scrollbar-width: none;  
    }
`

export const Orders = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 10px;
    .orderTitle{
        font-size: 30px;
    }
`