import icono from '../assets/icono.svg'
import { Link } from 'react-router-dom'
import { Menu, Toggle } from '../components/Menu'
import { useState, useEffect } from 'react'

const Dashboard = () => {
  const [activeMenuId, setActiveMenuId] = useState<string | null>(null) // Estado para almacenar el ID del menú activo

  // Función para alternar la visibilidad del menú específico
  const handleToggleClick = (menuId: string) => {
    setActiveMenuId((prevId) => (prevId === menuId ? null : menuId))
  }

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      // Verifica si el clic ocurrió fuera de los menús activos y del botón de Toggle
      const target = event.target as HTMLElement
      if (
        !target.closest('.menu-container') &&
        !target.closest('.toggle-button')
      ) {
        setActiveMenuId(null) // Cierra el menú si se hace clic fuera
      }
    }

    document.addEventListener('mousedown', handleClickOutside)

    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [])

  return (
    <div
      className="flex items-start w-screen h-screen p-5 "
      style={{
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        backgroundImage: `url('https://www.icloud.com/system/icloud.com/current/wallpaper_dark.svg')`
      }}
    >
      <div
        className="items-start justify-start w-10 h-full group-hover:flex menu-container"
        onClick={(e) => e.stopPropagation()}
      >
        {activeMenuId === '1' && <Menu top="3.5%" />}
        {activeMenuId === '2' && <Menu top="9.5%" />}
        {activeMenuId === '3' && <Menu top="15.5%" />}
        {activeMenuId === '4' && <Menu top="21.5%" />}
      </div>
      {/* Overlay for gradient */}
      <div
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          backgroundImage: `
            linear-gradient(64deg, #00355f, #002f6c 44.5%, #02006c)
          `,
          mixBlendMode: 'hard-light', // Use 'overlay' or 'multiply' for better color blending
          pointerEvents: 'none',
          zIndex: 1
        }}
      ></div>

      <div
        className="relative grid w-[100%] z-10 "
        style={{
          gridTemplateColumns: 'repeat(12, minmax(0, 1fr))' // Cambia 15 a 20 para 20 columnas
        }}
      >
        <div
          className=" col-start-1 col-end-2 m-5 h-[75px] w-[70px] rounded-2xl shadow-xl transition-all duration-500 ease-out transform hover:h-[324px] flex justify-center items-center flex-col group cursor-pointer"
          style={{
            background: 'rgba(0, 0, 0, .75)'
          }}
        >
          {/* Primer div siempre visible */}
          <div
            className=" w-[54px] h-[54px] rounded-lg transition-all duration-300 ease-out transform hover:scale-110 bg-cover bg-center bg-no-repeat shadow-md"
            style={{
              backgroundImage: `url(${icono})`
            }}
          ></div>
          <div
            className="w-[54px] h-[54px] rounded-lg transition-all duration-500 ease-out transform hover:scale-110 hidden group-hover:block mt-2 bg-cover bg-center bg-no-repeat shadow-md"
            style={{
              backgroundImage: `url(https://www.icloud.com/system/icloud.com/2426Hotfix47/17c4781c64e64e58b70a0e4c95a79a02.png)`
            }}
          ></div>

          {/* Segundo y tercer div ocultos inicialmente, visibles en hover del contenedor */}
          <div
            className=" w-[54px] h-[54px] rounded-lg transition-all duration-500 ease-out transform hover:scale-110 hidden group-hover:block mt-2 bg-cover bg-center bg-no-repeat shadow-md"
            style={{
              backgroundImage: `url(https://www.icloud.com/system/icloud.com/2426Hotfix47/ebeab73c2a29818f9af9f846581e3548.png)`
            }}
          >
            {/* Contenido opcional del segundo div */}
          </div>
          <div
            className=" w-[54px] h-[54px] rounded-lg transition-all duration-500 ease-out transform hover:scale-110 hidden group-hover:block mt-2 bg-cover bg-center bg-no-repeat shadow-md"
            style={{
              backgroundImage: `url(https://www.icloud.com/system/icloud.com/2426Hotfix47/3d9f23365cbc27cd1ac7f1acc1b3f087.png)`
            }}
          >
            {/* Contenido opcional del tercer div */}
          </div>
          <div
            className=" w-[54px] h-[54px] rounded-lg transition-all duration-500 ease-out transform hover:scale-110 hidden group-hover:block mt-2 bg-cover bg-center bg-no-repeat shadow-md"
            style={{
              backgroundImage: `url(https://www.icloud.com/system/icloud.com/2426Hotfix47/197229d0f30a0b31c7c089752788859e.png)`
            }}
          >
            {/* Contenido opcional del tercer div */}
          </div>
        </div>

        <div className="grid self-start grid-cols-11 col-start-4 col-end-10 gap-6 ">
          <Link
            to={'/settings'}
            className="col-span-4  h-[315px] shadow-lg m-2 rounded-xl px-10 py-8 flex flex-col gap-10"
            style={{
              background:
                'radial-gradient(circle at 97% 3.3%, rgba(0, 0, 0, .35) 0, rgba(0, 0, 0, .6) 164%)',
              backdropFilter: 'blur(24px)'
            }}
          >
            <div
              style={{
                backgroundImage: `url(https://i.pinimg.com/736x/db/c2/f1/dbc2f12b985adbd15525835d3804331d.jpg)`
              }}
              className="bg-cover bg-center rounded-full w-[114px] h-[114px] "
            ></div>
            <div>
              <h1 className="text-3xl font-bold text-white">Diego</h1>
              <p className="mb-3 font-medium text-[#ffffffa8]">
                dieguill0@outlook.com
              </p>
              <p className="font-semibold text-white">Lettuce+</p>
            </div>
          </Link>

          <Link
            to={''}
            className="flex flex-col h-[315px] rounded-xl shadow-lg m-2 col-span-7"
          >
            <div
              className="flex items-center px-2 py-2 h-1/5"
              style={{
                background: 'rgba(56, 56, 61, .6)',
                backdropFilter: 'blur(15px) saturate(86%)'
              }}
            >
              <div className="hover:bg-[rgba(116,116,128,0.25)] flex items-center  rounded-lg w-full px-2 py-1">
                <div
                  style={{
                    backgroundImage: `url(https://www.icloud.com/system/icloud.com/2426Hotfix47/d54ad91bda4e227aab4fc06c9e23bcc8.png)`
                  }}
                  className="bg-cover bg-center w-[40px] h-[40px] "
                ></div>
                <div className="px-3 leading-tight">
                  <p className="text-[21px] font-bold text-white">Apoint +</p>
                  <p className="text-[14px] text-[#ffffffa8]">Citas</p>
                </div>
              </div>
            </div>
            <div
              className="flex flex-col items-center w-full p-2 h-4/5"
              style={{
                background: 'rgba(0, 0, 0, .75)',
                backdropFilter: 'blur(15px)'
              }}
            >
              <div className="flex flex-col w-full h-full px-2">
                <div className="group hover:bg-[rgba(116,116,128,0.25)] flex items-center rounded-lg w-full pl-8 pr-8 h-1/4 ">
                  <div className="flex items-center justify-between w-full h-full border-b border-[#7474803f] py-1">
                    <div>
                      <p className="text-[16px] font-medium text-white">
                        Cita con el doctor
                      </p>
                      <div className="flex gap-3">
                        <p className="text-[14px] text-white">8/4/24</p>
                        <p className="text-[14px] text-[#ffffffa8]">
                          Summer Time
                        </p>
                      </div>
                    </div>
                    {/* Contenedor del menú, visible solo cuando está en hover */}
                    <div
                      className={`items-start justify-start w-10 h-full  transition-opacity duration-300 ease-in-out 
                        ${
                          activeMenuId === '1'
                            ? 'opacity-100 pointer-events-auto'
                            : 'opacity-0 pointer-events-none'
                        }
                        group-hover:opacity-100 group-hover:pointer-events-auto text-black rounded-lg toggle-button`}
                    >
                      <Toggle onClick={() => handleToggleClick('1')} />
                    </div>
                  </div>
                </div>
                <div className="group hover:bg-[rgba(116,116,128,0.25)] flex items-center rounded-lg w-full pl-8 pr-8  h-1/4">
                  <div className="flex items-center justify-between w-full h-full border-b border-[#7474803f] py-1">
                    <div>
                      <p className="text-[16px] font-medium text-white">
                        Cita con el doctor
                      </p>
                      <div className="flex gap-3">
                        <p className="text-[14px] text-white">8/4/24</p>
                        <p className="text-[14px] text-[#ffffffa8]">
                          Summer Time
                        </p>
                      </div>
                    </div>
                    {/* Contenedor del menú, visible solo cuando está en hover */}
                    <div
                      className={`items-start justify-start w-10 h-full  transition-opacity duration-300 ease-in-out 
                        ${
                          activeMenuId === '2'
                            ? 'opacity-100 pointer-events-auto'
                            : 'opacity-0 pointer-events-none'
                        }
                        group-hover:opacity-100 group-hover:pointer-events-auto text-black rounded-lg toggle-button`}
                    >
                      <Toggle onClick={() => handleToggleClick('2')} />
                    </div>
                  </div>
                </div>
                <div className="group hover:bg-[rgba(116,116,128,0.25)] flex items-center rounded-lg w-full pl-8 pr-8  h-1/4 ">
                  <div className="flex items-center justify-between w-full h-full  border-b border-[#7474803f] py-1">
                    <div>
                      <p className="text-[16px] font-medium text-white">
                        Cita con el doctor
                      </p>
                      <div className="flex gap-3">
                        <p className="text-[14px] text-white">8/4/24</p>
                        <p className="text-[14px] text-[#ffffffa8]">
                          Summer Time
                        </p>
                      </div>
                    </div>
                    {/* Contenedor del menú, visible solo cuando está en hover */}
                    <div
                      className={`items-start justify-start w-10 h-full  transition-opacity duration-300 ease-in-out 
                        ${
                          activeMenuId === '3'
                            ? 'opacity-100 pointer-events-auto'
                            : 'opacity-0 pointer-events-none'
                        }
                        group-hover:opacity-100 group-hover:pointer-events-auto text-black rounded-lg toggle-button`}
                    >
                      <Toggle onClick={() => handleToggleClick('3')} />
                    </div>
                  </div>
                </div>
                <div className="group hover:bg-[rgba(116,116,128,0.25)] flex items-center rounded-lg w-full pl-8 pr-8  h-1/4">
                  <div className="flex items-center justify-between w-full h-full py-1">
                    <div>
                      <p className="text-[16px] font-medium text-white">
                        Cita con el doctor
                      </p>
                      <div className="flex gap-3">
                        <p className="text-[14px] text-white">8/4/24</p>
                        <p className="text-[14px] text-[#ffffffa8]">
                          Summer Time
                        </p>
                      </div>
                    </div>
                    {/* Contenedor del menú, visible solo cuando está en hover */}
                    <div
                      className={`items-start justify-start w-10 h-full  transition-opacity duration-300 ease-in-out 
                        ${
                          activeMenuId === '4'
                            ? 'opacity-100 pointer-events-auto'
                            : 'opacity-0 pointer-events-none'
                        }
                        group-hover:opacity-100 group-hover:pointer-events-auto text-black rounded-lg toggle-button`}
                    >
                      <Toggle onClick={() => handleToggleClick('4')} />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Link>
          <Link
            to={''}
            className="h-24 col-span-11 m-2 bg-green-200 shadow-md rounded-xl"
            style={{
              background: 'rgba(0, 0, 0, .75)',
              backdropFilter: 'blur(15px)'
            }}
          ></Link>
        </div>
        <div className="col-span-3 col-start-10 ">
          <div className="conl-span-2 h-[900px] bg-white"></div>
        </div>
      </div>
    </div>
  )
}

export default Dashboard
