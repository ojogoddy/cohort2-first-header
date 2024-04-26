import React, { useState } from 'react'
import {MdMenu} from "react-icons/md"
import NavHolder from '../component/NavHolder'

const Header = () => {
    const [showMenu, setShowMenu] = useState(false)

    const handleMenu = () =>{
        setShowMenu(!showMenu)
        console.log(showMenu);
    }
  return (
    <div className=' bg-black text-white h-[70px] w-full'>
        <div className=" relative px-20 sm:px-5 md:px-5 flex justify-between items-center">
            
            <div className='text-[35px] font-bold hover:text-orange-300 transition-all duration-300 ease-in-out cursor-pointer'>
                Bottle
            </div>

            <nav className='sm:hidden md:hidden'>
                <ul className='flex items-center gap-[30px] cursor-pointer '>
                    <li className='hover:text-orange-300 transition-all duration-300 ease-in-out'><a href="#">Home</a></li>
                    <li className='hover:text-orange-300 transition-all duration-300 ease-in-out'><a href="#">About</a></li>
                    <li className='hover:text-orange-300 transition-all duration-300 ease-in-out'><a href="#">Service</a></li>
                    <li className='hover:text-orange-300 transition-all duration-300 ease-in-out'><a href="#">Contact</a></li>
                </ul>
            </nav>
            {showMenu && (
                <NavHolder/>
            )}

            <div className=' md:hidden sm:hidden'>
                <button className='mr-[10px] border rounded-xl px-5 py-1'>login</button>
                <button className='border rounded-xl px-5 py-1 bg-orange-300 text-black border-orange-300'>Register</button>
            </div>
            <div onClick={handleMenu} className='text-3xl hidden sm:block md:block '>
                <MdMenu/>
            </div>
        </div>
    </div>
  )
}


export default Header