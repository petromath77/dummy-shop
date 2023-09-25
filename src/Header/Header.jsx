import React, { useState } from 'react';
import { AiFillShop } from 'react-icons/ai';
import { NavLink } from "react-router-dom";
import Nav from '../Navigation/Nav';
import MobileNav from '../Navigation/MobileNav';
import { BiMenu, BiMenuAltRight } from 'react-icons/bi';

const Header = () => {
    const [menu, setMenu] = useState(false);

    const toggleMenu = () => {
        setMenu(!menu);
    }

  return (
    <header>
        <div className="relative px-4 py-4 bg-slate-400 z-20">
            <div className="flex justify-between w-full mx-auto max-w-5xl ">
                <NavLink to='/'>
                    <AiFillShop style={icon}/>
                </NavLink>
                <button className="block md:hidden" onClick={toggleMenu}>
                    {!menu ?
                        <BiMenu style={iconMenu} />
                        :
                        <BiMenuAltRight style={iconMenu} />
                    }
                </button>
                <Nav/>
            </div>
        </div>
        <MobileNav menu={menu}/>
    </header>
  )
}

const icon = {color: "#475569", fontSize: '32px'};
const iconMenu = {color: "#475569", fontSize: '26px'};

export default Header