import { CgCoffee } from "react-icons/cg";
import { coffees } from "../store/data";
import { useNavigate, useParams } from "react-router";
import { useRef } from "react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import {ScrollTrigger} from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Coffee = () => {
  const { id } = useParams();
  const container = useRef(null);
  const navigate = useNavigate();

  const data = !id ? coffees:coffees.filter((coffee)=>String(coffee?.id)===id)

  useGSAP(() => {
    const sections = gsap.utils.toArray(".coffee-section", container.current);
    sections.forEach((section) => {
          const content = section.querySelector(".coffee-content");
          const img     = section.querySelector(".coffee-image");

          const tl = gsap.timeline({
            defaults: { duration: 2 },
            scrollTrigger: {
              trigger: section,
              scroller: container.current,
              start: "top 80%",
              toggleActions: "play none none reverse",
            },
          });

          tl.fromTo(content,
            { opacity: 0, x: -100 },
            { opacity: 1, x: 0, ease: "expo.out" }
          )
          .fromTo(img,
            { opacity: 0, y: 100 },
            { opacity: 1, y: 0, ease: "power3.out" },
            "-=0.5"
          );
        });

      }, { scope: container });

  return (
    <div
      ref={container}
      className="flex-1 h-full md:overflow-y-scroll md:snap-y md:snap-mandatory scroll-smooth no-scrollbar mb-4 md:mb-0 lg:mb-0"
    >
      {data.map((coffee) => (
        <section
          key={coffee?.id}
          className="coffee-section w-full h-full flex-col-reverse md:flex-row lg:flex-row md:snap-start flex items-center justify-between pt-16"
        >
          {/* Content */}
          <div className="coffee-content w-full px-8 md:w-1/2 lg:w-1/2 md:pl-20 lg:pl-20">
            <h1 className="font-[Poppins] font-bold md:font-extrabold lg:font-extrabold text-4xl md:text-6xl lg:text-7xl leading-none">
              {coffee?.title}
            </h1>
            <h1 className="font-[Poppins] font-bold md:font-extrabold lg:font-extrabold text-4xl md:text-6xl lg:text-7xl leading-none text-[#4B5668] mt-2">
              {coffee?.subtitle}
            </h1>
            <p className="text-justify font-[Poppins] text-[#4B5668] text-sm pt-6">
              {coffee?.description}
            </p>

            {id ? (
              <>
                <div className="flex justify-between pt-4">
                  <div className="cursor-pointer">
                    <span className="text-xs text-[#4B5668]">Serving</span> {/* ✅ text-0.5 is invalid, use text-xs */}
                    <h2 className="font-[Poppins] font-medium md:font-bold lg:font-bold text-xs text-[#9CA3AD]">
                      {coffee?.servings}
                    </h2>
                  </div>
                  <div className="cursor-pointer">
                    <span className="text-xs text-[#4B5668]">Prep Time</span>
                    <h2 className="font-[Poppins] font-medium md:font-semibold lg:font-semibold text-xs text-[#9CA3AD]">
                      {coffee?.prepTime}
                    </h2>
                  </div>
                  <div className="cursor-pointer">
                    <span className="text-xs text-[#4B5668]">Difficulty</span>
                    <h2 className="font-[Poppins] font-medium md:font-semibold lg:font-semibold text-xs text-[#9CA3AD]">
                      {coffee?.difficulty}
                    </h2>
                  </div>
                </div>

                <div className="flex justify-between py-3 gap-8">

                  {/* Ingredients */}
                  <div className="flex flex-col gap-2">
                    <h2 className="font-[Cormorant_Garamond] italic text-lg font-semibold tracking-widest text-[#C9A96E] uppercase mb-2">
                      Ingredients
                    </h2>
                    <div className="flex flex-col gap-1">
                      {coffee.ingredients.map((item, index) => (
                        <span
                          key={index}
                          className="font-[Poppins] text-xs font-light tracking-wider text-[#9CA3AD] flex items-center gap-2"
                        >
                          <span className="w-1 h-1 rounded-full bg-[#C9A96E] inline-block" /> {/* ✅ gold dot */}
                          {item}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Divider */}
                  <div className="w-px bg-[#C9A96E] opacity-30 self-stretch" /> {/* ✅ vertical gold line */}

                  {/* Tools */}
                  <div className="flex flex-col gap-2">
                    <h2 className="font-[Cormorant_Garamond] italic text-lg font-semibold tracking-widest text-[#C9A96E] uppercase mb-2">
                      Tools You Need
                    </h2>
                    <div className="flex flex-col gap-1">
                      {coffee.tools.map((item, index) => (
                        <span
                          key={index}
                          className="font-[Poppins] text-xs font-light tracking-wider text-[#9CA3AD] flex items-center gap-2"
                        >
                          <span className="w-1 h-1 rounded-full bg-[#C9A96E] inline-block" /> {/* ✅ gold dot */}
                          {item}
                        </span>
                      ))}
                    </div>
                  </div>

                </div>
              </>
            ) : (
              <>
                <div className="flex justify-between pt-4">
                  <div className="cursor-pointer">
                    <h2 className="font-[Poppins] font-medium md:font-semibold lg:font-semibold text-sm text-[#9CA3AD]">
                      Price: {coffee?.price}
                    </h2>
                  </div>
                  <div className="cursor-pointer">
                    <h2
                      onClick={() => navigate(`/recipe/${coffee?.id}`)}
                      className="font-[Poppins] font-medium md:font-semibold lg:font-semibold text-sm text-[#9CA3AD]"
                    >
                      Know Recipe &nbsp;⟶
                    </h2>
                  </div>
                </div>
                <button className="ring-1 ring-[#9CA3AD] rounded-3xl flex items-center text-[#9CA3AD] font-[Poppins] font-medium text-xs px-4 py-3 mt-5 cursor-pointer">
                  <CgCoffee className="inline-block mr-2" />
                  Add To Order
                </button>
              </>
            )}
          </div>
          {/* Image */}
          <div className="w-fit md:w-1/2 lg:w-1/2 h-full flex justify-center items-center">
            <img
              className="coffee-image w-[60%] h-full object-contain"
              src={coffee?.image}
              alt={coffee?.title || "Coffee"}
            />
          </div>
        </section>
      ))}
    </div>
  );
};

export default Coffee;
