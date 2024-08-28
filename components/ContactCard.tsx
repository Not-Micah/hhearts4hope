"use client";

import { useState } from "react";
import { twMerge } from "tailwind-merge";

interface ContactCardProps {
    className?: string;
}

const ContactCard: React.FC<ContactCardProps> = ({ className }) => {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [phoneNumber, setPhoneNumber] = useState("");
    const [message, setMessage] = useState("");

    const inputFieldClassName = "border-[1px] border-gray-300 rounded-md p-1 outline-none font-title w-full";

    return (
        <form className={twMerge(`
        flex flex-col justify-center items-center gap-y-4
        p-8 rounded-lg shadow-xl bg-gray-100
        w-full max-sm:px-3
        `, className)}>
            <h3 className="font-title font-semibold dynamic-subheading text-center">Questions?</h3>
            <div className="flex justify-between items-center gap-x-6 w-full
            max-lg:flex-col max-lg:gap-y-4">
                <div className="w-full">
                    <p>First Name</p>
                    <input 
                        type="text" 
                        placeholder="Your First Name" 
                        className={inputFieldClassName} 
                        value={firstName} 
                        onChange={(e) => setFirstName(e.target.value)} 
                    />
                </div>
                <div className="w-full">
                    <p>Last Name</p>
                    <input 
                        type="text" 
                        placeholder="Your Last Name" 
                        className={inputFieldClassName} 
                        value={lastName} 
                        onChange={(e) => setLastName(e.target.value)} 
                    />
                </div>
            </div>
            <div className="w-full">
                <p>Email</p>
                <input 
                    type="email" 
                    placeholder="Your Email Address" 
                    className={inputFieldClassName} 
                    value={email} 
                    onChange={(e) => setEmail(e.target.value)} 
                />
            </div>
            <div className="w-full">
                <p>Phone Number</p>
                <input 
                    type="number" 
                    placeholder="Your Phone Number" 
                    className={inputFieldClassName} 
                    value={phoneNumber} 
                    onChange={(e) => setPhoneNumber(e.target.value)} 
                />
            </div>
            <div className="w-full">
                <p>Message</p>
                <textarea 
                    placeholder="Your Message" 
                    className={twMerge(inputFieldClassName, "resize-y")} 
                    value={message} 
                    onChange={(e) => setMessage(e.target.value)} 
                    rows={4}
                    style={{ minHeight: "80px", maxHeight: "400px" }}
                />
            </div>
            <button className="w-full bg-primary/80 rounded-full p-2
            text-white text-3xl max-lg:text-xl font-title">
                Submit
            </button>
        </form>
    );
}

export default ContactCard;
