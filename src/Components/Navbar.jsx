import React from 'react'


const Navbar = () => {
  return (
    <nav className='fixed w-full h-[60px] flex items-center bg-[#2A3588] p-7'>
        <div className=' text-white font-extrabold text-4xl font-serif mx-10 cursor-pointer'>
          gill
        </div>
        <div class="border-l border-gray-600 h-[45px]"></div>

        <div>
          <ul className='mx-10 flex justify-between items-center gap-10'>
            <li className='text-xl text-white cursor-pointer'>Homepages</li>
            <li className='text-xl text-white cursor-pointer'>Companypages</li>
            <li className='text-xl text-white cursor-pointer'>Template</li>
          </ul>
        </div>
        
    </nav>
    
  )
}

export default Navbar