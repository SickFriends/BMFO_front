import React, { useEffect } from "react";
import * as H from "./header.style"
import {AiOutlineUser} from "react-icons/ai"
import {BsCart4} from "react-icons/bs"
import { Link, useLocation } from "react-router-dom";
import { useState } from "react";

const Header = () => {
    const location = useLocation().pathname;
    const [isSnackPage, setIsSnackPage] = useState(false);
    const [isIceCreamPage, setIsIceCreamPage] = useState(false);
    const [isDrinkPage, setIsDrinkPage] = useState(false);
    const [isFrozenFoodPage, setIsFrozenFoodPage] = useState(false);
    useEffect(() => {
        if(location === "/snack"){
            setIsSnackPage(true);
            setIsDrinkPage(false);
            setIsIceCreamPage(false);
            setIsFrozenFoodPage(false);
        }
        else if(location === "/iceCream"){
            setIsSnackPage(false);
            setIsDrinkPage(false);
            setIsIceCreamPage(true);
            setIsFrozenFoodPage(false);
        } 
        else if(location === "/drink") {
            setIsSnackPage(false);
            setIsDrinkPage(true);
            setIsIceCreamPage(false);
            setIsFrozenFoodPage(false);
        }   
        else if(location === "/frozenFood"){
            setIsSnackPage(false);
            setIsDrinkPage(false);
            setIsIceCreamPage(false);
            setIsFrozenFoodPage(true);
        }
        else{
            setIsSnackPage(false);
            setIsDrinkPage(false);
            setIsIceCreamPage(false);
            setIsFrozenFoodPage(false);
        }
    }, [location]);
    return(
        <H.Header>
            <p><Link to="/">BMFO</Link></p>
            <H.CategoryBox>
            <H.Category first={true} bar={isSnackPage}><Link to="/snack">과자</Link></H.Category>
            <H.Category bar={isIceCreamPage}><Link to="/iceCream">아이스크림</Link></H.Category>
            <H.Category bar={isDrinkPage}><Link to="/drink">음료수</Link></H.Category>
            <H.Category bar={isFrozenFoodPage}><Link to="/frozenFood">냉동식품</Link></H.Category>
            <H.Category><Link to="/addProduct">식품 추가</Link></H.Category>
            </H.CategoryBox>
            <H.IconBox>
            <H.Icon firstIcon={true} onClick ={() => {localStorage.getItem("token") ? localStorage.removeItem("token") : window.location.href = "/login"}}><Link><AiOutlineUser size={40}/></Link></H.Icon>
            <H.Icon><Link to="/shoppingBasket"><BsCart4 size={40} /></Link></H.Icon>
            </H.IconBox>
        </H.Header>
    )
}

export default Header;