// import { CgCoffee } from "react-icons/cg"
import { useParams } from "react-router"
import { coffees } from "../../store/data"
const Coffee = () => {
  const { id } = useParams();

  const data = !id ? coffees:coffees.filter((coffee)=>String(coffee?.id)===id)

  return (
  <div className="flex-1 h-full md:overflow-y-scroll md:snap-y md:snap-mandatory scroll-smooth no-scrollbar mb-4 md:mb-0 lg:mb-0">
  {data.map((coffee) => (
    <section
      key={coffee?.id}
      className="w-full h-full flex-col-reverse md:flex-row lg:flex-row md:snap-start flex items-center justify-between pt-16 "
    >
      <div className="w-full px-8 md:w-1/2 lg:w-1/2 md:pl-20 lg:pl-20">
        <h1 className="font-[Poppins] font-bold md:font-extrabold lg:font-extrabold text-4xl md:text-6xl lg:text-7xl leading-none">
          {coffee?.title}
        </h1>
        <h1 className="font-[Poppins] font-bold md:font-extrabold lg:font-extrabold text-4xl md:text-6xl lg:text-7xl leading-none text-[
#4B5668] mt-2">
          {coffee?.subtitle}
        </h1>
        <p className="text-justify font-[Poppins] text-[
#4B5668] text-0.5 pt-6">
          {coffee?.description}
        </p>
        <div className="flex justify-between pt-4">
          <div className="cursor-pointer">
             <span className="text-0.5 text-[#4B5668]"> Serving </span>
            <h2 className="font-[Poppins] font-medium md:font-bold lg:font-bold text-0.5 text-[#9CA3AD]">
             {coffee?.servings}
            </h2>
          </div>
          <div className="cursor-pointer">
            <span className="text-0.5 text-[#4B5668]">Prep Time</span>
            <h2 className="font-[Poppins] font-medium md:font-semibold lg:font-semibold text-0.5 text-[#9CA3AD]">
               {coffee?.prepTime}
            </h2>
          </div>
          <div className="cursor-pointer">
            <span className="text-0.5 text-[#4B5668]"> Difficulty</span>
            <h2 className="font-[Poppins] font-medium md:font-semibold lg:font-semibold text-0.5 text-[#9CA3AD]">
              {coffee?.difficulty}
            </h2>
          </div>
        </div>
        <div className="flex justify-between py-3">
          <div>
            <h2 className="font-bold text-white">Ingredients</h2>
            <div className="flex flex-col">
              {coffee.ingredients.map((item, index) => (
                <span key={index}>{item}</span>
              ))}
            </div>
          </div>
          <div className="gap-2">
            <h2 className="font-bold text-white">Tools You Need</h2>
            <div className="flex flex-col">
              {coffee.tools.map((item, index) => (
                <span className="text-0.5 font-normal" key={index}>{item}</span>
              ))}
            </div>
          </div>
        </div>
        {/* <button className="ring-1 ring-[#9CA3AD] rounded-3xl flex items-center text-[#9CA3AD] font-[Poppins] font-medium text-xs px-4 py-3 mt-5 cursor-pointer">
          <CgCoffee className="inline-block mr-2" />
          Start Making
        </button>*/}
      </div>
      <div className="w-fit md:w-1/2 lg:w-1/2 h-full flex justify-center items-center">
        <img
          className="w-[60%] h-full object-contain"
          src={coffee?.image}
          alt={coffee?.title || "Coffee"}
        />
      </div>
    </section>
  ))}
 </div>
  )
}
export default Coffee
