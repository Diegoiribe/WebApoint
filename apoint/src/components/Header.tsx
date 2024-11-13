import { useState, useEffect } from 'react'
import Buttons from './Buttons'
const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false)
  // Monitorear el scroll y cambiar el estado
  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY
      // Si el scroll es mayor a 44px, cambiamos el estado
      if (scrollTop > 4) {
        setIsScrolled(true)
      } else {
        setIsScrolled(false)
      }
    }
    window.addEventListener('scroll', handleScroll)
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])
  return (
    <header className="z-50 flex flex-col items-center max-w-5xl mx-auto">
      <ul
        className={`flex justify-between w-full items-center h-[44px] transition-opacity duration-300 ${
          isScrolled ? 'opacity-0' : 'opacity-100'
        }`}
      >
        <li className="text-xs font-normal text-[#000000CC]">Logo</li>
        <li className="text-xs font-normal text-[#000000CC]">Apoint</li>
        <li className="text-xs font-normal text-[#000000CC]">Equipo</li>
        <li className="text-xs font-normal text-[#000000CC]">Planes</li>
        <li className="text-xs font-normal text-[#000000CC]">Soporte</li>
        <li className="w-56 h-6 p-1 rounded-full bg-neutral-200">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="2"
            stroke="currentColor"
            className="size-4"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
            />
          </svg>
        </li>
        <li>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="2"
            stroke="currentColor"
            className="size-4"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M15.75 10.5V6a3.75 3.75 0 1 0-7.5 0v4.5m11.356-1.993 1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 0 1-1.12-1.243l1.264-12A1.125 1.125 0 0 1 5.513 7.5h12.974c.576 0 1.059.435 1.119 1.007ZM8.625 10.5a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm7.5 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z"
            />
          </svg>
        </li>
      </ul>
      {/* Div con filtro y color dinámico, que se hace fixed después del scroll */}
      <div
        className={`${
          isScrolled ? ' border-b fixed' : 'border-none relatvie'
        } w-full bg-white z-10 transition-all duration-300 top-0 border-neutral-300`}
        style={{
          backdropFilter: 'saturate(180%) blur(20px)',
          backgroundColor: isScrolled ? 'rgba(255, 255, 255, 0.8)' : '#ffffff' // Color dinámico
        }}
      >
        <div className="flex justify-between max-w-5xl mx-auto h-[52px] items-center">
          <div className="text-[21px] font-semibold flex">
            Apoint
            <span className="flex items-end mb-[7px] font-black">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="3"
                stroke="currentColor"
                className="size-3.5"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M12 4.5v15m7.5-7.5h-15"
                />
              </svg>
            </span>
          </div>
          <Buttons
            bg="#0076df"
            color="white"
            text="Log in"
            p="3px 20px"
            size="12px"
            margin="0"
          />
        </div>
      </div>
    </header>
  )
}
export default Header
