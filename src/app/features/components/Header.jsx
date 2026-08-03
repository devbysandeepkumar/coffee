import { CgMenuRight } from "react-icons/cg";
import { RiSearch2Fill } from "react-icons/ri";

const Header = () => {
  return (
    <header className="flex justify-between items-center">
      <div className="w-28 h-10 flex items-center">
         <img src="/logo.png" alt="" />
      </div>
      <div className="flex gap-8">
        <div>
          <RiSearch2Fill size={24} color="#9CA3AD" />
        </div>
        <div>
          <CgMenuRight size={24} color="#9CA3AD"/>
        </div>
      </div>
    </header>
  )
}

export default Header
