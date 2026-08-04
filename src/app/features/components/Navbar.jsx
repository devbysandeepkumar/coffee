import { Home, Coffee, Heart, Bag2, User, Setting2 } from "iconsax-reactjs"
const Navbar = () => {
  return (
    <main className="w-44 h-80 fixed right-18 top-5 bg-[#1B222C] px-5 py-6 border border-[#9CA3AD] rounded-lg transform transition ease-in duration-500 overflow-hidden text-white">
      <ul className="flex flex-col gap-6 font-medium">
        <li className="flex items-center cursor-pointer gap-3"><Home /><span>Home</span></li>
        <li className="flex items-center cursor-pointer gap-3"><Coffee /><span>Recipe</span></li>
        <li className="flex items-center cursor-pointer gap-3"><Heart /><span>Favorite</span></li>
        <li className="flex items-center cursor-pointer gap-3"><Bag2 /><span>My Orders</span></li>
        <li className="flex items-center cursor-pointer gap-3"><User /><span>Profile</span></li>
        <li className="flex items-center cursor-pointer gap-3"><Setting2 /><span>Settings</span></li>
      </ul>
    </main>
  )
}
export default Navbar
