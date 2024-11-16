import React from 'react'

const MissionStatement = () => {
  return (
    <div className="flex flex-col gap-y-4">
      <div className="w-[100vw] h-[300px] relative overflow-hidden">
        <img src="/splash_one.jpg" className='w-full h-full object-cover brightness-50 blur-[2px]'/>
        <h3 className='dynamic-subheading text-white
        absolute left-[50px] top-1/2 transform -translate-y-1/2
        max-lg:left-x'>What are we about?</h3>
      </div>
      <div className="max-w-max mx-auto w-full my-24
      max-lg:my-8
      px-x py-8 flex flex-col justify-start items-start gap-y-8">
        <h3 className='dynamic-subheading'>Our Mission</h3>
        <p className='text-xl
        max-w-[800px] w-full'>
          Our mission at Hearts for Hope is to raise awareness for heart disease and 
          support those affected by it. We strive to create a healthier community by advocating for changes in schools, 
          workplaces, and public spaces, including the reform of dietary and lifestyle choices. 
        </p>
      </div>
    </div>
  )
}

export default MissionStatement