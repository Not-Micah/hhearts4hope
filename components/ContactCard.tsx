"use client";

import { twMerge } from "tailwind-merge";

interface ContactCardProps {
    className?: string;
}

const ContactCard: React.FC<ContactCardProps> = ({ className }) => {
    const inputFieldClassName = "border-[1px] border-gray-300 rounded-md p-1 outline-none font-title w-full";
    
  return (
    <form className={twMerge(`
    flex flex-col justify-center items-center gap-y-4
    p-8 rounded-lg shadow-xl bg-gray-100
    w-full max-sm:px-3
    `, className)}>
        <h3 className="font-title font-semibold dynamic-subheading text-center">Still Wondering?</h3>
        <div className="flex justify-between items-center gap-x-6 w-full
        max-lg:flex-col max-lg:gap-y-4">
            <div className="w-full">
                <p className="font-title">First Name</p>
                <input type="text" placeholder="Your First Name" className={inputFieldClassName} />
            </div>
            <div className="w-full">
                <p className="font-title">Last Name</p>
                <input type="text" placeholder="Your Last Name" className={inputFieldClassName} />
            </div>
        </div>
        <div className="w-full">
            <p className="font-title">Email</p>
            <input type="email" placeholder="Your Email Address" className={inputFieldClassName} />
        </div>
        <div className="w-full">
            <p className="font-title">Phone Number</p>
            <input type="number" placeholder="Your Phone Number" className={inputFieldClassName} />
        </div>
        <div className="w-full">
            <p className="font-title">Message</p>
            <input type="text" placeholder="Your Message" className={inputFieldClassName} />
        </div>
        <button className="w-full bg-primary rounded-full p-2
        text-white text-3xl max-lg:text-xl font-title">
            Submit
        </button>
    </form>
  )
}

export default ContactCard