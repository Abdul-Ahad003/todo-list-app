import React, { useState } from 'react'
import Home from './assets/components/Home';
import Navbar from './assets/components/Navbar';
import { Navigate } from 'react-router-dom';




function App() {

  const [go, setgo] = useState(false)

  let m = () => { setgo(true) }

  return (
    <>
    <div className=' text-white flex flex-col  justify-center items-center md:py-[50vh] gap-3'> < p className=' md:text-[30px]  text-[22px] font-bold '>Welcome to TODO</p> 
    <button onClick={m} className=' bg-yellow-500 text-white font-semibold w-fit px-5 py-1.5 rounded-full'> Go to TODO </button>
    { go && <Navigate to="/Home" replace={true} /> }
    </div>
    </>
  )
}

export default App
