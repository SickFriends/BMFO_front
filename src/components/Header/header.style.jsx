import styled from "styled-components";

export const Header = styled.div`
    background-color: #F5F5F5;
    height: 115px;
    width: 100%;
    position: fixed;
    top: 0;
    display: flex;
    align-items: center;
    p {
        margin-left: 7%;
        font-size: 34px;
        font-weight: 600;
    }
    z-index: 7;
`
export const Category = styled.div`
    width: auto;
    font-size: 1.5vw;
    font-weight: bold;
    margin-left: ${({first}) => first ? '15%' : '4.5%'};
    color: black;
`
export const Icon = styled.div`
    width: 2.5%;
    margin-left: ${({firstIcon}) => firstIcon ? '13%' : '5%'};
`