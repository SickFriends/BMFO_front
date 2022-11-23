import styled from "styled-components";

export const Container = styled.div`
    width: 70%;
    height: 90%;
    margin-left: auto;
    margin-right: auto;
    padding-top: 3%;
`

export const title = styled.div`
    font-size: 2.5rem;
    height: 10%;
    font-weight: 600;
`

export const AddBox = styled.div`
    width: 100%;
    height: 88%;
    display: flex;
    justify-content: space-between;
`

export const ImgBox = styled.div`
    width: 40%;
    height: 90%;
    background-color: #ECECEC;
    align-self: center;
    display: flex;
    align-items: center;
    justify-content: center;
    img{
        width: 100%;
        height: 100%;
    }
`

export const InfoBox = styled.div`
    width: 50%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    
`

export const InputBox = styled.div`
    width: 100%;
    height: 50%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    input{
        width: 70%;
        height: 25%;
        border: 1px solid rgba(0, 0, 0, 0.5);
        border-radius: 5px;
        font-size: 150%;
        filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
        :focus{
            outline: none;
        }
        padding-left: 10px;
        ::placeholder{
            font-weight: 600;
            line-height: 100%;
        }
    }
    select{
        width: 70%;
        height: 25%;
        border: 1px solid rgba(0, 0, 0, 0.5);
        border-radius: 5px;
        font-size: 150%;
        filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
    }
`
export const Button = styled.button`
    width: 40%;
    height: 12%;
    margin-top: 12%;
    font-size: 200%;
    color : white;
    background-color: #5bcef5;
    border: none;
    border-radius: 5px;
    font-weight: 600;
`