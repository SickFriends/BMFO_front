import styled from "styled-components";

export const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  p {
    cursor: pointer;
    font-weight: bold;
    color: #426ee1;
  }
  >button{
    border-radius : 5px;
    border : none;
    font-size : 16px;
    font-weight : bold;
    margin-top : 2%;
    width : 7vw;
    height : 5vh;
  }
`;
export const InputContainer = styled.div`
  width: auto;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  height: auto;
  height: 35vh;
  > input {
    font-weight: bold;
    border: 1px solid;
    text-indent: 5%;
    font-size: 1.5vw;
    width: 25vw;
    height: 6vh;
    border-radius: 5px;
  }
  > span{
    opacity : 0.5;
    font-size : 0.8vw;
    font-weight : bold;
  }
`;
export const TextContainer = styled.div`
  display : flex;
  flex-direction : row;
  width : 25vw;
  > input {
    width: 3vw;
    height: 3vh;
  }
  >span{
    font-size : 0.5vh;
    font-weight : bold;
  }
`;
