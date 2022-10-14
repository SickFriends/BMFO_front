import React from "react";
import * as H from "./header.style"
import {AiOutlineUser} from "react-icons/ai"
import {BsCart4} from "react-icons/bs"

const Header = () => {
    return(
        <H.Header>
            <p>BMFO</p>
            <H.Category first={true}>과자</H.Category>
            <H.Category>아이스크림</H.Category>
            <H.Category>음료수</H.Category>
            <H.Category>냉동식품</H.Category>
            <H.Category>식품 추가</H.Category>
            <H.Icon firstIcon={true}><AiOutlineUser size={40}/></H.Icon>
            <H.Icon><BsCart4 size={40} /></H.Icon>
        </H.Header>
    )
}

export default Header;