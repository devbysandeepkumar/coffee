import React from "react"
import { CgCoffee } from "react-icons/cg"
import Header from "../../components/Header"
import { coffees } from "../../store/data"

const Home = () => {
  return (
    <div className="w-full h-full md:h-screen lg:h-screen bg-[#1B222C] text-white flex overflow-hidden">
      <div className="fixed top-0 left-0 right-0 z-50 px-8 py-5">
        <Header />
      </div>
      <div className="flex-col hidden md:flex lg:flex justify-center items-center gap-8 pl-8">
        <h1 className="font-[Poppins] text-sm font-semibold text-[#4B5668]">
         01
        </h1>
        <div className="flex justify-center items-center gap-3">
          <h1 className="font-[Poppins] text-sm font-semibold text-white">
           02
          </h1>
          <div className="w-1.5 h-1.5 rounded-sm bg-white shadow-sm shadow-white/50" />
        </div>
        <h1 className="font-[Poppins] text-sm font-semibold text-[#4B5668]">
         03
        </h1>
      </div>
     <div className="flex-1 h-full overflow-y-scroll snap-y snap-mandatory scroll-smooth no-scrollbar mb-4 md:mb-0 lg:mb-0">
        {coffees.map((coffee, index) => (
          <section
            key={coffee?.id || index}

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
    </div>
  )
}

export default Home
