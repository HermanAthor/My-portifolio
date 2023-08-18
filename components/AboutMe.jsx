import React from 'react'

function AboutMe() {
  return (
    <div className='flex flex-col justify-center items-center text-white  h-screen'>
        <div className='flex flex-col items-center text-5xl py-7'>
            <h1>A little about me</h1>
            <div className=' w-36 hover:w-60 bg-blue-700 h-1 mt-7'></div>
        </div>
        <div className='grid grid-cols-2 w-full'>
            <div class='flex items-center justify-center h-screen w-full'>
                <div class='w-full flex justify-center items-center bg-gray-400 rounded-full'>
                    <img class='object-contain max-w-full' src="https://images.pexels.com/photos/2769296/pexels-photo-2769296.jpeg?auto=compress&cs=tinysrgb&w=300" alt="" />
                </div>
            </div>
            <div>
                <h1 className='text-3xl'>Herman Athor</h1>
                <p className='text-xl py-4 px-2'>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus omnis ea qui facilis nulla est quis dolorem adipisci consequatur doloribus rerum accusantium placeat quo exercitationem voluptatum, quaerat maxime, cum quas?
                </p>
                <div className='flex flex-col text-lg'>
                    <h3 className=' text-2xl'>Soft Skills</h3>
                    <ul className='flex flex-col list-disc'>
                        <li>Communucation</li>
                        <li>flexibility</li>
                        <li>learning skills</li>
                        <li>Teamplayer</li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
  )
}

export default AboutMe