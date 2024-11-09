import Buttons from '../components/Buttons'
import CardPricing from '../components/CardPricing'
import TypedText from '../components/TypedText'
import Table from '../components/Table'
import Questions from '../components/Questions'
import Footer from '../components/Footer'

const Home = () => {
  return (
    <div
      className="flex flex-col items-center justify-center gap-5 "
      style={{
        background: 'linear-gradient(100deg, #0079ec 30.25%, #43b1fe)'
      }}
    >
      <p className="flex text-4xl font-bold text-white mt-72 ">
        Apoint
        <span className="flex items-end mb-[7px] font-black">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="4"
            stroke="currentColor"
            className="size-6"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M12 4.5v15m7.5-7.5h-15"
            />
          </svg>
        </span>
      </p>
      <h1 className="max-w-4xl mb-5 overflow-hidden font-bold text-center text-white text-7xl">
        Una gran forma de conectar tu mundo.
      </h1>
      <Buttons
        text="Actualizar"
        bg="#000000"
        color="#ffffff"
        p="8px 22px"
        size="17px"
        margin="0"
      />

      <p className="text-[24px] max-w-4xl text-center text-white font-bold leading-8 mt-14 mb-20 ">
        Con Apoint, mantener tu agenda organizada nunca ha sido tan sencillo.
        Registra, organiza y accede a todas tus citas de forma automática desde
        tu WhatsApp. Además, nuestro sistema está diseñado para proteger tus
        datos y mantener toda tu información al alcance de tu mano, estés donde
        estés. ¿Necesitas más funcionalidades? ¡Pronto tendremos mejoras para
        ofrecerte una experiencia aún más completa!
      </p>

      <div className="flex max-w-6xl gap-6 mb-11">
        <CardPricing />
        <CardPricing />
        <CardPricing />
      </div>

      <p className="text-[20px] max-w-4xl text-center text-white font-bold leading-7 mb-5">
        Todos los planes de iCloud+ incluyen Retransmisión Privada de iCloud,
        Ocultar Mi Correo, Dominio de Correo Personalizado y Video Seguro de
        HomeKit. Y algunos ofrecen aún más espacio de almacenamiento.
      </p>

      <Buttons
        text="Comparar todos los planes"
        bg="#000000"
        color="#ffffff"
        p="8px 22px"
        size="17px"
        margin="0 0 11rem"
      />
      <div className="w-full bg-[#f5f5f7] pt-[139px]">
        <div className="flex flex-col items-center max-w-6xl gap-5 pt-20 mx-auto pb-36">
          <h1 className="text-[80px] font-extrabold text-[#1d1d1f] leading-none overflow-hidden ml-[14.5px] mb-[77px] p-1">
            Cuidamos tus cosas como tú lo harías.
          </h1>
          <div
            className="w-full h-[776px] bg-cover bg-center bg-no-repeat"
            style={{
              backgroundImage: `url(${'https://www.apple.com/mx/icloud/images/overview/everything_hero__o80m7600mtm6_large.jpg'})`
            }}
          ></div>

          <p className="max-w-4xl text-[20px] font-bold my-24 text-[#6e6e73]">
            <span className="text-[#1d1d1f]">Fotos en iCloud</span> guarda de
            forma segura tus fotos y videos en iCloud, en su formato original en
            alta resolución, mientras que en tus dispositivos se conservan
            versiones más ligeras para ahorrar espacio. Desde la foto que le
            tomaste ayer a tu perrito en la playa hasta las que te hiciste hace
            años con tus amigos, toda tu colección siempre estará disponible y
            lista para que la compartas, dondequiera que te encuentres.
          </p>

          <div className="flex w-full mb-3 gap-7">
            <div className="w-1/2 bg-white py-[50px] px-[50px] rounded-3xl flex flex-col gap-5">
              <p className="text-[20px] font-bold text-[#6e6e73] px-5">
                <span className="text-[#1d1d1f]">Fotos en iCloud</span> guarda
                de forma segura tus fotos y videos en iCloud, en su formato
                original en alta resolución, mientras que en tus dispositivos se
                conservan versiones más ligeras para ahorrar espacio. Desde la
                foto que le tomaste ayer a tu perrito en la playa hasta las que
                te hiciste hace años con tus amigos, toda tu colección siempre
                estará disponible y lista para que la compartas, dondequiera que
                te encuentres.
              </p>
              <p className="text-[20px] font-bold text-[#6e6e73] px-5 mb-5">
                <span className="text-[#1d1d1f]">Fototeca Compartida </span>te
                permite compartir fotos y videos con hasta cinco personas. El
                contenido compartido de la biblioteca también aparece en Fotos
                Destacadas y Recuerdos para que revivas tus mejores momentos con
                las fotos tomadas por los demás.
              </p>

              <div
                className="w-full h-[274px] bg-cover bg-center bg-no-repeat"
                style={{
                  backgroundImage: `url(${'https://www.apple.com/v/icloud/af/images/overview/shared_photos__bshvmpi0e7jm_large.jpg'})`
                }}
              ></div>
            </div>

            <div className="w-1/2 bg-white pt-[60px] pl-[70px] rounded-3xl flex flex-col justify-between">
              <p className="text-[20px] font-bold text-[#6e6e73] px-2 mr-[50px]">
                <span className="text-[#1d1d1f]">iCloud Drive </span>
                te ayuda a acceder y compartir fácilmente los archivos y
                carpetas que has guardado, sin importar el dispositivo que uses.
                Accede a todo el contenido desde la app Archivos en iOS y
                iPadOS, el Finder en la Mac, el Explorador de Archivos en una PC
                con Windows o directamente en el sitio iCloud.com.
              </p>

              <div
                className="w-full h-[500px] bg-cover bg-center bg-no-repeat"
                style={{
                  backgroundImage: `url(${'https://www.apple.com/mx/icloud/images/overview/icloud_drive__by48hqjrgpn6_large.jpg'})`
                }}
              ></div>
            </div>
          </div>

          <div className="flex w-full gap-7">
            <div className="flex flex-col w-1/2 gap-5 bg-white rounded-3xl">
              <div className=" bg-[#e8e7ec] py-[60px] px-[70px]">
                <div
                  className="w-full h-[336px] bg-cover bg-center bg-no-repeat"
                  style={{
                    backgroundImage: `url(${'https://www.apple.com/mx/icloud/images/overview/icloud_backup__bpyvgqlu4ifm_large.png'})`
                  }}
                ></div>
              </div>

              <p className="text-[20px] font-bold text-[#6e6e73]  mb-5 py-[50px] px-[70px]">
                <span className="text-[#1d1d1f]">Respaldo </span>te en iCloud
                hace un respaldo automático de la información más importante en
                tu iPhone y iPad, incluyendo las apps que más usas, siempre que
                el dispositivo esté conectado a la corriente y a una red Wi-Fi.
                Así, tus respaldos siempre están al día.2
              </p>
            </div>

            <div className="w-1/2 bg-white pt-[60px] pl-[70px] rounded-3xl flex flex-col justify-between">
              <p className="text-[20px] font-bold text-[#6e6e73] px-2 mr-[50px]">
                <span className="text-[#1d1d1f]">Restaura </span>
                tu dispositivo o configura uno nuevo desde una copia de respaldo
                en iCloud para poder recuperar con total facilidad tus fotos,
                archivos, contactos, apps, ajustes y más, de manera que todo
                luzca tal como lo tenías en el dispositivo anterior.
              </p>
              <div
                className="w-full h-[600px] bg-cover bg-top bg-no-repeat mt-[70px]"
                style={{
                  backgroundImage: `url(${'https://www.apple.com/mx/icloud/images/overview/restore__1dhzlb1j0yqm_large.jpg'})`
                }}
              ></div>
            </div>
          </div>
        </div>
      </div>
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

export default Home
