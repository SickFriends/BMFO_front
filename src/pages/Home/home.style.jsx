import styled from "styled-components";

export const MainContainer = styled.div`
    width: 100%;
    height: calc(100vh - 15vh);
    margin-top: 15vh;
    img{
        height: 340px;
    }
`
// export const BannerBox = styled.div`
//     width: 100%;
//     height: 40vh;
//     background-color: blue;
//     img {
//         width: 100%;
//         height: 80%;
//     }
// `

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
    height: 7vh;
    margin:10vh 29%;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    border: 1px solid rgba(0, 0, 0, 0.25);
    border-radius: 5px;
    display: flex;
    align-items: center;
    img{
        width: 8%;
        height: 90%;
    }
`