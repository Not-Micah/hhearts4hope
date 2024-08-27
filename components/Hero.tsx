import React from 'react'

const Hero = () => {
  return (
    <div
      className='w-[100vw] h-[85vh] bg-black/80
      flex justify-center items-center 
      relative overflow-hidden -z-20'
    >
        <img src="/hero.jpg" className='absolute opacity-40 -z-10
        w-full h-full object-cover blur-[2px]' />
        <div className="
        max-w-max w-full justify-start items-center max-lg:px-4">
            <div className="max-w-[800px] w-full
            flex flex-col justify-center items-start gap-y-4
            bg-white/80 px-4 py-6 rounded-lg
            ">
                <h3 className='dynamic-heading font-semibold font-title'>Hearts For Hope</h3>
                <p className='text-lg
                max-md:text-base max-sm:text-sm'>
                  The Hearts for Hope Movement is a youth-lead nonprofit organization working towards raising awareness about heart disease and supporting those affected. Through promoting heart health education, 
                  CPR/AED certification, healthy lifestyle choices, and preventative measures, we aim to empower people to lead healthier lives and reduce the impact of heart disease all around the world.
                </p>
                <button className='bg-primary text-white
                px-4 py-2 rounded-full'>Get Involved</button>
            </div>
        </div>
    </div>
  )
}

export default Hero
