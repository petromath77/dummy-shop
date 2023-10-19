import React from 'react'
import { NavLink } from "react-router-dom";

const MobileNav = ({menu, links}) => {
  return (
    <div className='flex md:hidden'>
        <nav style={bg} className={!menu ? "-translate-y-[110%] absolute top-16 left-0 flex flex-col items-start w-full gap-4 px-4 py-8 ease duration-500 z-10" : "absolute top-16 left-0 flex flex-col items-start w-full gap-4 px-4 py-8 ease duration-500 z-10"}>
          {links.map( (link) => 
            <NavLink key={Object.keys(link)} activeclassname="activeLink" className="text-slate-600 hover:text-slate-500 font-bold ease duration-300" to={`/${Object.keys(link)}`}>{Object.values(link)}</NavLink> 
          )}
        </nav>
    </div>
  )
}

const bg = {background: "#c2c7d0"}

export default MobileNav