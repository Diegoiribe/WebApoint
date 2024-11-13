import icono from '../assets/icono.svg'
import Buttons from './Buttons'

type HeaderProps = {
  color: string
  active: boolean
}

const HeaderDash = ({ color, active }: HeaderProps) => {
  return (
    <div
      className={`flex flex-row justify-between col-start-1 px-5 py-2 transition-all duration-700 ease-in-out col-span-full`}
      style={{
        background: 'rgba(56, 56, 61, .6)',
        backdropFilter: 'blur(15px) saturate(86%)',
        opacity: active ? 1 : 0.8, // Suavizar la transición con opacidad si es necesario
        height: active ? '65px' : '45px',
        padding: active ? '12px 56px 12px 64px' : '8px 20px'
      }}
    >
      {active ? (
        <>
          <Buttons
            text="Add Widget"
            bg="#ffffff"
            color="#000"
            p="4px 22px"
            size="17px"
            margin="0 0"
          ></Buttons>
          <Buttons
            text="Done"
            bg="rgba(0, 0, 0, .75)"
            color="#fff"
            p="4px 22px"
            size="17px"
            margin="0 0"
          ></Buttons>
        </>
      ) : (
        <>
          <div className="flex flex-row items-center gap-2 ">
            <div
              className="h-[29px] bg-center bg-no-repeat bg-cover rounded-full w-7"
              style={{
                backgroundImage: `url(${icono})`
              }}
            ></div>

            <h1
              className="text-lg font-bold text-center"
              style={{ color: color }}
            >
              Lettuce
            </h1>
          </div>

          <div className="flex gap-2 transition-all duration-500 w-13">
            <div className="flex items-center justify-center h-[29px] rounded-full w-7">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="2"
                stroke="currentColor"
                className="text-white size-6"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M12 9v6m3-3H9m12 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                />
              </svg>
            </div>
            <div
              className="flex items-center h-full bg-white rounded-full w-7"
              style={{
                backgroundImage: `url(https://i.pinimg.com/736x/db/c2/f1/dbc2f12b985adbd15525835d3804331d.jpg)`
              }}
            ></div>
          </div>
        </>
      )}
    </div>
  )
}

export default HeaderDash
