import styled from "styled-components";

export const Header = styled.div`
    background-color: #F5F5F5;
    height: 15vh;
    width: 100%;
    position: fixed;
    top: 0;
    display: flex;
    align-items: center;
    p {
        margin-left: 8%;
        font-size: 40px;
        font-weight: 600;
    }
    z-index: 7;
`
export const Category = styled.div`
    font-size: 120%;
    font-weight: bold;
    margin-left: ${({first}) => first ? '15%' : '4.5%'};
`
export const Icon = styled.div`
    width: 2.5%;
    margin-left: ${({firstIcon}) => firstIcon ? '13%' : '5%'};
`