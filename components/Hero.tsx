import React from 'react'

const Hero = () => {
  return (
    <div
      className='w-[100vw] h-[90vh] bg-black/80
      flex justify-center items-center 
      relative overflow-hidden -z-20'
    >
        <img src="/splash_one.jpg" className='absolute opacity-15 -z-10
        w-full h-full object-cover blur-[2px]' />
        <div className="
        max-w-max w-full justify-start items-center px-x
        mt-20">
            <div className="max-w-[800px] w-full
            flex flex-col justify-center items-start gap-y-12
            max-lg:gap-y-6
            py-6
            "> 
                <h3 className='dynamic-heading text-white'>
                  Hearts For Hope
                </h3>
                <p className='dynamic-text text-white'>
                  The Hearts for Hope Movement is a youth-lead nonprofit organization working towards raising awareness about heart disease and supporting those affected. Through promoting heart health education, 
                  CPR/AED certification, healthy lifestyle choices, and preventative measures, we aim to empower people to lead healthier lives and reduce the impact of heart disease all around the world.
                </p>
            </div>
        </div>
    </div>
  )
}

export default Hero
