import React from 'react'
import { Link,NavLink } from 'react-router-dom'



const Navbar = () => {
  return (
    <nav className='sticky top-0'>
    <div className='flex text-yellow-400 p-1.5 items-center bg-black justify-between mx-4 '>
      <div className='font-bold text-[30px]'>TODO</div>
        <ul className='flex md:gap-8 gap-1 font-semibold'> 
            <NavLink className={(e)=>{{return e.isActive?"bg-yellow-500 text-white py-1 px-2 rounded-[8px]":"bg-none"}}} to="/Home" ><li className=' flex items-center hover:cursor-pointer rounded-[8px]'>Home</li></NavLink>
            <NavLink className={(e)=>{{return e.isActive?"bg-yellow-500 text-white py-1 px-2 rounded-[8px]":"bg-none"}}} to="/Task" ><li className=' flex items-center hover:cursor-pointer rounded-[8px]'>Your Tasks</li></NavLink>
        </ul> 
    </div>
    <div className='border-b-[1px] border-gray-700'> </div>
    </nav>
  )
}

export default Navbar