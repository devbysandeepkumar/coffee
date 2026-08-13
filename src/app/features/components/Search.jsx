import { RiSearch2Line } from "react-icons/ri";

const Search = ({ value, onChange }) => {
  return (
    <div className="w-full">
      <div className="w-full h-9 rounded-full px-3 flex items-center gap-2 bg-amber-200/80 border border-amber-400/60 focus-within:border-gray-800 focus-within:bg-white/90 transition-all shadow-inner">
        <RiSearch2Line className="text-gray-700 text-lg shrink-0" />
        <input
          className="w-full h-full bg-transparent outline-none font-[Poppins] text-sm text-gray-900 placeholder:text-gray-600 placeholder:text-xs"
          type="text"
          value={value}
          onChange={onChange}
          placeholder="Search coffee recipes..."
          autoFocus
        />
      </div>
    </div>
  );
};

export default Search;
