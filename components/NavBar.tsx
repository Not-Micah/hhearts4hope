"use client";

import { navItems } from "@/data";                 
import { RxHamburgerMenu } from "react-icons/rx";    
import { IoIosClose } from "react-icons/io";
import useNavModal from "@/hooks/useNavModal";         

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
    </div>
  )
}

interface NavBarProps {
    transparent: boolean;
}

const NavBar: React.FC<NavBarProps> = ({ transparent }) => {
  const {onOpen, isOpen} = useNavModal();

  return (
    <nav className="w-[100vw] flex justify-center items-center
        bg-primary/30">
        <div className={`
        max-w-max w-full 
        px-12 py-4 max-lg:px-6
        flex justify-between items-center
        ${transparent && `bg-transparent px-2 max-2xl:px-8
        absolute top-[20px] left-1/2 transform -translate-x-1/2
        max-w-max`}`}>
            <a href="/"
            className={`${transparent && `bg-white p-2 rounded-full`}`}>
                <img src="/logo.png" className="w-[40px] h-[40px] object-cover" />
            </a>
            <div className="
            flex justify-center items-center gap-x-8
            max-md:hidden">
                {navItems.map((item, index) => (
                    <a 
                    className={`
                    font-semibold
                    text-black/70
                    ${transparent && 'text-white'}`}
                    href={item.link} key={index}>{item.label}</a>
                ))}
            </div>
            <button className="
            hidden max-md:inline-block
            rounded-lg bg-gray-400/40 shadow-sm
            p-3"
            onClick={onOpen}>
                <RxHamburgerMenu size={25} />
            </button>
        </div>
        <NavModal />
    </nav>
  )
}

export default NavBar