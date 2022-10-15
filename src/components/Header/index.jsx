import React from "react";
import * as H from "./header.style"
import {AiOutlineUser} from "react-icons/ai"
import {BsCart4} from "react-icons/bs"
import { Link } from "react-router-dom";

const Header = () => {
    return(
        <H.Header>
            <p><Link>BMFO</Link></p>
            <H.Category first={true}><Link>과자</Link></H.Category>
            <H.Category><Link>아이스크림</Link></H.Category>
            <H.Category><Link>음료수</Link></H.Category>
            <H.Category><Link>냉동식품</Link></H.Category>
            <H.Category><Link>식품 추가</Link></H.Category>
            <H.Icon firstIcon={true}><Link><AiOutlineUser size={40}/></Link></H.Icon>
            <H.Icon><Link><BsCart4 size={40} /></Link></H.Icon>
        </H.Header>
    )
}

export default Header;