"use client";

import { navItems } from "@/data";                      // Data
import { RxHamburgerMenu } from "react-icons/rx";       // Icons
import { IoIosClose } from "react-icons/io";
import useNavModal from "@/hooks/useNavModal";          // Hook

import { twMerge } from "tailwind-merge";

interface ButtonProps {
    className?: string;
}

const Button: React.FC<ButtonProps> = ({ className }) => {
    return (
        <a href="" className={
        twMerge(`
        bg-primary rounded-full
        font-semibold text-white
        px-4 py-2`, 
        className)
        }>Donate</a>
    )
}

const NavModal = () => {
  const {isOpen, onClose} = useNavModal();

  return (
    <div className={`
    w-[200px] h-[100vh]
    fixed top-0 right-0
    bg-gray-300/50 backdrop-blur-[2px]
    flex flex-col justify-start items-end gap-y-3
    p-8
    ${!isOpen && "hidden"}
    `}>
        <button className="mb-8" onClick={onClose}>
            <IoIosClose size={35} />
        </button>
        {navItems.map((item, index) => (
            <a key={index} href={item.link}
            className="
            text-lg font-semibold text-black/70
            ">
                {item.label}
            </a>
        ))}
        <Button className="text-lg mt-10" />
    </div>
  )
}

const NavBar = () => {
  const {onOpen, isOpen} = useNavModal();

  return (
    <nav className='
    w-[100vw] bg-white
    px-12 py-4
    flex justify-between items-center'>
        <img src="/logo.png" className="w-[50px]" />
        <div className="
        flex justify-center items-center gap-x-8
        max-md:hidden">
            {navItems.map((item, index) => (
                <a 
                className="
                font-semibold
                text-black/70"
                href={item.link} key={index}>{item.label}</a>
            ))}
            <Button />
        </div>
        <button className="
        hidden max-md:inline-block
        rounded-lg bg-gray-400/40 shadow-sm
        p-3"
        onClick={onOpen}>
            <RxHamburgerMenu size={25} />
        </button>
        <NavModal />
    </nav>
  )
}

export default NavBar