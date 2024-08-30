import React from 'react'

const AboutFounder = () => {
  return (
    <div className="w-[100vw] bg-primary/50
    flex justify-center items-center px-4 max-xl:py-8">
      <div className="max-w-[1200px] w-full
      flex justify-between items-center gap-x-24
      max-xl:flex-col">
        <img src="/splash_one.jpg"
        className="max-w-[700px] h-full object-cover
        max-xl:max-w-none max-xl:w-full max-xl:max-h-[500px]
        max-xl:rounded-lg max-xl:shadow-md"/>
        <div className="py-6
        flex flex-col justify-center items-start gap-y-4">
          <h3 className='dynamic-subheading font-bold font-title'>About the Founder</h3>
          <p className="text-lg">Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi pariatur quibusdam vero id assumenda fugiat perspiciatis necessitatibus quaerat aut voluptas accusantium ad accusamus iusto, veritatis dolor! Laboriosam dolorem aliquid quis!</p>
        </div>
      </div>
    </div>
  )
}

export default AboutFounder