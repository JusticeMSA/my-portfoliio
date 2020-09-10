import React from 'react';
import './Header.scss';
import logo from "./logo.png";
import {Link} from 'react-router-dom';

const Header = ({setmenuOpen, menuOpen}) =>{

    const toggleMenuHandler = () =>{
        !menuOpen ? setmenuOpen(true) : setmenuOpen(false);
    }; 

    return(
        <div className="Header">
            <div className="flex-container">
                <div className="logo">
                    <Link to="/"><img src={logo} alt="logo" /></Link>
                </div>
                <div className="navigation">
                    <div className={`nav-links ${(menuOpen) ? "menu-open" : ""}`}>
                        <ul>
                            <li>
                                <Link to="/">HOME</Link>
                            </li>
                            <li>
                                <Link to="/about">ABOUT</Link>
                            </li>
                            <li>
                                <Link to="/portfolio">PORTFOLIO</Link>
                            </li>
                            <li>
                                <Link to="/contact">CONTACT</Link>
                            </li>
                        </ul>
                    </div>
                    <div onClick={toggleMenuHandler} className="menu-btn">
                        <div></div>
                        <div></div>
                        <div></div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Header;