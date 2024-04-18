import React, { useEffect, useState } from 'react'
import { MdMenu } from "react-icons/md";

const Navbar = () => {
  const[isMenuOpen, setIsmenuOpen] = useState(false);
  

  const toggleMenu = () => {
    setIsmenuOpen(!isMenuOpen);
  }

  useEffect(() => {
    const handleScroll = () => {
      if(window.scrollY > 0){
        setIsSticky(true);
      }
    };

    window.addEventListener("scroll", handleScroll)
  },  [] )
  
  
  
  return (
   <header className='w-full fixed top-0 left-0 right-0'>
    <nav className={`py-4 md:px-8 px-4 bg-[#2A3588] `}>
    <div className='flex items-center justify-between'>
      <div className='font-bold mx-12 text-4xl cursor-pointer text-white font-mono'>
       <a href='#'>gill</a>
      </div>
      <div className='lg:flex items-center gap-3 hidden text-white text-xl'>
      <a href='#' className='block py-2 px-4'>Homepages</a>
      <a href='#' className='block py-2 px-4'>Companypages</a>
      <a href='#' className='block py-2 px-4'>Template</a>
      </div>
      <div className='lg:block'>
        <h1 className='text-white text-xl cursor-pointer '>CART</h1>
        </div>
      
      <div className='lg:block hidden'>
        <button className='px-3 py-2 mr-4 rounded-lg bg-[#ff5065] text-white text-[15px] transition-all duration-300'>PurchaseTemplate</button>
      </div>
      <button onClick={toggleMenu} className='lg:hidden text-white text-4xl mr-6'>
      <MdMenu />
      </button>
    </div>

    {isMenuOpen && (
      <div className='mt-4 bg-[#2A3588] text-white text-xl mx-12'>
        <a href='#' className='block py-2 px-4'>Homepages</a>
      <a href='#' className='block py-2 px-4'>Companypages</a>
      <a href='#' className='block py-2 px-4'>Template</a>
      <button className='px-3 py-2 mr-4 rounded-lg bg-[#ff5065] text-white text-[15px] transition-all duration-300'>PurchaseTemplate</button>
      
      </div>
      
      
    )}
    </nav>
   </header>
   
   
  )
}

export default Navbar
