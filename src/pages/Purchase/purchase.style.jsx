import styled from "styled-components";

export const container = styled.div`
    width: 70%;
    height: 65%;
    margin-left: auto;
    margin-right: auto;
    margin-top: 12%;
    display: flex;
    justify-content: space-between;
`

export const imgBox = styled.div`
    background-color: #ECECEC;
    width: 40%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    align-self: center;
    img {
        width: 60%;
        height: 60%;

    }
`

export const saleBox = styled.div`
    width: 50%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
`

export const titleBox = styled.div`
    font-size: 300%;
    font-weight: bold;
    margin-top: 5%;
`

export const priceBox = styled.div`
    font-size: 250%;
    font-weight: 600;
    margin-top: 5%;
`

export const count = styled.div`
    margin-top: 12%;
    font-weight: 600;
    font-size: 150%;
`

export const IncDec = styled.div`
    display: flex;
    width: 30%;
    justify-content: space-evenly;
    div {
        font-weight: 600;
    }
    margin-top: 3%;
`

export const buttons = styled.div`
    width: 60%;
    display: flex;
    justify-content: space-between;
    margin-top: 16%;
    button{
        width: 40%;
        height: 130%;
        background-color: white;
        font-size: 120%;
        border: 2px solid rgba(0, 0, 0, 0.5);
        border-radius: 5px;
    }
`