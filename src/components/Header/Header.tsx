import React, { useState } from 'react';
import s from './Header.module.css'
import { IoIosArrowDown } from "react-icons/io";
import { LuShoppingBag } from "react-icons/lu";
import { RiGlobalLine } from "react-icons/ri";
import { CiSearch } from "react-icons/ci";
import srcLogo from './images/Icon_drone.png'
import svg from '../../assets/sprite.svg'
import { Link } from 'react-router-dom';
const Header = () => {


    return (
        <header className={s.header}>
            <nav className={s.list}>
                <button className={s.buttons}>Products <span className={s.arrowDown}><IoIosArrowDown size={20} /></span></button>
                
                <button className={s.buttons}>Company <span className={s.arrowDown}><IoIosArrowDown size={20} /></span></button>

                <button className={s.buttons}>Solutions <span className={s.arrowDown}><IoIosArrowDown size={20} /></span></button>
            </nav>

            <Link to='home-page'>
                <div className={s.logo}>
                    <img className={s.logoDron} src={srcLogo} alt="Logo-dron" />
                    <svg className={s.header_logo}>
                        <use xlinkHref={`${svg}#icon-logo`} />
                    </svg>
                </div>
            </Link>


            <div className={s.btnAll}>
                <button className={`${s.buttons} ${s.btnSearch}`}><span className={`${s.arrowDown} ${s.arrSearch}`}><CiSearch size={20} /></span></button>
                <button className={`${s.buttons} ${s.btnGlobalLine}`}><span className={`${s.arrowDown} ${s.arrSearch}`}><RiGlobalLine size={20} /></span></button>
                <button className={`${s.buttons} ${s.btnShoppingBag}`}>Cart <span className={s.arrowDown}><LuShoppingBag size={20} /></span></button>
            </div>
        </header>
    );
};

export default Header;
