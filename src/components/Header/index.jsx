import React from "react";
import * as H from "./header.style"

const Header = () => {
    return(
        <H.Header>
            <p>BMFO</p>
            <H.Category first={true}>과자</H.Category>
            <H.Category>아이스크림</H.Category>
            <H.Category>음료수</H.Category>
            <H.Category>냉동식품</H.Category>
            <H.Category>식품 추가</H.Category>
            <H.Icon firstIcon={true}><img style={{width : "100%"}} src="user 1.png" /></H.Icon>
            <H.Icon><img style={{width : "100%"}} src="shopping-cart 1.png" /></H.Icon>
        </H.Header>
    )
}

export default Header;