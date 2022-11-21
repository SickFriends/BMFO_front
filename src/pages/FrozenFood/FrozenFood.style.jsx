import styled from "styled-components";

export const MainContainer = styled.div`
    width: 100%;
    height: auto;
    margin-top: 115px;
    img{
        height: 380px;
    }
`

export const Input = styled.input`
    :focus{
        outline: none;
    }
    font-size: 3vh;
    padding-left: 10px;
    width: 89%;
    height: 90%;
    border: none;
    border-radius: 5px;
`

export const InputBox = styled.div`
    width: 40%;
    height: 8vh;
    margin: 6vh 29% 0 29%;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    border: 1px solid rgba(0, 0, 0, 0.25);
    border-radius: 5px;
    display: flex;
    align-items: center;
    img{
        width: 10%;
        height: 100%;
    }
`
export const ItemsBox = styled.div`
    width: 100%;
    height: auto;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    div span {
        margin-top: 10px;
    }
`