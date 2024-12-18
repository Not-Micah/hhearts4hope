import { contacts, socials } from "@/data"

const Footer = () => {
  return (
    <footer className='
        w-[100vw] py-12 px-8 bg-gray-100
        flex justify-center items-center
    '>
        <div className="flex flex-col gap-y-2
        max-w-max w-full">
            <div className="
                flex flex-row justify-between items-start gap-x-80
                max-lg:flex-col max-lg:gap-y-11
            ">
                <div className="flex flex-col justify-center items-start gap-y-7">
                    <img src="/logo.png" className='w-[100px]' />
                    <p className="text-body text-sm">
                    Join us to fight against heart disease and better communities all over the world!
                    </p>
                </div>
                <div className="flex flex-row justify-center items-start gap-x-12
                max-sm:flex-col max-sm:gap-y-6">
                    <div className="flex flex-col justify-start items-start gap-y-2">
                        <p className='font-semibold text-body'>Contacts</p>
                        {contacts.map((contact, index) => (
                            <p key={index} className="text-sm text-nowrap
                            text-body">{contact}</p>
                        ))}
                    </div>
                    <div className="flex flex-col justify-start items-start gap-y-2">
                        <p className='font-semibold text-body'>Socials</p>
                        <div className="flex flex-row gap-x-4">
                            {socials.map((social, index) => (
                                <a key={index} className="text-body">
                                    {social.icon}
                                </a>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
            <div className="
            w-full h-[1px] rounded-full bg-body/80 mt-9" />
            <div className="flex justify-between items-center
            max-lg:flex-col max-lg:items-start">
                <p className="text-sm text-body">@Copyright 2024 Hearts for Hope. All rights reserved.</p>
                <p className="text-sm text-body">This website was built by <a href="https://micahdev.vercel.app" className="underline">Micah Tid</a>.</p>
            </div>
        </div>
    </footer>
  )
}

export default Footer