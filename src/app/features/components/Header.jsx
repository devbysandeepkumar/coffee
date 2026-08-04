import { CgMenuRight } from "react-icons/cg";
import { RiSearch2Fill } from "react-icons/ri";
import {IoClose} from "react-icons/io5"
import logoImg from '../../../assets/logo.png'
import { useState } from "react";
import Navbar from "./Navbar";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <header className="flex w-full justify-between items-center fixed top-0 left-0 right-0 z-50 px-8 py-5">
      <div className="w-28 h-10 flex items-center">
         <img src={logoImg} alt="" />
      </div>
      <div className="flex gap-8">
        <div>
          <RiSearch2Fill size={24} color="#9CA3AD" />
        </div>
        {!isOpen ? (
          <button onClick={() => setIsOpen(!isOpen)} className="cursor-pointer">
          <CgMenuRight size={24} color="#9CA3AD"/>
          </button>
        ): (
        <button onClick={() => setIsOpen(!isOpen)} className="flex w-full justify-end cursor-pointer">
        <IoClose size={24} color="#9CA3AD" />
        </button>
        )}

      </div>
      {isOpen && (
        <Navbar onClick={()=>setIsOpen(!isOpen)}/>
      )}

    </header>
  )
}

export default Header
