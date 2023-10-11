import React, { useState } from 'react';
import { AiFillShop } from 'react-icons/ai';
import { NavLink } from "react-router-dom";
import Nav from '../Navigation/Nav';
import MobileNav from '../Navigation/MobileNav';
import { BiMenu, BiMenuAltRight } from 'react-icons/bi';
import Basket from '../UI/Basket';


const Header = () => {
    const [menu, setMenu] = useState(false);
    
    const linksMenu = [
        {'men-clothing': 'Men\'s Clothing'},
        {'woman-clothing': 'Woman\'s Clothing'},
        {'electronics': 'Electronics'},
        {'jewelery': 'Jewelery'}
    ]

    const toggleMenu = () => {
        setMenu(!menu);
    }

  return (
    <header>
        <div className="relative px-4 py-4 bg-slate-400 z-20">
            <div className="relative flex justify-between items-center w-full mx-auto max-w-5xl pr-8">
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
                <Nav links={linksMenu}/>
                <Basket />
            </div>
        </div>
        <MobileNav links={linksMenu} menu={menu}/>
    </header>
  )
}

const icon = {color: "#475569", fontSize: '32px'};
const iconMenu = {color: "#475569", fontSize: '26px'};

export default Header