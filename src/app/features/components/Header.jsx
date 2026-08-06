import { CgMenuRight } from "react-icons/cg";
import { RiSearch2Fill } from "react-icons/ri";
import {IoClose} from "react-icons/io5"
import logoImg from '../../../assets/logo.png'
import { useState } from "react";
import Navbar from "./Navbar";
import Search from "./Search";
import { coffees } from "../store/data";
import { useNavigate } from "react-router";

const Header = () => {
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [value, setValue] = useState("");

  const searches = value.trim()
    ? coffees.filter((item) =>
        item.title.toLowerCase().includes(value.toLowerCase())
      )
    : [];
  return (
    <header className="flex w-full justify-between items-center fixed top-0 left-0 right-0 z-50 px-8 py-5">
      <div className="w-28 h-10 flex items-center">
         <img src={logoImg} alt="" />
      </div>
      {searchOpen && (
        <div className="flex flex-1 justify-end items-center pr-2 relative">
          <Search
            value={value}
            onChange={(e) => setValue(e.target.value)}
          />

          {searches.length > 0 && (
            <div className="absolute top-full mt-2 w-1/3">
              {searches.map((item) => (
                <div key={item.id}  onClick={()=>navigate(`/recipe/${item?.id}`)} className="px-4 py-2 cursor-pointer">
                  <h1>
                    {item?.title} {item?.subtitle}
                  </h1>
                </div>
              ))}
            </div>
          )}
        </div>
      )}
      <div className="flex gap-8">
        <div className="cursor-pointer" onClick={()=>setSearchOpen(!searchOpen)}>
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
