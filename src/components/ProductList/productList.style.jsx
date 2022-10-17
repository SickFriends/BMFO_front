import styled from "styled-components";

export const ProductBox = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    margin-top: 7vh;
    height: 35vw;
    div {
        background-color: #ececec;
        width: 80%;
        height: 80%;
        display: flex;
        align-items: center;
        justify-content: center;
    }
    div img {
        width: 60%;
        height: 60%;
    }
`