import { coffees } from "../store/data";
import { useNavigate, useParams } from "react-router";
import { useRef } from "react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Coffee = () => {
  const { id } = useParams();
  const container = useRef(null);
  const navigate = useNavigate();

  const data = !id ? coffees : coffees.filter((coffee) => String(coffee?.id) === id);

  useGSAP(() => {
    const sections = gsap.utils.toArray(".coffee-section", container.current);
    sections.forEach((section) => {
      const content = section.querySelector(".coffee-content");
      const img = section.querySelector(".coffee-image");

      const tl = gsap.timeline({
        defaults: { duration: 1.5 },
        scrollTrigger: {
          trigger: section,
          scroller: container.current,
          start: "top 75%",
          toggleActions: "play none none reverse",
        },
      });

      tl.fromTo(
        content,
        { opacity: 0, x: -50 },
        { opacity: 1, x: 0, ease: "power3.out" }
      ).fromTo(
        img,
        { opacity: 0, y: 50, scale: 0.9 },
        { opacity: 1, y: 0, scale: 1, ease: "power3.out" },
        "-=1"
      );
    });
  }, { scope: container });

  return (
    // Fixed container: takes full viewport height minus header, handles CSS snapping
    <div
      ref={container}
      className="w-full h-[calc(100dvh-4rem)] mt-16 overflow-y-auto snap-y snap-mandatory scroll-smooth no-scrollbar"
    >
      {data.map((coffee) => (
        <section
          key={coffee?.id}
          className="coffee-section w-full h-full snap-start snap-always flex flex-col-reverse md:flex-row items-center justify-center"
        >
          {/* Content Wrapper - Bottom on mobile (55% height), Left on desktop (50% width) */}
          <div className="coffee-content w-full h-[55%] md:h-full md:w-1/2 flex flex-col justify-center px-6 md:px-12 lg:px-24 pb-6 md:pb-0">
            <h1 className="font-[Poppins] font-bold md:font-extrabold text-4xl md:text-5xl lg:text-7xl leading-tight">
              {coffee?.title}
            </h1>
            <h1 className="font-[Poppins] font-bold md:font-extrabold text-3xl md:text-5xl lg:text-7xl leading-none text-[#4B5668] mt-1 md:mt-2">
              {coffee?.subtitle}
            </h1>
            <p className="text-justify font-[Poppins] text-[#4B5668] text-xs md:text-sm pt-4 md:pt-6 line-clamp-4 md:line-clamp-none">
              {coffee?.description}
            </p>

            {id ? (
              <div className="mt-4 md:mt-6">
                {/* Stats Row */}
                <div className="flex justify-between items-center ">
                  <div className="text-center">
                    <span className="text-[10px] md:text-xs text-white uppercase tracking-wider">Serving</span>
                    <h2 className="font-[Poppins] font-semibold text-xs md:text-sm text-gray-200 mt-1">
                      {coffee?.servings}
                    </h2>
                  </div>
                  <div className="w-px h-8 bg-gray-200"></div>
                  <div className="text-center">
                    <span className="text-[10px] md:text-xs text-white uppercase tracking-wider">Prep Time</span>
                    <h2 className="font-[Poppins] font-semibold text-xs md:text-sm text-gray-200 mt-1">
                      {coffee?.prepTime}
                    </h2>
                  </div>
                  <div className="w-px h-8 bg-gray-200"></div>
                  <div className="text-center">
                    <span className="text-[10px] md:text-xs text-white uppercase tracking-wider">Difficulty</span>
                    <h2 className="font-[Poppins] font-semibold text-xs md:text-sm text-gray-200 mt-1">
                      {coffee?.difficulty}
                    </h2>
                  </div>
                </div>

                {/* Ingredients & Tools */}
                <div className="overflow-y-auto h-[20vh] md:h-auto md:max-h-[30vh] no-scrollbar pr-2">
                  <div className="flex justify-between gap-4 md:gap-8">
                    {/* Ingredients */}
                    <div className="flex-1 flex flex-col gap-2">
                      <h2 className="font-[Cormorant_Garamond] italic text-base md:text-lg font-semibold tracking-widest text-[#C9A96E] uppercase mb-1">
                        Ingredients
                      </h2>
                      <div className="flex flex-col gap-1.5">
                        {coffee.ingredients.map((item, index) => (
                          <span
                            key={index}
                            className="font-[Poppins] text-[11px] md:text-xs font-light tracking-wide text-gray-400 flex items-start gap-2"
                          >
                            <span className="w-1.5 h-1.5 rounded-full bg-[#C9A96E] shrink-0 mt-1" />
                            {item}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div className="w-px bg-[#C9A96E] opacity-20 self-stretch" />

                    {/* Tools */}
                    <div className="flex-1 flex flex-col gap-2">
                      <h2 className="font-[Cormorant_Garamond] italic text-base md:text-lg font-semibold tracking-widest text-[#C9A96E] uppercase mb-1">
                        Tools Needed
                      </h2>
                      <div className="flex flex-col gap-1.5">
                        {coffee.tools.map((item, index) => (
                          <span
                            key={index}
                            className="font-[Poppins] text-[11px] md:text-xs font-light tracking-wide text-gray-400 flex items-start gap-2"
                          >
                            <span className="w-1.5 h-1.5 rounded-full bg-[#C9A96E] shrink-0 mt-1" />
                            {item}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ) : (
              <div className="pt-6 md:pt-8">
                <button
                  onClick={() => navigate(`/recipe/${coffee?.id}`)}
                  className="px-6 py-3 md:px-8 md:py-4 bg-amber-400 hover:bg-amber-500 transition-colors cursor-pointer shadow-md"
                >
                  <span className="font-[Poppins] font-semibold text-xs md:text-sm text-gray-900 tracking-wide uppercase">
                    Know Recipe &nbsp;⟶
                  </span>
                </button>
              </div>
            )}
          </div>

          {/* Image Wrapper - Top on mobile (45% height), Right on desktop (50% width) */}
          <div className="w-full h-[45%] md:h-full md:w-1/2 flex justify-center items-center p-6 md:p-12">
            <img
              className="coffee-image w-auto max-w-[75%] md:max-w-[70%] h-full max-h-[90%] object-contain drop-shadow-2xl"
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
