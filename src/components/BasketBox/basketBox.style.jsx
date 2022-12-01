import styled from "styled-components";

export const ProductBox = styled.div`
  width: 99%;
  height: 200px;
  margin-top: 5%;
  display: flex;
  border: 1px solid rgba(0, 0, 0, 0.5);
`;
export const LeftBox = styled.div`
  width: 80%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
`;
export const RightBox = styled.div`
  width: 20%;
  height: 100%;
  border-left: 1px solid rgba(0, 0, 0, 0.5);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  div {
    font-size: 1.5rem;
  }
  button {
    width: 90%;
    height: 20%;
    border: 2px solid rgba(0, 0, 0, 0.5);
    border-radius: 5px;
    background-color: transparent;
  }
`;

export const ImgBox = styled.div`
  width: 30%;
  height: 80%;
  img {
    width: 100%;
    height: 100%;
  }
`;
export const NameAndPriceBox = styled.div`
  width: 35%;
  height: 80%;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  div:nth-child(1) {
    font-size: 2rem;
    font-weight: 600;
  }
  div:nth-child(2) {
    font-size: 1.5rem;
    font-weight: 600;
  }
`;
export const CountBox = styled.div`
  width: 20%;
  height: 60%;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  div:nth-child(1) {
    font-size: 1.5rem;
    font-weight: 600;
  }
  div:nth-child(2) {
    display: flex;
    width: 80%;
    justify-content: space-evenly;
    align-items: center;
  }
`;
