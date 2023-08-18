import { skillsData } from '@/Data/skillsData'
import React from 'react'

function Skills() {
  return (
    <div>
        <div className='flex justify-center items-center mt-0 mb-7'>
            <h1 className='text-3xl'>Technical Skills</h1>
        </div>
        <div className='grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2 container p-20'>
            {skillsData.map((data)=>{
                const {title, img, message,id} = data
                return(
                    <div key={id}>
                        <div className="lg:w-full lg:mb-0 mb-6 p-4 w-full border-2 border-slate-500 rounded-3xl hover:bg-gray-900">
                            <div className="h-full text-center">
                            <img
                                alt="testimonial"
                                className="w-40 h-40 mb-8 object-contain object-center rounded-full inline-block border-2 border-gray-200 bg-gray-100"
                                src={img}
                            />
                            <p className="leading-relaxed">{message}</p>
                            
                            <p className="text-white">{title}</p>
                            </div>
                        </div>
                    </div>
                )
            })}
        </div>
    </div>
  )
}

export default Skills