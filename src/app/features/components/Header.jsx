import { useState, useRef } from "react";
import { useNavigate } from "react-router";
import { CgMenuRight } from "react-icons/cg";
import { RiSearch2Fill } from "react-icons/ri";
import { IoClose } from "react-icons/io5";
import { Home, Coffee, Heart } from "iconsax-reactjs";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import Search from "./Search";
import { coffees } from "../store/data";

const Header = () => {
  const navigate = useNavigate();
  const navContainer = useRef(null);
  const [isOpen, setIsOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [value, setValue] = useState("");

  useGSAP(() => {
    if (!navContainer.current) return;

    if (isOpen) {
      gsap.fromTo(
        navContainer.current,
        { opacity: 0, x: "100%", display: "none" },
        { opacity: 1, x: "0%", display: "block", duration: 0.4, ease: "power3.out" }
      );
    } else {
      gsap.to(navContainer.current, {
        opacity: 0,
        x: "100%",
        duration: 0.3,
        ease: "power3.in",
        onComplete: () => {
          gsap.set(navContainer.current, { display: "none" });
        },
      });
    }
  }, { dependencies: [isOpen] });

  const searches = value.trim()
    ? coffees.filter((item) =>
        item.title.toLowerCase().includes(value.toLowerCase())
      )
    : [];

  return (
    <header className="fixed top-0 left-0 right-0 h-16 bg-amber-400 z-50 shadow-md">
      <div className="flex h-full w-full justify-between items-center px-4 md:px-8 max-w-7xl mx-auto">

        {/* Logo Section - Modern */}
        <div
          onClick={() => navigate("/")}
          className="h-10 flex items-center cursor-pointer z-10 shrink-0 select-none"
        >
          <h1 className="font-[Poppins] text-2xl font-black uppercase text-gray-900 tracking-tighter flex items-end">
            C<span className="text-white">O</span>FFEE
            <div className="w-2 h-2 rounded-full bg-white ml-0.5 mb-1.5"></div>
          </h1>
        </div>

        {/* Center/Right Search Section */}
        <div className="flex flex-1 justify-end items-center px-4 z-10">
          <div className={`transition-all duration-300 ease-in-out flex items-center ${searchOpen ? 'w-full md:w-64 opacity-100' : 'w-0 opacity-0 overflow-hidden'}`}>
            {searchOpen && (
              <div className="relative w-full">
                <Search
                  value={value}
                  onChange={(e) => setValue(e.target.value)}
                />

                {/* Search Results Dropdown */}
                {searches.length > 0 && (
                  <div className="absolute top-full mt-3 w-full bg-white shadow-xl rounded-xl z-50 max-h-64 overflow-y-auto border border-gray-100">
                    {searches.map((item) => (
                      <div
                        key={item.id}
                        onClick={() => {
                          navigate(`/recipe/${item?.id}`);
                          setSearchOpen(false);
                          setValue("");
                        }}
                        className="px-4 py-3 cursor-pointer hover:bg-amber-50 border-b border-gray-50 last:border-0 transition-colors"
                      >
                        <h1 className="font-[Poppins] font-medium text-sm text-gray-800">
                          {item?.title} <span className="text-gray-400 text-xs ml-1">{item?.subtitle}</span>
                        </h1>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            )}
          </div>
        </div>

        {/* Controls Section */}
        <div className="flex items-center gap-5 z-10 shrink-0">
          <button
            onClick={() => {
                setSearchOpen(!searchOpen);
                if(isOpen) setIsOpen(false);
            }}
            className="cursor-pointer hover:scale-110 transition-transform"
          >
            {searchOpen ? <IoClose size={24} color="#1F2937" /> : <RiSearch2Fill size={24} color="#1F2937" />}
          </button>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="cursor-pointer hover:scale-110 transition-transform"
          >
            {isOpen ? (
              <IoClose size={26} color="#1F2937" />
            ) : (
              <CgMenuRight size={26} color="#1F2937" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile/Side Navigation Menu */}
      <nav
        ref={navContainer}
        style={{ display: 'none' }}
        className="fixed right-0 top-16 w-64 h-[calc(100vh-4rem)] bg-amber-400 border-l border-amber-300 shadow-2xl z-40 px-6 py-8"
      >
        <ul className="flex flex-col gap-8 font-medium text-gray-900 text-lg font-[Poppins]">
          <li
            onClick={() => { navigate("/"); setIsOpen(false); }}
            className="flex items-center cursor-pointer gap-4 hover:text-white transition-colors"
          >
            <Home variant="Bulk" size={24} />
            <span>Home</span>
          </li>
          <li
            onClick={() => { navigate("/recipe"); setIsOpen(false); }}
            className="flex items-center cursor-pointer gap-4 hover:text-white transition-colors"
          >
            <Coffee variant="Bulk" size={24} />
            <span>Recipe</span>
          </li>
          <li className="flex items-center cursor-pointer gap-4 hover:text-white transition-colors">
            <Heart variant="Bulk" size={24} />
            <span>Favorite</span>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
