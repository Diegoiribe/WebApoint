import Buttons from './Buttons'
import ln from '../assets/ln.svg'
import lb from '../assets/lb.svg'
import { useState, useEffect } from 'react'

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false)

  // Monitorear el scroll y cambiar el estado
  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY
      // Si el scroll es mayor a 44px, cambiamos el estado
      if (scrollTop > 958) {
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
    <header className="fixed z-10 flex items-center justify-center w-screen p-5">
      <div
        className={`${
          isScrolled ? 'w-[72rem]' : 'w-[92rem]'
        } rounded-lg h-[5rem]  flex items-center justify-around p-3 shadow-md transition-all duration-300 border-neutral-300`}
        style={{
          backdropFilter: 'blur(20px)', // Ajusta la intensidad del blur aquí
          backgroundColor: isScrolled ? '#007aec69' : '#449f3c69' // Color de fondo blanco con opacidad
        }}
      >
        <div
          className="w-[7rem] h-full bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: isScrolled ? `url(${lb})` : `url(${ln})`
          }}
        ></div>
        <div className="flex gap-12">
          <p
            className={`${
              isScrolled ? 'text-white' : 'text-[#1d1d1f]'
            } font-bold  text-lg`}
          >
            Noticias
          </p>
          <p
            className={`${
              isScrolled ? 'text-white' : 'text-[#1d1d1f]'
            } font-bold text-lg`}
          >
            Planes
          </p>
          <p
            className={`${
              isScrolled ? 'text-white' : 'text-[#1d1d1f]'
            } font-bold text-lg`}
          >
            Soporte
          </p>
        </div>
        <div className="flex gap-5">
          <Buttons
            text="Probar gratis"
            bg={isScrolled ? '#ffffff' : '#1d1d1f'}
            color={isScrolled ? '#1d1d1f' : '#fff'}
            p="8px 22px"
            size="17px"
            margin="0"
            hover="#4ade80"
          />
          <Buttons
            text="Iniciar sesión"
            bg={isScrolled ? '#fff' : '#1d1d1f'}
            color={isScrolled ? '#1d1d1f' : '#fff'}
            p="8px 40px"
            size="17px"
            margin="0"
          />
        </div>
      </div>
    </header>
  )
}

export default Header
