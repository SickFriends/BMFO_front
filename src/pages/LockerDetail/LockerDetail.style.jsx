import styled from "styled-components";

export const Layout = styled.div`
  width: 100vw;
  height: 90%;
  flex-direction: column;
  display: flex;
  align-items: center;
`;
export const Wrapper = styled.div`
  margin-top: 2%;
  width: 90%;
  height: 50%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;
export const ListItem = styled.div`
  background-color: ${(props) => props.bgcolor};
  border-radius: 10px;
  width: 20%;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1000%;
  &:hover {
    transform: translateY(-0.05em);
  }
  &:after {
    content: "";
    display: block;
    padding-bottom: 100%;
  }
  box-shadow: rgba(0, 0, 0, 0.25) 0px 14px 28px,
    rgba(0, 0, 0, 0.22) 0px 10px 10px;
`;
export const LogWrapper = styled.div`
  width: 90%;
  height: 100%;
  margin-top: 5%;
`;
export const LogItem = styled.div`
  width: 100%;
  height: 30%;
  border: 1px solid;
  display: flex;
`;
export const LogNum = styled.div`
  width: 30%;
  height: 100%;
  display: flex;
  align-items: center;
  > span {
    padding-left: 10%;
  }
`;
export const LogTime = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  justify-content: center;
`;
export const Cancle = styled.div`
  width: 10%;
  .icon {
    width: 100%;
    height: 100%;
  }
`;
export const Detail = styled.span`
  width: 100%;
  text-align: center;
  font-size: 2.5vh;
`;
