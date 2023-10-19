import { useState } from 'react';
import { Link } from "react-router-dom";
import Nav from '../Navigation/Nav';
import MobileNav from '../Navigation/MobileNav';
import { BiMenu, BiMenuAltRight } from 'react-icons/bi';
import Basket from '../UI/Basket';
import { motion } from "framer-motion";


const Header = () => {
    const [menu, setMenu] = useState(false);
    
    const linksMenu = [
        {'products': 'Products'},
        {'about-us': 'About Us'},
        {'contacts': 'Contacts'}
    ]

    const toggleMenu = () => {
        setMenu(!menu);
    }

  return (
    <header>
        <div className="relative px-4 py-4 bg-slate-400 z-20">
            <div className="relative flex justify-between items-center w-full mx-auto max-w-5xl pr-8">
                <motion.div
                    initial={{ opacity: 0, scale: 0.5 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 1 }}
                >
                    <Link className='logo text-slate-600' to='/'>Dummy Shop</Link>
                </motion.div>
                <button className="block md:hidden" onClick={toggleMenu}>
                    {!menu ?
                        <BiMenu style={iconMenu} />
                        :
                        <BiMenuAltRight style={iconMenu} />
                    }
                </button>
                <Nav links={linksMenu}/>
                <motion.div className="absolute top-0 right-0 cursor-pointer" 
                    whileHover={{ scale: 1.1 }}
                >
                    <Basket />
                </motion.div>
            </div>
        </div>
        <MobileNav links={linksMenu} menu={menu}/>
    </header>
  )
}

const iconMenu = {color: "#475569", fontSize: '26px'};

export default Header