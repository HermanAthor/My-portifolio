"use client"
import Image from 'next/image'
import React from 'react'
import TwitterIcon from '@mui/icons-material/Twitter'
import FacebookIcon from '@mui/icons-material/Facebook'
import InstagramIcon from '@mui/icons-material/Instagram'
import LinkedInIcon from '@mui/icons-material/LinkedIn'
import { Avatar } from '@mui/material'

function Hero() {
  return (
    <div className='grid grid-cols-2  w-full h-[100vh]'>
      <div className=''>
        <div className='w-full text-white flex justify-center items-center h-screen flex-col'>
            <h1 className='text-2xl '>Hi I'm</h1>
            <h1 className=' text-7xl'>Herman Athor</h1>
            <p className='px-3 mt-4 mb-4'>
              I am a front End Developer based in Copenhagen,Denmark I build things for the web, I enjoy working on a every aspect of web development to give user the best experience when they visit your site.
            </p>
            <button className='bg-white text-black font-semibold px-4 py-2 border border-blue-500 mt-6'>Reseme</button>
            <div className='mt-8 space-x-4'>
              <TwitterIcon className=' hover:bg-blue-400 cursor-pointer'/>
              <FacebookIcon  className=' hover:bg-blue-400 cursor-pointer'/>
              <InstagramIcon  className=' hover:bg-blue-400 cursor-pointer'/>
              <LinkedInIcon  className=' hover:bg-blue-400 cursor-pointer'/>
            </div>
        </div>
      </div>
      <div className='flex h-screen justify-center items-center'>
        <div className='w-[500px] h-[500px] flex items-center justify-center bg-gray-400 rounded-3xl'>
            <Avatar
              src={'https://images.pexels.com/photos/2769296/pexels-photo-2769296.jpeg?auto=compress&cs=tinysrgb&w=300'}
              alt="Herman Athor"
              className='object-contain w-full h-full'
            />
        </div>
      </div>
    </div>
  )
}

export default Hero