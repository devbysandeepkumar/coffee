const Search = ({value, onChange}) => {
  return (
    <main className="w-1/2 md:w-1/3 lg:w-1/3">
      <div className="w-full h-8 rounded-xl px-2 flex justify-center items-center bg-amber-300">
        <input className="w-full h-full outline-none" type="text" value={value} onChange={onChange} placeholder="Enter name of coffee."/>
      </div>
    </main>
  )
}
export default Search
