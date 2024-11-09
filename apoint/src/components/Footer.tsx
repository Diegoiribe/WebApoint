import XIcon from '@mui/icons-material/X'
import FacebookIcon from '@mui/icons-material/Facebook'
import InstagramIcon from '@mui/icons-material/Instagram'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <footer className=" w-screen flex flex-col justify-center items-center py-10 bg-white -mt-5">
      <div className="mac:w-4/5 phone:w-[90%] flex phone:flex-col mac:flex-row justify-beetwen mt-10 ">
        <div className="mac:w-1/5 phone:w-full flex flex-col gap-5 phone:mb-10 mac:mb-0">
          <Link to={'/'} className="text-4xl font-medium overflow-hidden">
            Apoint+
          </Link>
          <p className="text-sm">
            © 2024 Apoint+. Todos los derechos reservados.
          </p>
          <select
            name="language"
            id="language"
            className="block appearance-none w-4/5 bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none cursor-pointer"
            defaultValue="es"
          >
            <option value="es" className="font-medium cursor-pointer">
              Español
            </option>
          </select>
        </div>
        <div className='"mac:w-4/5 phone:w-full flex flex-row phone:flex-wrap mac:flex-nowrap gap-5 phone:justify-center'>
          <div className=" flex flex-col gap-5 phone:w-[45%] desktop:w-1/5 mac:w-[10%]">
            <h2 className="text-gray-500 mac:font-medium phone:font-bold phone:text-sm mac:text-[16px]">
              Guia
            </h2>
            <Link
              to={'/'}
              className="font-medium cursor-pointer phone:text-sm mac:text-[16px]"
            >
              Inicio
            </Link>
            <a
              href="#news"
              className="font-medium cursor-pointer phone:text-sm mac:text-[16px]"
            >
              Noticias
            </a>
            <Link
              to={'/contact'}
              className="font-medium cursor-pointer phone:text-sm mac:text-[16px]"
            >
              Novedades
            </Link>
            <Link
              to={'/shop'}
              className="font-medium cursor-pointer phone:text-sm mac:text-[16px]"
            >
              Tienda
            </Link>
          </div>
          <div className=" flex flex-col gap-5 phone:w-[45%] mac:w-1/5">
            <h2 className="text-gray-500 mac:font-medium phone:font-bold phone:text-sm mac:text-[16px]">
              Sobre Apoint+
            </h2>
            <p className="font-medium cursor-pointer phone:text-sm mac:text-[16px]">
              Quienes somos
            </p>
            <p className="font-medium cursor-pointer phone:text-sm mac:text-[16px]">
              Politicas de privacidad
            </p>
            <p className="font-medium cursor-pointer phone:text-sm mac:text-[16px]">
              Condiciones de servicio
            </p>
            <p className="font-medium cursor-pointer phone:text-sm mac:text-[16px]">
              Politica de cookies
            </p>
            <p className="font-medium cursor-pointer phone:text-sm mac:text-[16px]">
              Divulgacion de afiliacion
            </p>
          </div>
          <div className=" flex flex-col gap-5 phone:w-[100%] phone:mb-10 mac:mb-0 mac:w-[30%] desktop:w-[22%]">
            <h2 className="text-gray-500 mac:font-medium phone:font-bold phone:text-sm mac:text-[16px]">
              Contacto
            </h2>
            <p className="font-medium phone:text-sm mac:text-[16px]">
              support@apoin.com
            </p>
          </div>
          <div className=" flex justify-around gap-5 phone:w-full mac:w-1/5">
            <a
              href="https://x.com/elephantarchive?s=11&t=fpiOzKtInuinFSVNvBUUCg"
              className="w-14 h-14 bg-gray-100 rounded-xl flex items-center justify-center cursor-pointer hover:bg-black hover:text-white"
            >
              <XIcon />
            </a>
            <a
              href="https://www.facebook.com/share/uqEoWuyK1mNpCkbi/?mibextid=dGKdO6"
              className="w-14 h-14 bg-gray-100 rounded-xl flex items-center justify-center cursor-pointer hover:bg-black hover:text-white"
            >
              <FacebookIcon />
            </a>
            <a
              href="https://www.instagram.com/elephant.archives/"
              className="w-14 h-14 bg-gray-100 rounded-xl flex items-center justify-center cursor-pointer hover:bg-black hover:text-white"
            >
              <InstagramIcon />
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
