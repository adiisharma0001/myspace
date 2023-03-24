import { Link } from 'react-router-dom'
import React, { useState } from 'react'
import styled from "styled-components"
export default function Header() {
    const [menu, setMenu] = useState(false)
    const handleClick = () => {
        if (menu == true) {
            setMenu(false)
        } else {
            setMenu(true)
        }
    }
    return (
        <Wrapper className='active'>
            <div className="logo">
                <sapn className='logo-text'>Aditya Sharma</sapn>
            </div>
            <button onClick={handleClick} className='btn'>
                <img className='img' src="logo.svg" alt="" />
            </button>
            <ul className={menu == true ? "active" : "deactive"}>
                <li className="nav-item p-2 py-3">
                    <Link  to="home">Home</Link>
                </li>
                <li className="nav-item p-2 py-3">
                    <Link  to="scholarship">Scholarship</Link>
                </li>
                <li className="nav-item p-2 py-3">
                    <Link  to="examregistration">Exam Regestration</Link>
                </li>
                <li className="nav-item p-2 py-3">
                    <Link  to="sportsregistration">Sports Regestration</Link>
                </li>
                <li className="nav-item p-2 py-3">
                    <Link  to="paybills">Pay Bills</Link>
                </li> 
                <li className="nav-item p-2 py-3">
                    <Link  to="takeinsurance">Take Insurance</Link>
                </li>
                <li className="nav-item p-2 py-3">
                    <Link  to="booktickets">Book Tickets</Link>
                </li>
                <li className="nav-item p-2 py-3">
                    <Link  to="getmorehelp">Get Help</Link>
                </li>
                <li className="nav-item p-2 py-3">
                    <Link  to="latestnews">Latest News</Link>
                </li>
                <li className="nav-item p-2 py-3">
                    <Link  to="login" role="button">Log In</Link>
                </li>
                <li className="nav-item p-2 py-3">
                    <Link  to="signin">Sign In</Link>
                </li>
            </ul>
        </Wrapper>
    )
}

const Wrapper = styled.div`
background: #302e2e;
display: flex;
position: fixed;
width: 100%;

@media(max-width: 900px){
    flex-direction: column;
}

.logo{
    display: inline-flex;
    color:white;
    padding: 20px;
}

ul{
    list-style:none;
    display: inline-flex; 
}

@media(max-width: 900px){
    .active{ 
        display: flex;
        flex-direction: column;
        align-items: start;
        
    }
    .deactive{
        display: none;
    }
}

li{
    padding: 10px 20px;
    :hover{color: white;} 
}
a{
    text-decoration: none;
    color: #d0d0d0;
}

.btn{
    position: absolute;
    right: 0px;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 55px;
    height: 20px;
    background: black;
    margin: 10px;
    padding: 20px 0px;
    border-radius: 5px;
    display: none;

    @media(max-width: 900px){
        display: flex;
    }
}
.img{
   filter: invert(0.8);
   width: 30px;   
}
`
