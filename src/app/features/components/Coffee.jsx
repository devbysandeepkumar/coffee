import { CgCoffee } from "react-icons/cg"
import { coffees } from "../store/data"

const Coffee = () => {
  return (
  <div className="flex-1 h-full snap-y snap-mandatory scroll-smooth no-scrollbar mb-4 md:mb-0 lg:mb-0">
  {coffees.map((coffee) => (
    <section
      key={coffee?.id}

      className="w-full h-full flex-col-reverse md:flex-row lg:flex-row snap-start flex items-center justify-between pt-16 "
    >

      <div className="w-full px-8 md:w-1/2 lg:w-1/2 md:pl-20 lg:pl-20">
        <h1 className="font-[Poppins] font-bold md:font-extrabold lg:font-extrabold text-4xl md:text-6xl lg:text-7xl leading-none">
          {coffee?.title}
        </h1>
        <h1 className="font-[Poppins] font-bold md:font-extrabold lg:font-extrabold text-4xl md:text-6xl lg:text-7xl leading-none text-[#4B5668] mt-2">
          {coffee?.subtitle}
        </h1>
        <p className="text-justify font-[Poppins] text-[#4B5668] text-0.5 pt-6">
          {coffee?.description}
        </p>

        <div className="flex justify-between pt-4">
          <div className="cursor-pointer">
            <h2 className="font-[Poppins] font-medium md:font-semibold lg:font-semibold text-0.5 text-[#9CA3AD]">
              Price: {coffee?.price}
            </h2>
          </div>
          <div className="cursor-pointer">
            <h2 className="font-[Poppins] font-medium md:font-semibold lg:font-semibold text-0.5 text-[#9CA3AD]">
              Know Recipe &nbsp;⟶
            </h2>
          </div>
        </div>

        <button className="ring-1 ring-[#9CA3AD] rounded-3xl flex items-center text-[#9CA3AD] font-[Poppins] font-medium text-xs px-4 py-3 mt-5 cursor-pointer">
          <CgCoffee className="inline-block mr-2" />
          Add To Order
        </button>
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
