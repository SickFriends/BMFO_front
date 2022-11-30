import styled from "styled-components";

export const OrdersBox = styled.div`
    width: 200px;
    height: 200px;
    display: flex;
    flex-direction: column;
    align-items: center;
    border: 0.5px solid black;
    div{
        display: flex;
        align-items: center;
        justify-content: center;
    }
    .bottomBox{
        width: 100%;
        height: 20%;
        background-color: #5bcef5;
    }
`