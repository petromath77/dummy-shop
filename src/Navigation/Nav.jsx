import React from 'react';
import { NavLink } from "react-router-dom";

const Nav = () => {
  return (
    <nav className="hidden items-center gap-4 px-4 md:flex">
        <NavLink activeclassname="activeLink" className="text-slate-600 hover:text-slate-500 font-bold ease duration-300" to='/men-clothing'>Men's Clothing</NavLink> 
        <NavLink activeclassname="activeLink" className="text-slate-600 hover:text-slate-500 font-bold ease duration-300" to='/woman-clothing'>Woman's Clothing</NavLink> 
        <NavLink activeclassname="activeLink" className="text-slate-600 hover:text-slate-500 font-bold ease duration-300" to='/electronics'>Electronics</NavLink> 
        <NavLink activeclassname="activeLink" className="text-slate-600 hover:text-slate-500 font-bold ease duration-300" to='/jewelery'>Jewelery</NavLink> 
    </nav>
  )
}

export default Nav