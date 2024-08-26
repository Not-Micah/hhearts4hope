import { contacts, socials } from "@/data"

const Footer = () => {
  return (
    <footer className='
        w-[100vw] py-12 px-8 bg-black/80
        flex justify-center items-center
    '>
        <div className="flex flex-col gap-y-2">
            <div className="
                max-w-[1000px]
                flex flex-row justify-between items-start gap-x-80
                max-lg:flex-col max-lg:gap-y-11
            ">
                <div className="flex flex-col justify-center items-start gap-y-7">
                    <img src="/logo.png" className='w-[100px] opacity-30' />
                    <p className="text-white text-sm">
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Modi doloribus perspiciatis soluta nemo blanditiis nulla atque porro ut nihil harum voluptates quo, cupiditate cum, debitis rerum? Eaque, cupiditate eum ad nulla tenetur corporis! Id, perspiciatis.
                    </p>
                </div>
                <div className="flex flex-row justify-center items-start gap-x-12
                max-sm:flex-col max-sm:gap-y-6">
                    <div className="flex flex-col justify-start items-start gap-y-2">
                        <p className='font-semibold text-white'>Contacts</p>
                        {contacts.map((contact, index) => (
                            <p key={index} className="text-sm text-nowrap
                            text-white">{contact}</p>
                        ))}
                    </div>
                    <div className="flex flex-col justify-start items-start gap-y-2">
                        <p className='font-semibold text-white'>Socials</p>
                        <div className="flex flex-row gap-x-4">
                            {socials.map((social, index) => (
                                <a key={index} className="text-white">
                                    {social.icon}
                                </a>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
            <div className="
            w-full h-[1px] rounded-full bg-white mt-9" />
            <div className="flex justify-between items-center
            max-lg:flex-col max-lg:items-start">
                <p className="text-sm text-white">@Copyright 2024 ILuvCats Inc. All rights reserved.</p>
                <p className="text-sm text-white">This website was built by <a href="https://micahdev.vercel.app" className="underline">Micah Tid</a>.</p>
            </div>
        </div>
    </footer>
  )
}

export default Footer