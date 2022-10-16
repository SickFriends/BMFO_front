import styled from "styled-components";

export const Header = styled.div`
    background-color: #F5F5F5;
    height: 115px;
    width: 100%;
    position: fixed;
    top: 0;
    display: flex;
    align-items: center;
    justify-content: space-between;
    p {
        width: 15%;
        text-align: right;
        font-size: 34px;
        font-weight: 600;
    }
    z-index: 7;
    div {
        display: flex;
        
    }
`

export const CategoryBox = styled.div`
    width: 50%;
    display: flex;
    justify-content: space-between;
`

export const Category = styled.div`
    width: auto;
    font-size: 1.4rem;
    font-weight: bold;
    color: black;
`
export const IconBox = styled.div`
    width: 15%;
    display: flex;
    justify-content: flex-start;
`

export const Icon = styled.div`
    width: auto;
    margin-right: 25%;
`