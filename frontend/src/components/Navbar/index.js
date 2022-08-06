import React from 'react'
import { BiBasket } from "react-icons/bi"
import {  AiOutlineHome } from "react-icons/ai"
import { BsPeople } from "react-icons/bs"
import { HiOutlineMail } from "react-icons/hi"
import {Nav, NavLink, Bars, NavMenu, NavBtn, NavBtnLink} from './NavbarElements'

const Navbar=()=>{
    return(
        <>      
        <Nav>
            <NavLink to="/">
            <h1 className='site-title'>Online Book Store</h1>
            </NavLink>
            <Bars/>
            <NavBtn>
            <Bars />
            <NavMenu>
                <NavLink to="/"activeStyle ><AiOutlineHome size="1.5em" />
                    &nbsp;Home
                </NavLink>
                <NavLink to="/about"activeStyle><BsPeople size="1.5em" />
                    &nbsp;About
                </NavLink>
                <NavLink to="/basket"activeStyle><BiBasket size = "1.5em" />
                    &nbsp;Basket
                </NavLink>
                <NavLink to="/contact-us"activeStyle><HiOutlineMail size="1.5em" />
                    &nbsp;Contact Us&nbsp;&nbsp;&nbsp;
                </NavLink>
            </NavMenu>
                <NavBtnLink to="signin"> Log in</NavBtnLink>
            </NavBtn>
        </Nav> 
        </>
    ); 
};

export default Navbar;