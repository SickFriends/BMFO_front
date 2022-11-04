import styled from "styled-components";
export const container = styled.div`
    width: 70%;
    height: 80%;
    margin-left: auto;
    margin-right: auto;
    display: flex;
    justify-content: space-between;
    padding-top: 5%;
`

export const imgBox = styled.div`
    background-color: #ECECEC;
    width: 45%;
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
    justify-content: space-evenly;
`

export const titleBox = styled.div`
    font-size: 300%;
    font-weight: bold;
`

export const priceBox = styled.div`
    font-size: 250%;
    font-weight: 600;
`

export const count = styled.div`
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
`

export const buttons = styled.div`
    width: 60%;
    display: flex;
    justify-content: space-between;
    
    button{
        width: 40%;
        height: 130%;
        background-color: #5bcef5;
        color : white;
        font-size: 120%;
        border : none;
        border-radius: 5px;
        font-weight: 600;
    }
`