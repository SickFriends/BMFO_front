import styled from "styled-components";

export const Wrapper = styled.div`
    width : 100%;
    height : 100%;
    display : flex;
    flex-direction : column;
    align-items : center;
    justify-content: center;
`
export const InputContainer = styled.div`
    width : auto;
    display : flex;
    flex-direction : column;
    justify-content : space-between;
    height : auto;
    height : 35vh;
    >input{
        font-size : 120%;
        width : 25vw;
        height : 6vh;
        border-radius : 5px;
    }
`