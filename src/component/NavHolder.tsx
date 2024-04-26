import React from 'react'

const NavHolder = () => {
  return (
    <nav className='fixed bg-black w-full h-[calc(100vh-70px)] top-[70px] left-[100px]'>
                <ul className='flex flex-col items-center gap-[30px] cursor-pointer mt-6 '>
                    <li className='hover:text-orange-300 transition-all duration-300 ease-in-out'><a href="#">Home</a></li>
                    <li className='hover:text-orange-300 transition-all duration-300 ease-in-out'><a href="#">About</a></li>
                    <li className='hover:text-orange-300 transition-all duration-300 ease-in-out'><a href="#">Service</a></li>
                    <li className='hover:text-orange-300 transition-all duration-300 ease-in-out'><a href="#">Contact</a></li>
                </ul>
                <div className=' flex flex-col  mt-[30px] '>
                <button className=' border rounded-xl px-5 py-1 mb-[20px] w-[100px] mx-auto'>login</button>
                <button className='border rounded-xl px-5 py-1 bg-orange-300 text-black mx-auto border-orange-300 w-[100px]'>Register</button>
            </div>
            </nav>
  )
}

export default NavHolder