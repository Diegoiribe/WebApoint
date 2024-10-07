import Buttons from './Buttons'

const CardPricing = () => {
  return (
    <div className="bg-white rounded-[30px] px-[60px] pt-[45px] pb-[40px] flex flex-col items-center gap-4">
      <div className="flex flex-col items-center">
        <span
          className="text-[14px]  text-[#0066CC] font-extralight mb-3
      "
        >
          Apoint+
        </span>
        <p className="text-[23px] font-bold">$1800 al mes</p>
      </div>

      <p className="text-[35px] font-bold">+1000 citas</p>
      <p className="text-center text-[18px] font-semibold mb-3 ">
        Gestión automática para miles de citas, recordatorios.
      </p>
      <Buttons
        bg="#0077ed"
        color="#fff"
        text="Actualizar"
        p="10px 20px"
        size="17px"
        margin="0"
      />
    </div>
  )
}

export default CardPricing
