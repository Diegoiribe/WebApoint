import Buttons from '../components/Buttons'
import TypedText from '../components/TypedText'
import Table from '../components/Table'
import Questions from '../components/Questions'
import Footer from '../components/Footer'
import MovingCards from '../components/MovingCards'

const HomeTwo = () => {
  return (
    <div
      className="flex flex-col items-center justify-center gap-5 "
      style={{
        background: '#f5f5f7'
      }}
    >
      <MovingCards />

      <div className="w-full bg-white pt-[100px] -mt-5">
        <div className="flex flex-col items-center max-w-6xl gap-5 pt-20 mx-auto pb-36">
          <h1 className="text-[81px] font-extrabold text-[#1d1d1f] leading-none overflow-hidden ml-[14.5px] mb-[77px] p-1">
            Todo lo que necesitas, en todos lados.
          </h1>
          <div
            className="w-full h-[776px] bg-cover bg-center bg-no-repeat"
            style={{
              backgroundImage: `url(${'https://www.apple.com/mx/icloud/images/overview/always_on__djk4uvw7xmky_large.jpg'})`
            }}
          ></div>

          <p className="max-w-4xl text-[22px] font-bold mt-8 mb-4 text-[#6e6e73]">
            <span className="text-[#1d1d1f]">iCloud.com</span> fue rediseñado
            para que sea más fácil ver, gestionar y editar desde cualquier
            dispositivo todo lo que tienes almacenado en iCloud. Y con la app
            iCloud para Windows, podrás acceder a tus fotos y archivos guardados
            en iCloud directamente desde tu PC.
          </p>
          <div className="w-[56rem] flex h-autos">
            <p className="max-w-4xl text-[22px] font-bold text-[#0066cc] hover:border-b-[2.5px] border-[#0066cc] cursor-pointer leading-5">
              Visita iCloud.com
            </p>
            <span className="flex items-center ml-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="3"
                stroke="currentColor"
                className="size-4 text-[#0066cc]"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25"
                />
              </svg>
            </span>
          </div>
        </div>
      </div>
      <div className="bg-[#f5f5f7] w-full -mt-5 pt-[100px]">
        <div className="flex flex-col items-center max-w-6xl pt-20 mx-auto gap-7 pb-36">
          <div className="w-full h-[170px] mb-[77px]  overflow-hidden">
            <TypedText />
          </div>

          <div
            className="w-full h-[900px] bg-cover bg-center bg-no-repeat rounded-3xl pt-[75px] overflow-hidden"
            style={{
              backgroundImage: `url(${'https://www.apple.com/v/icloud/af/images/overview/awy_icloud_email_bg__fs8mp86bhi2y_large.jpg'})`
            }}
          >
            <p className="px-[95px] text-[20px] font-bold  text-[#fadbce] w-full overflow-hidden mb-10">
              <span className="text-[#fff]">Mail en iCloud </span>
              se integra a la perfección con la app Mail en tu iPhone, iPad o
              Mac. Y con iCloud.com puedes enviar y recibir correos desde
              cualquier lugar. Las funcionalidades de seguridad, como la
              protección contra correos no deseados y las opciones para prevenir
              el phishing, están diseñadas para impedir que tu bandeja de
              entrada se llene de correo basura. Además, configurar tu propia
              dirección de @icloud.com es facilísimo, y al suscribirte a
              iCloud+, podrás personalizarla con el dominio que quieras.
            </p>
            <div className="w-full px-[95px]">
              <div
                className="w-full h-[580px] bg-cover bg-center bg-no-repeat rounded-3xl "
                style={{
                  backgroundImage: `url(${'https://www.apple.com/mx/icloud/images/overview/awy_icloud_email__gftvz4cjwyum_large.png'})`
                }}
              ></div>
            </div>
          </div>

          <div className="bg-white rounded-3xl  py-[70px]">
            <p className="text-[20px] font-bold text-[#6e6e73] mt-8 mb-14 px-[95px]">
              <span className="text-[#1d1d1f]">Mensajes </span>te ayuda a tener
              todas tus conversaciones bajo control con opciones para editar
              texto, responder con un Tapback y cancelar el envío de un mensaje.
              Cuando sincronizas Mensajes en iCloud, puedes llevar tus
              conversaciones a cualquier lado, ya que tus mensajes se respaldan,
              se encriptan de extremo a extremo y se sincronizan en todos tus
              dispositivos.
            </p>
            <div className="bg-blue-500 h-24 rounded-full mx-3 text-white flex justify-center items-center text-[55px]">
              Un segundo. Voy a verlo desde mi iPhone.
            </div>
          </div>

          <div className="flex flex-col items-center justify-center max-w-2xl gap-10 mt-32 mb-12">
            <h1 className="text-[73px] font-bold text-[#1d1d1f] leading-none overflow-hidden text-center">
              Elige el plan que mas te conviene.
            </h1>
            <p className="text-[21px] font-bold  text-[#6e6e73] w-full overflow-hidden text-center">
              Todos los planes de iCloud+ se pueden compartir con tu familia.
            </p>
            <Buttons
              text="Actualizar a Apoint+"
              bg="#0077ed"
              color="#ffffff"
              p="8px 22px"
              size="19px"
              margin="0"
            />
          </div>
          <Table />
          <div className="flex flex-col items-center justify-center max-w-2xl gap-10 mt-32 mb-12">
            <h1 className="text-[70px] font-bold text-[#1d1d1f] leading-none overflow-hidden text-center pb-2">
              Las respuestas a tus preguntas.
            </h1>
          </div>
          <Questions />
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default HomeTwo
