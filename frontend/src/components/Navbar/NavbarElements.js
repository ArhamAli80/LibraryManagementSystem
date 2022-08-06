import styled from "styled-components";
import {NavLink as Link} from 'react-router-dom'
import {FaBars} from 'react-icons/fa'

export const Nav = styled.nav`
    background: #FFF;
    height: 100px;
    -webkit-box-shadow: 0px 0px 14px 0px rgba(0,0,0,0.75);
	-moz-box-shadow: 0px 0px 14px 0px rgba(0,0,0,0.75);
	box-shadow: 0px 0px 14px 0px rgba(0,0,0,0.75);
    display: flex;
    justify-content: space-between;
    padding: 0.5rem calc(100vw - 1000px)/2);
    z-index:10;
`;

export const NavLink=styled(Link)`
    color:#000;
    display:flex;
    margin: left;
    align-items:center;
    text-decoration:none;
    padding:0.8rem;
    height:100%;
    cursor:pointer;
    
    &.active{
        color: #1582FC;
    }
`;

export const Bars=styled(FaBars)`
    display:none;
    color:#000;

    @media screen and(max-width:768px){
        display:block;
        position:absolute;
        top:0;
        right:0;
        transform:translate(-100%,75%);
        font-size:1.8rem;
        cursor:pointer;
    }
`;

export const NavMenu = styled.div`
    display: flex;
    align-items: center;
    margin-right: auto;

    @media screen and (max-width: 768px){
        display: none;
    }
`;

export const NavBtn = styled.nav`
    display: flex;
    padding-left: 3vh;
    align-items: center;
    margin-right: 24px;

    @media screen and (max-width: 768px){
        display: none;
    }
`;

export const NavBtnLink = styled(Link)`
    border-radius: 4px;
    background: #256ce1;
    padding: 10px 22px;
    color: #fff;
    border: none;
    cursor: pointer;
    transition: all 0.2s ease-in-out;
    text-decoration: none;

    &:hover{
        transition: all 0.2s ease-in-out;
        background: #fff;
        color: #010606;
    }
`;