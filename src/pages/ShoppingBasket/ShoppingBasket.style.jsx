import styled from "styled-components"

export const Container = styled.div`
    width: 80%;
    height: 90%;
    margin-left: auto;
    margin-right: auto;
    padding-top: 0;
`

export const Title = styled.div`
    margin-left: 5%;
    font-size: 300%;
    font-weight: 600;
`

export const MainBox = styled.div`
    width: 100%;
    height: auto;
    margin-top: 1%;
    display: flex;
    justify-content: space-between;
`

export const ProductList = styled.div`  
    width: 50%;
    height: auto;
    display: flex;
    flex-direction: column;
    overflow: scroll;
`

export const ButtonBox = styled.div`
    width: 38%;
    height: 70vh;
    left: 53%;
    position: fixed;
    border-left: 1px solid rgba(0, 0, 0, 0.5);
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
`

export const PayTitle = styled.div`
    font-size: 7vh;

`

export const Cost = styled.div`
    font-size: 4vh;   
`

export const Sum = styled.div`
    font-size: 4vh;
    display: flex;
    div:nth-child(1){
        color:red;
    }
`

export const SetPasswordButton = styled.button`
    border: 2px solid rgba(0, 0, 0, 0.5);
    border-radius: 5px;
    width: 167px;
    height: 59px;
    color: rgba(0, 0, 0, 0.6);
    font-weight: 700;
    font-size: 25px;
`

export const PurchaseButton = styled.button`
    border: 2px solid rgba(0, 0, 0, 0.5);
    border-radius: 5px;   
    width: 242px;
    height: 85px;
    font-size: 40px;
    color: rgba(0, 0, 0, 0.6);
    font-weight: 700;
`
