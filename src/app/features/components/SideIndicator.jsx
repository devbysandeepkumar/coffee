import { useState, useRef, useEffect } from "react"

const SideIndicator = ({ children, total = 3 }) => {
  const [active, setActive] = useState(0)
  const containerRef = useRef(null)

  useEffect(() => {
    const container = containerRef.current
    if (!container) return

    const sections = container.querySelectorAll("section")

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = Array.from(sections).indexOf(entry.target)
            setActive(index)
          }
        })
      },
      { root: container, threshold: 0.6 }
    )

    sections.forEach((section) => observer.observe(section))
    return () => observer.disconnect()
  }, [])

  // Only show prev, current, next
  const visible = [active - 1, active, active + 1].filter(
    (i) => i >= 0 && i < total
  )

  return (
    <div className="flex flex-1 min-h-0 overflow-hidden">

      {/* Side numbers */}
      <div className="hidden md:flex flex-col justify-center items-center gap-8 pl-8 shrink-0">
        {visible.map((i) => {
          const isActive = i === active
          return (
            <div key={i} className="flex justify-center items-center gap-3">
              <h1
                className={`font-[Poppins] text-sm font-semibold transition-all duration-300 ${
                  isActive ? "text-white" : "text-[#4B5668]"
                }`}
              >
                {String(i + 1).padStart(2, "0")}
              </h1>
              {isActive && (
                <div className="w-1.5 h-1.5 rounded-sm bg-white shadow-sm shadow-white/50" />
              )}
            </div>
          )
        })}
      </div>

      {/* Scrollable content */}
      <div
        ref={containerRef}
        className="flex-1 overflow-y-scroll snap-y snap-mandatory scroll-smooth no-scrollbar"
      >
        {children}
      </div>

    </div>
  )
}

export default SideIndicator
