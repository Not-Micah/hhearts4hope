import React from 'react'

const MissionStatement = () => {
  return (
    <div className="flex flex-col gap-y-4">
      <div className="w-[100vw] h-[300px] relative overflow-hidden">
        <img src="/splash_one.jpg" className='w-full h-full object-cover brightness-50 blur-[2px]'/>
        <h3 className='dynamic-subheading text-white
        absolute left-[50px] top-1/2 transform -translate-y-1/2
        max-lg:left-x'>Setting out to make a better world.</h3>
      </div>
      <div className="max-w-max mx-auto w-full my-44
      max-lg:my-8
      px-x py-8 flex flex-col justify-start items-start gap-y-8">
        <h3 className='dynamic-subheading'>Our Mission</h3>
        <p className='text-xl
        max-w-[800px] w-full'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque omnis rerum cum suscipit eveniet accusamus culpa voluptas eum sed mollitia molestias ullam, dolor itaque odio velit reiciendis, rem, delectus temporibus dolorem nostrum quibusdam illo aliquid deleniti sit. Distinctio, officiis. Debitis nam dicta obcaecati enim doloremque earum sequi placeat maxime qui.</p>
      </div>
    </div>
  )
}

export default MissionStatement