import React from 'react';
import { NavLink } from "react-router-dom";

const Nav = ({links}) => {
  return (
    <nav className="hidden items-center gap-4 px-4 md:flex">
      {links.map( (link) => 
        <NavLink key={Object.keys(link)} activeclassname="activeLink" className="text-slate-600 hover:text-slate-500 font-bold ease duration-300" to={`/${Object.keys(link)}`}>{Object.values(link)}</NavLink> 
      )}
    </nav>
  )
}

export default Nav