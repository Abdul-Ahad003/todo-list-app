import React from 'react'


const Navbar = () => {
  return (
    <nav className='sticky top-0 bg-black'>
    <div className='flex text-yellow-400 md:px-7 md:py-1.5 p-1.5 items-center bg-black justify-between mx-4 '>
      <div className='font-bold text-[30px]'>TODO</div>
        <ul className='flex md:gap-8 gap-1 font-semibold'> 
            <a href='https://github.com/Abdul-Ahad003' target='_blank'> <img  className=' w-9 h-9' src='./github.svg' alt='github'/> </a>
        </ul> 
    </div>
    <div className='border-b-[1px] border-gray-700'> </div>
    </nav>
  )
}

export default Navbar