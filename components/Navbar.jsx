'use client'
import React, { useState } from 'react'
import MenuIcon from '@mui/icons-material/Menu';
import { Button } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  console.log(isOpen)
  const handleClose = ()=>{
    setIsOpen((prev)=> !prev)
    console.log(isOpen)
  }
  return (
    <>
      <nav  className='flex justify-between items-center px-4 py-4'>
          <h2 className=' text-3xl'>Athor</h2>
          <div className='md:hidden'>
            { isOpen ? <Button onClick={() => handleClose()} variant='outlined'> <CloseIcon/> </Button>: <Button onClick={() => handleClose()} variant='outlined'> <MenuIcon/> </Button>}
          </div>
          <ul className='flex justify-between items-center md:gap-5 gap-3 font-serif font-semibold max-sm:hidden'>
              <li className=' hover:underline'>About</li>
              <li className=' hover:underline'>Skills</li>
              <li className=' hover:underline'>Projects</li>
              <li className=' hover:underline'>contact</li>
          </ul>
      </nav>
      { isOpen &&
        <div className='relative'>
          <nav  className='flex justify-between items-center  md:hidden absolute top-0 left-0'>
            
              <ul className='flex justify-between flex-col items-center md:gap-5 gap-3 font-serif font-semibold bg-gray-700 py-5 px-8 rounded-3xl relative'>
                  <li onClick={()=> setIsOpen(false)}   className=' hover:underline mt-7'>About</li>
                  <li onClick={()=> setIsOpen(false)}  className=' hover:underline'>Skills</li>
                  <li onClick={()=> setIsOpen(false)}  className=' hover:underline'>Projects</li>
                  <li onClick={()=> setIsOpen(false)}  className=' hover:underline'>contact</li>
                  <div className='absolute top-0 right-0 m-2'>
                    <button onClick={()=> setIsOpen(false)}  className=' bg-slate-500 px-2 rounded-full hover:bg-red-400'><CloseIcon fontSize='small'/></button>
                  </div>
              </ul>
          </nav>
        </div>
      }
    </>
  )
}

export default Navbar